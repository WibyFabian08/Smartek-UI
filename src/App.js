import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./assets/css/style.css";

import Home from "./pages/Home";
import About from "./pages/About";
import StudyCase from "./pages/StudyCase";
import Outsourcing from "./pages/Outsourcing";
import Contact from "./pages/Contact";
import Career from "./pages/Career";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/study-case" component={StudyCase}></Route>
          <Route exact path="/outsourcing" component={Outsourcing}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/career" component={Career}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
