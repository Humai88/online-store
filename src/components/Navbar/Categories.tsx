import React, { Component } from "react";
import { QueryResult } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import styles from "./Navbar.module.scss";
import { GET_CATEGORIES } from "../../grapgQL/queries";

export class Categories extends Component {
  render() {
    return (
      <Query query={GET_CATEGORIES}>
        {(result: QueryResult<CategoriesQueryResponse>) => {
          const { loading, error, data } = result;
          if (loading) return <h1>Loading...</h1>;
          if (error) console.log(error);
          return (
            <>
              {data?.categories.map((c) => {
                return (
                  <li key={c.name}>
                    <a href="#">{c.name}</a>
                    <div className={styles.underline}></div>
                  </li>
                );
              })}
            </>
          );
        }}
      </Query>
    );
  }
}

// Tyles
interface CategoriesQueryResponse {
  categories: Category[];
}
interface Category {
  name: string;
}
