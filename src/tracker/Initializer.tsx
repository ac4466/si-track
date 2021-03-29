import { Button, Modal, Radio } from "antd";
import React from "react";
import { atom, useRecoilState } from "recoil";

export const isTrackerInitializedState = atom<boolean>({
  key: "isTrackerInitialized",
  default: false,
});

export const playerCountState = atom<number>({
  key: "playerCount",
  default: 2,
});

const Initializer: React.FC<unknown> = () => {
  const [isInitialized, setIsInitialized] = useRecoilState(
    isTrackerInitializedState
  );
  const [playerCount, setPlayerCount] = useRecoilState(playerCountState);

  return (
    <Modal
      title={"Number of Players"}
      visible={!isInitialized}
      centered={true}
      closable={false}
      footer={
        <Button
          type="primary"
          onClick={() => {
            setIsInitialized(true);
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
