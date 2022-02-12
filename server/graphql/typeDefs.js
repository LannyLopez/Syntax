import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    token: String!
    createdAt: String!
  }

  type Query {
    getProjects: [Project]
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
    user: User!
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

  type Mutation{
    signUp(signUpInput: SignUpInput): User
    login(username: String!, password: String!): User!
    createProject(projectInput: ProjectInput): Project
  }
`;

export default typeDefs;