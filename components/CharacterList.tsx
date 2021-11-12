import React, { useState } from "react";
import { gql, NetworkStatus, useQuery } from "@apollo/client";
import CharacterListPresentation from "./CharacterListPresentation";

// Example: https://studio.apollographql.com/public/rick-and-morty-a3b90u/explorer?variant=current
const ALL_COUNTRIES_QUERY = gql`
  query getCharacters($page: Int!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
      }
      results {
        id
        name
        image
      }
    }
  }
`;

function CharacterList() {
  const [page, setPage] = useState(1);
  const getCharactersQueryVars = {
    page,
    name: "Morty",
  };
  const { loading, error, data, networkStatus } = useQuery(
    ALL_COUNTRIES_QUERY,
    {
      variables: getCharactersQueryVars,
      notifyOnNetworkStatusChange: true,
      nextFetchPolicy: "cache-first",
    }
  );

  const loadingMoreCharacters = networkStatus === NetworkStatus.fetchMore;

  return (
    <CharacterListPresentation
      loading={loading || loadingMoreCharacters}
      data={data}
      page={page}
      setPage={setPage}
      error={error}
    />
  );
}

export default CharacterList;
