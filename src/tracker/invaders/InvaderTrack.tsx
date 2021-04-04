import { Card, Col, Row, Typography } from "antd";
import React from "react";

const { Title } = Typography;

type InvaderTrackProps = {};

const InvaderTrack: React.FC<InvaderTrackProps> = () => {
  return (
    <Card style={{ borderRadius: "10px" }}>
      <Row>
        <Col span={6}>
          <Title
            level={4}
            style={{
              marginTop: "10px",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            Discard
          </Title>
        </Col>
        <Col span={6}>
          <Title
            level={4}
            style={{
              marginTop: "10px",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            Ravage
          </Title>
        </Col>
        <Col span={6}>
          <Title
            level={4}
            style={{
              marginTop: "10px",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            Build
          </Title>
        </Col>
        <Col span={6}>
          <Title
            level={4}
            style={{
              marginTop: "10px",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            Explore
          </Title>
        </Col>
      </Row>
    </Card>
  );
};

export default InvaderTrack;
