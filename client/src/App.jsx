// import './App.css';
import Header from "./Componets/Header";
import TinderCards from "./Componets/TinderCards";
import SwipeButtons from "./Componets/SwipeButtons";
import Signup from "./Componets/Signup";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./Componets/Landing";
import Chats from "./Componets/Chats";
import ChatScreen from "./Componets/Chatscreen";
import Login from './Componets/Login';

import { ApolloProvider,  ApolloClient,  InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "/graphql",
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
          <Route path='/chat/:person'>
          <Header backButton="/chat" />
            <ChatScreen />
          </Route>
            <Route path="/swipe">
              <Header />
              <TinderCards />
              <SwipeButtons />
            </Route>
            <Route path="/signup">
              <Header />
              <Signup />
            </Route>
            <Route path="/chat">
            <Header/>
            <Chats />
            </Route>
            <Route path="/login">
              <Header />
              <Login />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}
export default App;
