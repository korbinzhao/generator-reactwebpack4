import React, { Component } from "react";
import ReactDOM from "react-dom";
import MyComponent from '../src/index';
// import MyComponent from '../lib/index';

const App = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};

// export default App;

ReactDOM.render(<App />, document.getElementById("app"));
