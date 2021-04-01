import { Button, Modal, Radio } from "antd";
import React from "react";
import { atom, useRecoilState } from "recoil";
import { globalTrackerState, TrackerState } from "../Layout";

export const playerCountState = atom<number>({
  key: "playerCount",
  default: 2,
});

const Initializer: React.FC<unknown> = () => {
  const [trackerState, setTrackerState] = useRecoilState(globalTrackerState);
  const [playerCount, setPlayerCount] = useRecoilState(playerCountState);

  return (
    <Modal
      title={"Number of Players"}
      visible={trackerState === TrackerState.UNINITIALIZED}
      centered={true}
      closable={false}
      footer={
        <Button
          type="primary"
          onClick={() => {
            setTrackerState(TrackerState.IN_PROGRESS);
          }}
        >
          Start
        </Button>
      }
    >
      <Radio.Group
        style={{ display: "flex", justifyContent: "center" }}
        defaultValue={String(playerCount)}
        size="large"
        onChange={(event) => {
          setPlayerCount(Number(event.target.value));
        }}
      >
        <Radio.Button value="2">2</Radio.Button>
        <Radio.Button value="3">3</Radio.Button>
        <Radio.Button value="4">4</Radio.Button>
      </Radio.Group>
    </Modal>
  );
};

export default Initializer;
