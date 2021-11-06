import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_CURRENCIES } from "./../grapgQL/queries";

export const Currencies = () => {
  const { data } = useQuery<CurrencyQueryResponse>(GET_CURRENCIES);
  const [items, setItems] = useState<string[]>([]);
  useEffect(() => {
    if (data) {
      setItems(data.currencies);
    }
  }, [data]);

  return (
    <div>
      {items.map((el: any, i: any) => (
        <div key={i}>{el}</div>
      ))}
    </div>
  );
};

// Types
interface CurrencyQueryResponse {
  currencies: string[];
}
