import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($name: String!) {
    login(name: $name) {
      token
      author {
        name
      }
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation newUser($firstName: String!, $lastName: String!, $email: String!, $github: String!, $password: String!) {
    newUser(firstName: $firstName, lastName: $lastName, github: $github, email: $email, password: $password)
    {
      _id
      firstName
      lastName
      github
      email
    }
  }
`;

