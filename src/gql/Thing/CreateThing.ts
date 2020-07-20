import { gql } from 'apollo-boost';

export default gql`mutation CreateThing(
    $name: String!
    $content: String!
    $color: String!
  ) {
    createThing(
      data: {
        name: $name
        color: $color
        content: $content
      }
    ) {
      id
      name
      color
      content
    }
  }`;