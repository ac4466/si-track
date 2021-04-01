import { Col, Row } from "antd";
import React from "react";
import { useRecoilValue } from "recoil";
import { globalTrackerState, TrackerState } from "../Layout";
import Fear from "./modules/Fear";

const Tracker: React.FC = () => {
  const trackerState = useRecoilValue(globalTrackerState);

  if (trackerState === TrackerState.UNINITIALIZED) {
    return null;
  }

  return (
    <>
      <Row>
        <Col span={12}>
          <Fear />
        </Col>
        <Col span={12}></Col>
      </Row>
    </>
  );
};

export default Tracker;
