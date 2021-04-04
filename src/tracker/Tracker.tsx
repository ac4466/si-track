import { Col, Row } from "antd";
import React from "react";
import { useRecoilValue } from "recoil";
import { globalTrackerState, TrackerState } from "../Layout";
import Fear from "./Fear";
import InvaderTrack from "./invaders/InvaderTrack";

const Tracker: React.FC = () => {
  const trackerState = useRecoilValue(globalTrackerState);

  if (trackerState === TrackerState.UNINITIALIZED) {
    return null;
  }

  return (
    <>
      <Row>
        <Col span={12} style={{ padding: "10px 5px 10px 10px" }}>
          <Fear />
        </Col>
        <Col span={12} style={{ padding: "10px 10px 10px 5px" }}>
          <div
            style={{
              border: "1px dotted silver",
              borderRadius: "10px",
              height: "100%",
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ padding: "0px 10px 10px 10px" }}>
          <InvaderTrack />
        </Col>
      </Row>
    </>
  );
};

export default Tracker;
