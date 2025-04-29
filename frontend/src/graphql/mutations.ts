import { gql } from "@apollo/client";

export const ADD_EVENT = gql`
    mutation AddEvent($input: EventInput!) {
        addEvent(input: $input) {
            id
            title
        }
    }
`;


