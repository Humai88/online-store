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
        attributes {
          type
          name
          items {
            displayValue
          }
        }
        inStock
        brand
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query ($id: String!) {
    product(id: $id) {
      description
      id
      name
      inStock
      gallery
      category
      attributes {
        type
        name
        items {
          displayValue
        }
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
