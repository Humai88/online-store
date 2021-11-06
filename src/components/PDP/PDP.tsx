import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_PRODUCT_BY_ID } from "../../grapgQL/queries";

export const PDP = () => {
  const { data } = useQuery<PDPQueryResponse>(GET_PRODUCT_BY_ID);
  const [item, setItem] = useState<Product>();
  useEffect(() => {
    if (data) {
      setItem(data.product);
    }
  }, [data]);

  return (
    <div>
      <h1>{item?.name}</h1>
      <h2>{item?.description}</h2>
    </div>
  );
};

//Types
interface PDPQueryResponse {
  product: Product;
}
interface Product {
  id: string;
  name: string;
  inStock: boolean;
  prices: Price[];
  gallery: string[];
  description: string;
  category: string;
  attributes: AttributeSet[];
}

interface Price {
  currency: string;
  amount: number;
}
interface Attribute {
  displayValue: string;
  value: string;
  id: string;
}
interface AttributeSet {
  id: string;
  name: string;
  type: string;
  items: Attribute[];
}
