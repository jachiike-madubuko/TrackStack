import { gql } from 'apollo-boost';

export default gql`query GetThing($thingId: ID!) {
    thing(where: { id: $thingId }) {
    id
    name
    color
    content
  }
  }`;