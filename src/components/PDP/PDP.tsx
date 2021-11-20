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
import { Product } from "../../grapgQL/ProductResponseType";
import { currencyConverter } from "../../helpers/functions";
import { RequestStatusType } from "../../redux/reducers/appReducer";
import { Spinner } from "../../UI-kit/Spinner";
import CartOverlay from "../CartOverlay/CartOverlay";

class PDP extends Component<PDPPropsType, StateType> {
  constructor(props: PDPPropsType) {
    super(props);

    this.state = {
      active: [],
      showCart: false,
    };
    this.addToCartHandler = this.addToCartHandler.bind(this);
    this.setAttrHandler = this.setAttrHandler.bind(this);
    this.toggleShowCart = this.toggleShowCart.bind(this);
  }

  setAttrHandler(displayValue: string, attrId: string, name: string) {
    const { id } = this.props.match.params;
    const item = this.state.active.find((a) =>
      a.includes(name.split(" ").join(""))
    );

    const arr = this.state.active.filter((el) => el !== item);
    this.setState(
      {
        active: [...arr, attrId],
      },
      () => {
        this.props.setSelectedAttributesAC(id, displayValue, attrId);
      }
    );
  }

  addToCartHandler() {
    const { id } = this.props.match.params;
    this.props.addProductToCartAC(id);
    this.toggleShowCart();
  }

  toggleShowCart() {
    this.setState((prevState) => ({
      showCart: !prevState.showCart,
    }));
  }
  componentDidMount() {
    const { category, id } = this.props.match.params;
    this.props.getProductsByCategoryTC(category);
    this.props.getProductByIdTC(id);
  }

  componentDidUpdate(prevProps: PDPPropsType) {
    const { id } = this.props.match.params;
    if (id !== prevProps.match.params.id) {
      this.props.getProductByIdTC(id);
    }
  }
  render() {
    const { active, showCart } = this.state;
    const { product, currentCurrency, status } = this.props;
    return (
      <div>
        {showCart && <CartOverlay toggleShowCart={this.toggleShowCart} />}
        {status === "loading" && <Spinner />}
        <div className={styles.wrapper}>
          <div className={styles.imgPreviewWrapper}>
            {product.gallery.slice(1).map((img) => {
              return <img key={img} className={styles.imgPreview} src={img} />;
            })}
          </div>
          <div className={styles.mainImgWrapper}>
            <img
              className={styles.mainImg}
              src={product.gallery[0]}
              alt={product.name}
            />
          </div>
          <div className={styles.descrWrapper}>
            <h2 className={styles.brand}>{product.brand}</h2>
            <h3 className={styles.name}>{product.name}</h3>

            {this.props.product.attributes.map((attr) => {
              return (
                <div key={attr.name}>
                  <div className={styles.attrName}>{attr.name}</div>
                  <div className={styles.attrValuesWrapper}>
                    {attr.items.map((item) => {
                      const id = `${item.value}${attr.name
                        .split(" ")
                        .join("")}`;

                      return attr.type === "text" ? (
                        <SquareBtn
                          id={id}
                          onClick={() => {
                            this.setAttrHandler(item.value, id, attr.name);
                          }}
                          key={item.displayValue}
                          className={`${styles.attrValue} ${
                            active.includes(id) ? styles.active : ""
                          }`}
                        >
                          {item.value}
                        </SquareBtn>
                      ) : (
                        <SquareBtn
                          id={id}
                          onClick={() => {
                            this.setAttrHandler(item.value, id, attr.name);
                          }}
                          key={item.displayValue}
                          style={{
                            background: item.value,
                            border: "none",
                          }}
                          className={`${styles.attrValue} ${
                            active.includes(id) ? styles.activeSwatch : ""
                          }`}
                        ></SquareBtn>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <h2 className={styles.attrName}>Price:</h2>
            <div className={styles.price}>
              {product.prices
                .filter((p) => p.currency === currentCurrency)
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
              disabled={!product.inStock}
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
                    product.description.length > 400
                      ? `${product.description.substring(0, 400)}...`
                      : product.description,
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
    status: state.app.status,
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
  active: string[];
  showCart: boolean;
};
type MapDispatchType = {
  addProductToCartAC: (productId: string) => void;
  getProductByIdTC: (id: string) => void;
  getProductsByCategoryTC: (category: string) => void;
  setSelectedAttributesAC: (
    productId: string,
    displayValue: string,
    id: string
  ) => void;
};
type MapStateToPropsType = {
  product: Product;
  currentCurrency: string;
  status: RequestStatusType;
};
