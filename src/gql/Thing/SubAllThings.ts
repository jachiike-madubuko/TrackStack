import { gql } from 'apollo-boost';

export default gql`subscription SubAllThings {
     thing{
    id
    name
    color
    content
  }
  }`;