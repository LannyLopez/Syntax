// import './App.css';
import Header from "./Componets/Header";
import TinderCards from "./Componets/TinderCards";
import SwipeButtons from "./Componets/SwipeButtons";
import Signup from "./Componets/Signup";
import Profile from "./Componets/Profile";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./Componets/Landing";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import Login from "./Componets/GoogleSignIn";
import Logout from "./Componets/GoogleSignOut";
import Test from "./pages/Test.js";
import SignupTest from "./pages/SignUpTest";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

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
            <Signup />
          </Route>
          <Route path="/profile">
            <Header />
            <Profile />
          </Route>
          <Route path="/landing">
            <Landing />
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
