import Navbar from "./Navbar";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewTopic from "./Create";
import TopicDetails from "./TopicDetails";

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
              <NewTopic />
            </Route>
            <Route path="/topics/:id">
              <TopicDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
