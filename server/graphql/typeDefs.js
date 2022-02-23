import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    github: String!
    email: String!
    password: String!
    profilePic: String
  }

  type Project {
    _id: ID!
    projectName: String!
    description: String!
    owner: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input ProjectInput{
    projectName: String!
    description: String!
    owner: String!
  }

  type Query {
    projects: [Project]
    users: [User]
  }

  type Mutation{
    login(email: String!, password: String!): User
    newUser(firstName: String!, lastName: String!, github: String!, password: String!, email: String!, profilePic: String!): User
    logout: Boolean
  }
`;

export default typeDefs;
