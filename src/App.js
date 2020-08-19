import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SingleMovie from "./components/SingleMovie";

function App() {
   return (
      <>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:imdbID" component={SingleMovie} />
         </Switch>
      </>
   );
}

export default App;
