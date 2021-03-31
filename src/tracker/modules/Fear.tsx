import { RightOutlined, RollbackOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Typography } from "antd";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { playerCountState } from "../Initializer";

const { Title } = Typography;

const FEAR_PER_PLAYER = 4;

const Dot = styled.span`
  margin-right: 8px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: ${(props) => (props.filled ? "FireBrick" : "Gray")};
`;

const TerrorLevel: React.FC<{ level: number }> = ({ level }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title level={3} style={{ margin: "0px 8px 0px 0px" }}>
        Terror Level:
      </Title>
      <Title
        level={3}
        style={{
          margin: "0px 8px 0px 0px",
          color: level >= 0 ? "FireBrick" : "Gray",
        }}
      >
        1
      </Title>
      <Dot filled={level >= 1} />
      <Dot filled={level >= 2} />
      <Title
        level={3}
        style={{
          margin: "0px 8px 0px 0px",
          color: level >= 3 ? "FireBrick" : "Gray",
        }}
      >
        2
      </Title>
      <Dot filled={level >= 4} />
      <Dot filled={level >= 5} />
      <Title
        level={3}
        style={{
          margin: "0px 8px 0px 0px",
          color: level >= 6 ? "FireBrick" : "Gray",
        }}
      >
        3
      </Title>
      <Dot filled={level >= 7} />
      <Dot filled={level >= 8} />
      <Title
        level={3}
        style={{ margin: "0px", color: level >= 9 ? "FireBrick" : "Gray" }}
      >
        W
      </Title>
    </div>
  );
};

const Fear: React.FC<unknown> = () => {
  const playerCount = useRecoilValue(playerCountState);
  const totalFear = playerCount * FEAR_PER_PLAYER;

  const [fearPool, setFearPool] = useState<number>(totalFear);
  const [generatedFear, setGeneratedFear] = useState<number>(0);
  const [terrorLevel, setTerrorLevel] = useState<number>(0);

  const reset = () => {
    setFearPool(totalFear);
    setGeneratedFear(0);
    setTerrorLevel(terrorLevel + 1);
  };

  const increment = () => {
    setFearPool(fearPool - 1);
    setGeneratedFear(generatedFear + 1);
  };

  return (
    <Card title={<TerrorLevel level={terrorLevel} />}>
      <Row>
        <Col
          span={9}
          style={{ display: "flex", flexFlow: "column", alignItems: "center" }}
        >
          <Title level={4}>Fear Pool</Title>
          <Title level={1} style={{ margin: "0px" }}>
            {fearPool}
          </Title>
        </Col>
        <Col
          span={6}
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            danger
            shape="circle"
            icon={<RollbackOutlined />}
            onClick={reset}
            disabled={!!fearPool || terrorLevel === 9}
            style={{ display: "block" }}
          />
          <Button
            type="primary"
            size="large"
            shape="circle"
            icon={<RightOutlined />}
            onClick={increment}
            disabled={!fearPool || terrorLevel === 9}
            style={{ display: "block" }}
          />
        </Col>
        <Col
          span={9}
          style={{ display: "flex", flexFlow: "column", alignItems: "center" }}
        >
          <Title level={4}>Generated Fear</Title>
          <Title level={1} style={{ margin: "0px" }}>
            {generatedFear}
          </Title>
        </Col>
      </Row>
    </Card>
  );
};

export default Fear;
