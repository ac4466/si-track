import { Typography } from "antd";
import React from "react";
import Confetti from "react-confetti";
import { atom, useRecoilValue } from "recoil";
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
  border-radius: 10px;
  border: 1px solid #dcdcdc;
`;

export enum TrackerState {
  UNINITIALIZED,
  IN_PROGRESS,
  VICTORY,
}

export const globalTrackerState = atom<TrackerState>({
  key: "trackerState",
  default: TrackerState.UNINITIALIZED,
});

const Layout: React.FC<unknown> = ({ children }) => {
  const trackerState = useRecoilValue(globalTrackerState);

  return (
    <>
      {trackerState === TrackerState.VICTORY && (
        <Confetti
          numberOfPieces={500}
          tweenDuration={30000}
          initialVelocityY={{ min: 5, max: 5 }}
        />
      )}
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
    </>
  );
};

export default Layout;
