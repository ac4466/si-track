import { Col, Row } from "antd";
import React from "react";
import { useRecoilValue } from "recoil";
import { isTrackerInitializedState } from "./Initializer";
import Fear from "./modules/Fear";

const Tracker: React.FC = () => {
  const isTrackerInitialized = useRecoilValue(isTrackerInitializedState);

  if (!isTrackerInitialized) {
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
