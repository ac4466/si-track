import React from "react";
import { RecoilRoot } from "recoil";
import Layout from "./Layout";
import Tracker from "./tracker/Tracker";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Layout>
        <Tracker />
      </Layout>
    </RecoilRoot>
  );
};

export default App;
