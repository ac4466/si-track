import { Typography } from "antd";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

const Header = styled.div`
  flex: 0 1 auto;
  background: #1890ff;
  padding: 10px;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  background: LightYellow;
  flex: 1 1 auto;
  padding: 50px;
`;

const Content = styled.div`
  flex: 1 1 auto;
  background: white;
  max-width: 1000px;
  overflow: auto;
`;

const Layout: React.FC<unknown> = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <Typography.Title
          level={2}
          style={{ textAlign: "center", color: "white", margin: "0" }}
        >
          Spirit Island Tracker
        </Typography.Title>
      </Header>
      <Body>
        <Content>{children}</Content>
      </Body>
    </Wrapper>
  );
};

export default Layout;
