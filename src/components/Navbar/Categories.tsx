import React, { Component } from "react";
import { QueryResult } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import styles from "./Navbar.module.scss";
import { GET_CATEGORIES } from "../../grapgQL/queries";
import { NavLink } from "react-router-dom";
import { Spinner } from "../../UI-kit/Spinner";
export class Categories extends Component {
  render() {
    return (
      <Query query={GET_CATEGORIES}>
        {(result: QueryResult<CategoriesQueryResponse>) => {
          const { loading, error, data } = result;
          if (loading) return <Spinner />;
          if (error) console.log(error);
          return (
            <ul>
              {data?.categories.map((c) => {
                return (
                  <li key={c.name}>
                    <NavLink activeClassName={styles.active} to={`/${c.name}`}>
                      {c.name}
                      <div className={styles.underline}></div>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          );
        }}
      </Query>
    );
  }
}

// Types
interface CategoriesQueryResponse {
  categories: Category[];
}
interface Category {
  name: string;
}
