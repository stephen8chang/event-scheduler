import {gql} from "@apollo/client";

export const GET_EVENTS = gql`
  query GetEvents {
    events {
      id
      title
      description
      start_time
      end_time
    }
  }
`;