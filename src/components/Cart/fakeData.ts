import { ProductCartItem } from "../../redux/reducers/cartReducer";

export const fakeData: ProductCartItem[] = [
  {
    id: "123",
    name: "T-Shirt",
    prices: [
      {
        currency: "USD",
        amount: 144.69,
      },
      {
        currency: "GBP",
        amount: 104,
      },
    ],
    gallery: [
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
    ],
    brand: "Adidas",
    attributes: [
      {
        items: [
          {
            displayValue: "40",
          },
          {
            displayValue: "41",
          },
          {
            displayValue: "42",
          },
          {
            displayValue: "43",
          },
        ],
      },
    ],
  },
  {
    id: "123",
    name: "T-Shirt",
    prices: [
      {
        currency: "USD",
        amount: 144.69,
      },
      {
        currency: "GBP",
        amount: 104,
      },
    ],
    gallery: [
      "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
    ],
    brand: "Adidas",
    attributes: [
      {
        items: [
          {
            displayValue: "40",
          },
          {
            displayValue: "41",
          },
          {
            displayValue: "42",
          },
          {
            displayValue: "43",
          },
        ],
      },
    ],
  },
];
