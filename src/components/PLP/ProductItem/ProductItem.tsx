import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";
import { Price } from "../../../grapgQL/ProductResponseType";
import { currencyConverter } from "../../../helpers/functions";
import styles from "./ProductItem.module.scss";

export default class ProductItem extends Component<ProductItemPropsType> {
  render() {
    const { title, prices, imgSrc, link, inStock, currentCurrency } =
      this.props;
    return (
      <NavLink to={link} className={styles.wrapper}>
        <div
          style={{ opacity: inStock ? "1" : "0.6" }}
          className={styles.content}
        >
          <img className={styles.img} src={imgSrc} alt={title} />
          <div className={styles.title}>{title}</div>
          <div className={styles.price}>
            {prices
              .filter((p) => p.currency === currentCurrency)
              .map((c) => {
                return (
                  <div key={v4()}>
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
        </div>
      </NavLink>
    );
  }
}

// Types
type ProductItemPropsType = {
  title: string;
  imgSrc: string;
  link: string;
  inStock?: boolean;
  prices: Price[];
  currentCurrency: string;
};
