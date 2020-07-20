import { gql } from 'apollo-boost';

export default gql`mutation UpdateThing(
    $name: String!
    $content: String!
    $color: String!
  ) {
    updateRecipe(
      data: {
        name: $name
        color: $color
        content: $content
      }
    ) {
      id
    }
  }`;