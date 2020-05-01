import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>Vélo-cité</h1>
      <Switch>{/*<Route path="/" exact component={undefined} />*/}</Switch>
    </div>
  );
}

export default App;
