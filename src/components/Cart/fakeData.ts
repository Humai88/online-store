import { CartItemType } from "../../redux/reducers/shopReducer";

export const fakeData: CartItemType[] = [
  {
    inStock: true,
    category: "tech",
    description: "",
    id: "123",
    name: "T-Shirt",
    qty: 2,
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
    selectedAttr: [],
    gallery: [
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
    ],
    brand: "Adidas",
    attributes: [
      {
        name: "",
        type: "",
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
    inStock: true,
    category: "tech",
    description: "",
    id: "123",
    name: "T-Shirt",
    qty: 0,
    selectedAttr: [],
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
        name: "",
        type: "",
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
