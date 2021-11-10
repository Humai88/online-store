import React, { Component } from "react";
import ProductItem from "./ProductItem/ProductItem";
import styles from "./PLP.module.scss";
import { RouteComponentProps } from "react-router-dom";
import { v4 } from "uuid";
import { Category } from "../../grapgQL/PLPResponseType";
import { AppStore } from "../../redux/store/store";
import { getProductsByCategoryTC } from "../../redux/reducers/productsReducer";
import { connect } from "react-redux";

class PLP extends Component<PLPPropsType> {
  componentDidMount() {
    const category = this.props.match.params.category;
    this.props.getProductsByCategoryTC(category);
  }
  componentDidUpdate(prevProps: PLPPropsType) {
    const category = this.props.match.params.category;
    if (category !== prevProps.match.params.category) {
      this.props.getProductsByCategoryTC(category);
    }
  }
  render() {
    const category = this.props.match.params.category;
    return (
      <>
        <div className={styles.wrapper}>
          <>
            {this.props.products.map((p) => {
              return (
                <ProductItem
                  link={`/products/${category}/${p.id}`}
                  inStock={p.inStock}
                  imgSrc={p.gallery[0]}
                  key={v4()}
                  title={`${p.brand} ${p.name}`}
                  price={p.prices[0].amount}
                />
              );
            })}
          </>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state: AppStore): Category => {
  return {
    products: state.products.products,
  };
};
export default connect(mapStateToProps, {
  getProductsByCategoryTC,
})(PLP);

//Types;
type PLPPropsType = RouteComponentProps<PathParamsType> &
  Category &
  MapDispatchType;

type PathParamsType = {
  category: string;
};

type MapDispatchType = {
  getProductsByCategoryTC: (category: string) => void;
};
