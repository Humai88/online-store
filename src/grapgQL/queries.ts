import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORY_TITLE = gql`
  query ($category: String!) {
    category(input: { title: $category }) {
      products {
        name
        id
        gallery
        prices {
          currency
          amount
        }
        inStock
      }
    }
  }
`;

//     query {
//     category(input: { title: "tech" }) {
//       products {
//         name
//         id
//         prices {
//           currency
//           amount
//         }
//         gallery
//         inStock
//       }
//     }
//   }
// `;

export const GET_PRODUCT_BY_ID = gql`
  query {
    product(id: "xbox-series-s") {
      description
      id
      name
      inStock
      gallery
      category
      attributes {
        type
      }
      prices {
        currency
        amount
      }
      brand
    }
  }
`;

export const GET_CURRENCIES = gql`
  query {
    currencies
  }
`;
