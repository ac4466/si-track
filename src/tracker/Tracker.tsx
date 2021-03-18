import { Grid } from "@material-ui/core";
import React from "react";
import { atom, useRecoilState } from "recoil";
import InitializerOptions from "./InitializerOptions";

const isTrackerInitializedState = atom<boolean>({
  key: "isTrackerInitialized",
  default: false,
});

const Tracker: React.FC = () => {
  const [isInitialized, setIsInitialized] = useRecoilState(
    isTrackerInitializedState
  );

  if (!isInitialized) {
    return (
      <InitializerOptions
        initialize={() => {
          setIsInitialized(true);
        }}
      />
    );
  }

  return <Grid container spacing={1}></Grid>;
};

export default Tracker;
