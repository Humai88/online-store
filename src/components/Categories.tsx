import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "./../grapgQL/queries";

export const Categories = () => {
  const { data } = useQuery(GET_CATEGORIES);
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (data) {
      setItems(data.categories);
    }
  }, [data]);

  return (
    <div>
      {items.map((el: any, i: any) => (
        <div key={i}>{el.name}</div>
      ))}
    </div>
  );
};
