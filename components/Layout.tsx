import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

import { Layout as AntLayout, Menu } from "antd";

const { Header, Content, Footer } = AntLayout;

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <AntLayout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/about">About</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 380,
            background: "white",
            marginTop: 30,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Leito ©{new Date().getFullYear()}
      </Footer>
    </AntLayout>
  </>
);

export default Layout;
