import React, { Component, MouseEvent } from "react";
import styles from "./PDP.module.scss";
import { Button } from "../../UI-kit/Button";
import { RouteComponentProps } from "react-router-dom";
import { SquareBtn } from "../../UI-kit/SquareBtn";
import { AppStore } from "../../redux/store/store";
import {
  getProductByIdTC,
  getProductsByCategoryTC,
} from "../../redux/reducers/shopReducer";
import { connect } from "react-redux";
import {
  addProductToCartAC,
  setSelectedAttributesAC,
} from "../../redux/actions/shopActions";
import { Attribute, Product } from "../../grapgQL/ProductResponseType";
import { currencyConverter } from "../../helpers/functions";

class PDP extends Component<PDPPropsType, StateType> {
  constructor(props: PDPPropsType) {
    super(props);
    this.state = { active: "" };
    this.addToCartHandler = this.addToCartHandler.bind(this);
    this.setAttrHandler = this.setAttrHandler.bind(this);
  }

  setAttrHandler({ displayValue }: Attribute, e: MouseEvent<HTMLDivElement>) {
    const id = this.props.match.params.id;
    this.setState({ active: e.currentTarget.id });
    // console.log(e.currentTarget.id);
    this.props.setSelectedAttributesAC(id, displayValue);
  }
  addToCartHandler() {
    const id = this.props.match.params.id;
    this.props.addProductToCartAC(id);
  }
  componentDidMount() {
    const category = this.props.match.params.category;
    const id = this.props.match.params.id;
    this.props.getProductsByCategoryTC(category);
    this.props.getProductByIdTC(id);
  }
  componentDidUpdate(prevProps: PDPPropsType) {
    const id = this.props.match.params.id;
    if (id !== prevProps.match.params.id) {
      this.props.getProductByIdTC(id);
    }
  }
  render() {
    return (
      <div>
        <div className={styles.wrapper}>
          <div className={styles.imgPreviewWrapper}>
            {this.props.product.gallery.slice(1).map((img) => {
              return <img key={img} className={styles.imgPreview} src={img} />;
            })}
          </div>
          <div className={styles.mainImgWrapper}>
            <img
              className={styles.mainImg}
              src={this.props.product.gallery[0]}
              alt={this.props.product.name}
            />
          </div>
          <div className={styles.descrWrapper}>
            <h2 className={styles.brand}>{this.props.product.brand}</h2>
            <h3 className={styles.name}>{this.props.product.name}</h3>

            {this.props.product.attributes.map((attr) => {
              return (
                <div key={attr.name}>
                  <div className={styles.attrName}>{attr.name}</div>
                  <div className={styles.attrValuesWrapper}>
                    {attr.items.map((item) => {
                      const id = `${item.displayValue}${attr.name
                        .split(" ")
                        .join("")}`;
                      const activeClass = `${styles.attrValue} ${
                        this.state.active ==
                        `${item.displayValue}${attr.name.split(" ").join("")}`
                          ? styles.active
                          : ""
                      }`;
                      return attr.type === "text" ? (
                        <SquareBtn
                          id={id}
                          onClick={this.setAttrHandler.bind(this, item)}
                          style={{
                            cursor: !this.props.product.inStock
                              ? "auto"
                              : "pointer",
                          }}
                          key={item.displayValue}
                          className={activeClass}
                        >
                          {item.displayValue}
                        </SquareBtn>
                      ) : (
                        <SquareBtn
                          id={id}
                          onClick={this.setAttrHandler.bind(this, item)}
                          key={item.displayValue}
                          style={{
                            background: item.displayValue,
                            border: "none",
                            cursor: !this.props.product.inStock
                              ? "auto"
                              : "pointer",
                          }}
                          className={activeClass}
                        ></SquareBtn>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <h2 className={styles.attrName}>Price:</h2>
            <div className={styles.price}>
              {this.props.product.prices
                .filter((p) => p.currency === this.props.currentCurrency)
                .map((c) => {
                  return (
                    <div key={c.currency}>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: currencyConverter(c.currency),
                        }}
                      ></span>
                      {c.amount}
                    </div>
                  );
                })}
            </div>

            <Button
              disabled={!this.props.product.inStock}
              className={styles.btn}
              onClick={this.addToCartHandler}
            >
              add to cart
            </Button>

            {this.props && (
              <div
                className={styles.productDescr}
                dangerouslySetInnerHTML={{
                  __html:
                    this.props.product.description.length > 300
                      ? `${this.props.product.description.substring(0, 300)}...`
                      : this.props.product.description,
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: AppStore): MapStateToPropsType => {
  return {
    product: state.products.product,
    currentCurrency: state.products.currentCurrency,
  };
};
export default connect(mapStateToProps, {
  getProductByIdTC,
  addProductToCartAC,
  getProductsByCategoryTC,
  setSelectedAttributesAC,
})(PDP);
//Types
type PDPPropsType = RouteComponentProps<PathParamsType> &
  MapStateToPropsType &
  MapDispatchType;
type PathParamsType = {
  id: string;
  category: string;
};
type StateType = {
  active: string;
};
type MapDispatchType = {
  addProductToCartAC: (productId: string) => void;
  getProductByIdTC: (id: string) => void;
  getProductsByCategoryTC: (category: string) => void;
  setSelectedAttributesAC: (productId: string, displayValue: string) => void;
};
type MapStateToPropsType = {
  product: Product;
  currentCurrency: string;
};
function setValue(state: string) {
  throw new Error("Function not implemented.");
}
