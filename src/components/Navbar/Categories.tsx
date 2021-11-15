import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  getCategoriesTC,
  getProductsByCategoryTC,
} from "../../redux/reducers/shopReducer";
import {
  CategoriesQueryResponse,
  Category,
} from "../../grapgQL/CategoriesResponseType";
import { AppStore } from "../../redux/store/store";
import { RequestStatusType } from "../../redux/reducers/appReducer";
import { Spinner } from "../../UI-kit/Spinner";

class Categories extends Component<CategoriesPropsType> {
  componentDidMount() {
    this.props.getCategoriesTC();
  }
  render() {
    const { categories, status } = this.props;
    return (
      <ul>
        {status === "loading" && <Spinner />}
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
const mapStateToProps = (state: AppStore): MapStateToPropsType => {
  return {
    categories: state.products.categories,
    status: state.app.status,
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
type MapStateToPropsType = {
  categories: Category[];
  status: RequestStatusType;
};
type CategoriesPropsType = CategoriesQueryResponse &
  MapDispatchType &
  MapStateToPropsType;
