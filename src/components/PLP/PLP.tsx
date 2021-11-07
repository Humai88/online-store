import { QueryResult, useQuery } from "@apollo/client";
import { GET_PRODUCTS_BY_CATEGORY_TITLE } from "../../grapgQL/queries";
import React, { Component, useEffect } from "react";
import { Query } from "@apollo/client/react/components";
import ProductItem from "./ProductItem/ProductItem";
import styles from "./PLP.module.scss";
import { useParams } from "react-router-dom";

// export class PLP extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <>
//         <h2 className={styles.header}>Categoty title</h2>
//         <div className={styles.wrapper}>
{
  /* <Query query={GET_PRODUCTS_BY_CATEGORY_TITLE} variables={{ title }}>
            {(result: QueryResult<PLPQueryResponse>) => {
              const { loading, error, data } = result;
              if (loading) return <h1>Loading...</h1>;
              if (error) console.log(error);
              return (
                <>
                  {data?.category.products.map((p) => {
                    return (
                      <ProductItem
                        imgSrc={p.gallery[0]}
                        key={p.id}
                        title={p.name}
                        price={p.prices[0].amount}
                      />
                    );
                  })}
                </>
              );
            }}
          </Query> */
}
//         </div>
//       </>
//     );
//   }
// }

export const PLP = () => {
  const { category } = useParams();
  return (
    <>
      <h2 className={styles.header}>Categoty title</h2>
      <div className={styles.wrapper}>
        <Query query={GET_PRODUCTS_BY_CATEGORY_TITLE} variables={{ category }}>
          {(result: QueryResult<PLPQueryResponse>) => {
            const { loading, error, data } = result;
            if (loading) return <h1>Loading...</h1>;
            if (error) console.log(error);
            return (
              <>
                {data?.category.products.map((p) => {
                  return (
                    <ProductItem
                      imgSrc={p.gallery[0]}
                      key={p.id}
                      title={p.name}
                      price={p.prices[0].amount}
                    />
                  );
                })}
              </>
            );
          }}
        </Query>
      </div>
    </>
  );
};

// Types
interface PLPQueryResponse {
  category: Category;
}
interface Category {
  products: Product[];
}

interface Product {
  id: string;
  name: string;
  inStock: boolean;
  gallery: string[];
  prices: Price[];
}

interface Price {
  currency: string;
  amount: number;
}
