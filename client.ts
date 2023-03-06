import { GraphQLClient } from 'graphql-request';

const store = 'blueprintbetatest';
const token = '3accc15150c6fadc731a4763deb6a2ee'; // public access token
const url = `https://${store}.myshopify.com/api/2023-01/graphql.json`;
const authHeader = 'X-Shopify-Storefront-Access-Token';

const client = new GraphQLClient(url, {
  headers: {
    [authHeader]: token,
  },
});

export default client;
