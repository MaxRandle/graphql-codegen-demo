import { GraphQLClient } from "graphql-request";

if (!process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT) {
  console.log(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT);
  throw new Error("Missing environment variable: NEXT_PUBLIC_GRAPHQL_ENDPOINT");
}

const requestHeaders = {};

const graphqlRequestClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  requestHeaders
);

export default graphqlRequestClient;
