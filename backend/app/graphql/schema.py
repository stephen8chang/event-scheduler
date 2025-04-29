from ariadne import make_executable_schema, gql
from app.graphql.resolvers import query, mutation

type_defs = gql("""
    type Event {
        id: ID!
        title: String!
        description: String
        start_time: String
        end_time: String
    }
    
    type Query {
        events: [Event!]!
    }

    input EventInput {
        title: String!
        description: String
        start_time: String
        end_time: String
    }
    
    type Mutation {
        addEvent(input: EventInput!): Event!
    }
""")

schema = make_executable_schema(type_defs, query, mutation)