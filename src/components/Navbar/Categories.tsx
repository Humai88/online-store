import React, { Component } from "react";
import { QueryResult } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import styles from "./Navbar.module.scss";
import { GET_CATEGORIES } from "../../grapgQL/queries";
import { NavLink } from "react-router-dom";
import { Spinner } from "../../UI-kit/Spinner";
export class Categories extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      clickedItem: 0,
    };
  }
  componentDidMount() {
    const category = localStorage.getItem("category");
    if (category) {
      this.setState({ clickedItem: +category });
    }
  }

  render() {
    return (
      <Query query={GET_CATEGORIES}>
        {(result: QueryResult<CategoriesQueryResponse>) => {
          const { loading, error, data } = result;
          if (loading) return <Spinner />;
          if (error) console.log(error);
          return (
            <>
              {data?.categories.map((c, i) => {
                return (
                  <li
                    className={
                      i === this.state.clickedItem ? `${styles.active}` : ""
                    }
                    key={c.name}
                    onClick={() => {
                      this.setState({
                        clickedItem: i,
                      });
                      localStorage.setItem(
                        "categoty",
                        String(this.state.clickedItem)
                      );
                    }}
                  >
                    <NavLink to={`/${c.name}`}>
                      {c.name}
                      <div className={styles.underline}></div>
                    </NavLink>
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
type StateType = {
  clickedItem: number;
};
type PropsType = {};
interface CategoriesQueryResponse {
  categories: Category[];
}
interface Category {
  name: string;
}
