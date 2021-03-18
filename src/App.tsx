import { Box } from "@material-ui/core";
import React from "react";
import { RecoilRoot } from "recoil";
import Header from "./layout/Header";
import Tracker from "./tracker/Tracker";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Box width="100%" height="100%">
        <Header />
        <Tracker />
      </Box>
    </RecoilRoot>
  );
};

export default App;
