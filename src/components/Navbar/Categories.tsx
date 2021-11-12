import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  getCategoriesTC,
  getProductsByCategoryTC,
} from "../../redux/reducers/shopReducer";
import { CategoriesQueryResponse } from "../../grapgQL/CategoriesResponseType";
import { AppStore } from "../../redux/store/store";

class Categories extends Component<CategoriesPropsType> {
  componentDidMount() {
    this.props.getCategoriesTC();
  }
  render() {
    const { categories } = this.props;
    return (
      <ul>
        {categories.map((c) => {
          return (
            <li key={c.name}>
              <NavLink
                activeClassName={styles.active}
                to={`/products/${c.name}`}
              >
                {c.name}
                <div className={styles.underline}></div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  }
}
const mapStateToProps = (state: AppStore): CategoriesQueryResponse => {
  return {
    categories: state.products.categories,
  };
};
export default connect(mapStateToProps, {
  getCategoriesTC,
  getProductsByCategoryTC,
})(Categories);

// Types
type MapDispatchType = {
  getCategoriesTC: () => void;
};
type CategoriesPropsType = CategoriesQueryResponse & MapDispatchType;
