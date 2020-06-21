// Import the react and ReactDom libraries
import React from "react";
import ReactDom from "react-dom";

// create react component
const App = () => {
  return <div>Bonjour React !</div>;
};

// Take the react componet ans show in on the screen

ReactDom.render(<App />, document.querySelector("#root"));
