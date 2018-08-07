import React from "react";
import ReactDOM from "react-dom";
import Content from './content.jsx';

const App = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
