import { QueryResult, useQuery } from "@apollo/client";
import { GET_PRODUCTS_BY_CATEGORY_TITLE } from "../../grapgQL/queries";
import React, { Component, useEffect } from "react";
import { Query } from "@apollo/client/react/components";
import ProductItem from "./ProductItem/ProductItem";
import styles from "./PLP.module.scss";
//import { useParams } from "react-router-dom";
import { Spinner } from "../../UI-kit/Spinner";
import { RouteComponentProps, useParams } from "react-router-dom";

export class PLP extends Component<PLPPropsType> {
  render() {
    const category = this.props.match.params.category;
    return (
      <>
        <h2 className={styles.header}>{category}</h2>
        <div className={styles.wrapper}>
          <Query
            query={GET_PRODUCTS_BY_CATEGORY_TITLE}
            variables={{ category }}
          >
            {(result: QueryResult<PLPQueryResponse>) => {
              const { loading, error, data } = result;
              if (loading) return <Spinner />;
              if (error) console.log(error);

              return (
                <>
                  {data?.category.products.map((p) => {
                    return (
                      <ProductItem
                        link={`/${category}/${p.id}`}
                        imgSrc={p.gallery[0]}
                        key={p.id}
                        title={`${p.brand} ${p.name}`}
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
  }
}

// export const PLP = () => {
//   const { category } = useParams<{ category: string }>();

//   return (
//     <>
//       <h2 className={styles.header}>{category}</h2>
//       <div className={styles.wrapper}>
//         <Query query={GET_PRODUCTS_BY_CATEGORY_TITLE} variables={{ category }}>
//           {(result: QueryResult<PLPQueryResponse>) => {
//             const { loading, error, data } = result;
//             if (loading) return <Spinner />;
//             if (error) console.log(error);
//             return (
//               <>
//                 {data?.category.products.map((p) => {
//                   return (
//                     <ProductItem
//                       link={`/${category}/${p.id}`}
//                       imgSrc={p.gallery[0]}
//                       key={p.id}
//                       title={`${p.brand} ${p.name}`}
//                       price={p.prices[0].amount}
//                     />
//                   );
//                 })}
//               </>
//             );
//           }}
//         </Query>
//       </div>
//     </>
//   );
// };

//Types;

type PLPPropsType = RouteComponentProps<PathParamsType>;
type PathParamsType = {
  category: string;
};
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
  brand: string;
}

interface Price {
  currency: string;
  amount: number;
}
