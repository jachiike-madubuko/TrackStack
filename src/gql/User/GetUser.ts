import { gql } from 'apollo-boost';

export default gql`query GetAllThings {
     things{
    id
    name
    color
    content
  }
  }`;