import * as React from "react";
import { Layout, Menu, Typography } from "antd";
import "antd/dist/antd.css";
import "./app.css";

const RemoteApp = React.lazy(() => import("app2/App"));

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

export const App = () => {
  return (
    <Layout className="layout">
      <Header className="header">
        <Title level={4} style={{ color: "#fff" }}>
          Host app
        </Title>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu>
            <Menu.Item>Ссылка 1</Menu.Item>
            <Menu.Item>Ссылка 2</Menu.Item>
            <Menu.Item>Ссылка 3</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: 24 }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <React.Suspense fallback="Loading Button">
              <RemoteApp />
            </React.Suspense>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
