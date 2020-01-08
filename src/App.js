import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* <Route path="/babys" component={BabysPage}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
