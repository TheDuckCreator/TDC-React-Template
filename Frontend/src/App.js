import React from "react";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import "./main.css";
import "./tailwind.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import configureStore from "./redux/configureStore";
import Container from "./containers";

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Chaesonvintage </title>
        </Helmet>
        <Container />
      </div>{" "}
    </Provider>
  );
};

export default App;
