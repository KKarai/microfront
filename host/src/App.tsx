import React, { lazy } from "react";
import { Layout, Menu, Typography } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import "antd/dist/antd.css";
import "./app.css";

const RemoteApp1 = lazy(() => import("app1/App"));
const RemoteApp2 = lazy(() => import("app2/App"));

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

export const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <Header className="header">
          <Title level={4} style={{ color: "#fff" }}>
            Host app
          </Title>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu>
              <Menu.Item key="app1">
                <Link to="/app1">App1</Link>
              </Menu.Item>
              <Menu.Item key="app2">
                <Link to="/app2">App2</Link>
              </Menu.Item>
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
              <Switch>
                <Route exact path="/">
                  <Title level={3}>Home</Title>
                </Route>
                <Route path="/app1">
                  <ErrorBoundary>
                    <React.Suspense fallback="Loading Button">
                      <RemoteApp1 />
                    </React.Suspense>
                  </ErrorBoundary>
                </Route>
                <Route path="/app2">
                  <ErrorBoundary>
                    <React.Suspense fallback="Loading Button">
                      <RemoteApp2 />
                    </React.Suspense>
                  </ErrorBoundary>
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};
