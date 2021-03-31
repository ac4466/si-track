import React from "react";
import { RecoilRoot } from "recoil";
import Layout from "./Layout";
import Initializer from "./tracker/Initializer";
import Tracker from "./tracker/Tracker";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Layout>
        <Initializer />
        <Tracker />
      </Layout>
    </RecoilRoot>
  );
};

export default App;
