import { gql } from "graphql-request";

const ProductsQuery = gql`
  query GetProducts($limit: Int) {
    products(first: $limit) {
      edges {
        node {
          id
          title
          variants(first: 5) {
            nodes {
              sku
            }
          }
        }
      }
    }
  }
`;

export default ProductsQuery;