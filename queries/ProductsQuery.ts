import { gql } from "graphql-request";

const ProductsQuery = gql`
  query GetProducts($limit: Int) {
    products(first: $limit) {
      edges {
        node {
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
    }
  }
`;

export default ProductsQuery;
