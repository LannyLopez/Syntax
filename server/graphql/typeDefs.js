import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    github: String!
    email: String!
    password: String!
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
    signUp(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    createProject(projectName: String!, description: String!): Project
    newUser(firstName: String!, lastName: String!, github: String!, password: String!, email: String!): User
    logout: Boolean
  }
`;

export default typeDefs;
