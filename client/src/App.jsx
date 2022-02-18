// import './App.css';
import Header from "./Componets/Header";
import TinderCards from "./Componets/TinderCards";
import SwipeButtons from "./Componets/SwipeButtons";
import Signup from "./Componets/Signup";
import Login from "./Componets/Login";
import halfHeader from "./Componets/halfHeader";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


import { ApolloProvider, ApolloClient, InMemoryCache,createHttpLink } from '@apollo/client'
import Login from "./Componets/GoogleSignIn";
import Logout from "./Componets/GoogleSignOut";
import Test from "./pages/Test.js";
import SignupTest from "./pages/SignUpTest";


const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
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
              <SignupTest />
            </Route>
            <Route path="/query">
              <Test />
            </Route>
            <Route path="/">
              <h1>hi</h1>
              <Login />
              <Logout />
            </Route>
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}
export default App;
