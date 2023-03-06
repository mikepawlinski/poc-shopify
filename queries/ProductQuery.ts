import { gql } from "graphql-request";

const ProductQuery = gql`
  query GetProduct($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      handle
      images(first: 5) {
        nodes {
          src
        }
      }
      variants(first: 50) {
        nodes {
          sku
          title
          image {
            src
          }
          price {
            amount
          }
        }
      }
    }
  }
`;

export default ProductQuery;
