import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    projects: [Project]
    createdAt: String!
  }

  type Project {
    _id: ID!
    projectName: String!
    description: String!
    owner: String!
    createdAt: String!
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

  input SignUpInput{
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Query {
    projects: [Project]
    users: [User]
  }

  type Mutation{
    signUp(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Auth
    createProject(projectName: String!, description: String!): Project
    newUser(username: String!, email: String!, password: String!): User
  }
`;

export default typeDefs;