// import './App.css';
import Header from "./Componets/Header";
import TinderCards from "./Componets/TinderCards";
import SwipeButtons from "./Componets/SwipeButtons";
import Signup from "./Componets/Signup";
import Profile from "./Componets/Profile";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/swipe">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route path="/signup">
            <Header />
            <Signup />
          </Route>
          <Route path="/profile">
            <Header />
            <Profile />
          </Route>
          <Route path="/">
            <div>placeholder</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
