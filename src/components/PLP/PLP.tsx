import React, { Component } from "react";
import ProductItem from "./ProductItem/ProductItem";
import styles from "./PLP.module.scss";
import { RouteComponentProps } from "react-router-dom";
import { AppStore } from "../../redux/store/store";
import { getProductsByCategoryTC } from "../../redux/reducers/shopReducer";
import { connect } from "react-redux";
import { Product } from "../../grapgQL/ProductResponseType";

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
                  key={p.id}
                  link={`/products/${category}/${p.id}`}
                  inStock={p.inStock}
                  imgSrc={p.gallery[0]}
                  title={`${p.brand} ${p.name}`}
                  prices={p.prices}
                  currentCurrency={this.props.currentCurrency}
                />
              );
            })}
          </>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state: AppStore): MapStateToPropsType => {
  return {
    products: state.products.products,
    currentCurrency: state.products.currentCurrency,
  };
};
export default connect(mapStateToProps, {
  getProductsByCategoryTC,
})(PLP);

//Types;
type PLPPropsType = RouteComponentProps<PathParamsType> &
  MapStateToPropsType &
  MapDispatchType;

type PathParamsType = {
  category: string;
};

type MapDispatchType = {
  getProductsByCategoryTC: (category: string) => void;
};
type MapStateToPropsType = {
  products: Product[];
  currentCurrency: string;
};
