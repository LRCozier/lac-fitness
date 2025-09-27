import {GraphQLClient} from 'graphql-request';

const hygraphurl = process.env.HYGRAPH_URL;
const hygraphToken = process.env.HYGRAPH_TOKEN;

if (!hygraphurl || hygraphToken) {
  throw new Error(
    'HYGRAPH_URL and HYGRAPH_TOKEN need to be defined in env file'
  )
}

export const hygraphClient = new GraphQLClient(hygraphurl, {
  headers: {
    Authorization: `Bearer ${hygraphToken}`,
  }, fetch,
});