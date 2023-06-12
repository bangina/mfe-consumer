import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "header/Header";

const App = () => (
  <div>
    I'm MFE-CONSUMER 🙋‍♂️
    <Header />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
