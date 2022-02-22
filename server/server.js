import 'dotenv/config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql/index.js';
import auth from './utils/auth.js';
import db from './db/index.js';
import path from 'path';

import passport from 'passport';
import { GraphQLLocalStrategy, buildContext } from 'graphql-passport'

const app = express();
const PORT = 3001;

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
});

// if (process.env.NODE_ENV === 'production'){
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

await server.start();

//passport stuff
// app.use(passport.initialize())
// app.use(passport.session())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
server.applyMiddleware({ app });


db.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(
      `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
});

