
import React from "react";
import "./App.css";

import Option from './Option.js';

function App() {
  return (
    <div className="body">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>
      <Option name="option1"/>
      <Option name="option2"/>
      <Option name="option3"/>
      <Option name="option4"/>
    </div>
  );
}

export default App;
