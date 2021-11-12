import React from "react";
import { Pagination, Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text: string) => {
      return <span>{text}</span>;
    },
  },
  {
    title: "Image",
    key: "image",
    dataIndex: "image",
    render: (image: string) => (
      <img src={image} alt={name} width="30px" height="30px" />
    ),
  },
];

interface Props {
  loading: boolean;
  data: any;
  page: number;
  setPage: (page: number) => void;
  error: any;
}

function CharacterListPresentation({
  loading,
  data,
  page,
  setPage,
  error,
}: Props) {
  if (error) return <div> Error loading posts." </div>;
  if (loading) return <div>Loading</div>;

  const { characters } = data;

  const Paginantor = (
    <Pagination
      defaultCurrent={1}
      current={page}
      total={characters.info.count}
      pageSizeOptions={[]}
      pageSize={20}
      onChange={(page: number) => setPage(page)}
    />
  );

  return (
    <div>
      {Paginantor}
      <Table
        loading={loading}
        pagination={false}
        columns={columns}
        dataSource={characters.results.map((character: any) => ({
          ...character,
          key: character.id,
        }))}
      />
      {Paginantor}
    </div>
  );
}

export default CharacterListPresentation;
