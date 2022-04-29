import React from "react";
import { Home } from "./pages/Home/Home";
import { MonthStatistics } from "./pages/MonthStatistics/MonthStatistics";
import { Route, Switch } from "react-router-dom";
import { Header } from "./shared/Header/Header";
// import { Popup } from "./shared/Popup/Popup";

function App() {
  return (
    <div className="App">
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/month-statistics" exact component={MonthStatistics} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
