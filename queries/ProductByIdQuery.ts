import { gql } from "graphql-request";

const ProductByIdQuery = gql`
  query GetProduct($id: String!) {
    productById(id: $id) {
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

export default ProductByIdQuery;
