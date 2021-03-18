import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@material-ui/core";
import React from "react";
import { atom, useRecoilState } from "recoil";

export const playerCountAtom = atom<number>({
  key: "playerCount",
  default: 2,
});

const InitializerOptions: React.FC<{
  initialize: () => void;
}> = ({ initialize }) => {
  const [playerCount, setPlayerCount] = useRecoilState(playerCountAtom);

  const onChange = (_, value) => {
    setPlayerCount(value);
  };

  return (
    <Dialog open={true}>
      <DialogTitle>Number of Players</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ToggleButtonGroup value={playerCount} exclusive onChange={onChange}>
          <ToggleButton value="2">
            <Typography variant="h4">2</Typography>
          </ToggleButton>
          <ToggleButton value="3">
            <Typography variant="h4">3</Typography>
          </ToggleButton>
          <ToggleButton value="4">
            <Typography variant="h4">4</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={initialize}>Start</Button>
      </DialogActions>
    </Dialog>
  );
};

export default InitializerOptions;
