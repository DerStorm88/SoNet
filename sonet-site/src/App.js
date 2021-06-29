import Navbar from "./Navbar";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewTerm from "./Create";
import TermDetails from "./TermDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/create">
              <NewTerm />
            </Route>
            <Route path="/terms/:id">
              <TermDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
