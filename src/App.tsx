import { AppBar, Box, Container, Toolbar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";

type PopupSx = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

const generatePopupSx = (): PopupSx => {
  const isTop = Math.random() > 0.5;
  const isLeft = Math.random() > 0.5;

  const x = `${Math.random() * 450}px`;
  const y = `${Math.random() * 290}px`;

  return {
    top: isTop ? y : undefined,
    bottom: isTop ? undefined : y,
    left: isLeft ? x : undefined,
    right: isLeft ? undefined : x,
  };
};

const App: React.FC = () => {
  const [popups, setPopups] = useState<Array<PopupSx>>([]);

  const addPopup = () => {
    setPopups([...popups, generatePopupSx()]);
  };

  return (
    <Container maxWidth="md">
      <AppBar position="static">
        <Toolbar
          sx={{
            justifyContent: "center",
          }}
        >
          <Typography variant="h4">주현아...</Typography>
        </Toolbar>
      </AppBar>
      <Button
        variant="contained"
        color="primary"
        sx={{
          mt: "15px",
        }}
        onClick={addPopup}
      >
        Click me! ♥️
      </Button>

      <Box position="relative" width="100%" height="600px">
        {popups.map((sx, index) => (
          <Typography
            key={index}
            position="absolute"
            variant="h5"
            align="center"
            sx={sx}
          >
            너무
          </Typography>
        ))}
      </Box>

      <Typography mt="10px" variant="h4" align="center">
        사랑해~~
      </Typography>
    </Container>
  );
};

export default App;
