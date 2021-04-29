import { gql } from '@apollo/client';

const CREATE_USER_MUTATION = gql`
  mutation SignUpMutation(
    $name: String!
    $password: String!
    $email: String!
  ) {
    signup(name: $name, password: $password, email: $email) {
      token
    }
  }
`;

export default CREATE_USER_MUTATION;