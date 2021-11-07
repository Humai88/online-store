import React, { Component } from "react";
import styles from "./ProductItem.module.scss";

export default class ProductItem extends Component<ProductItemPropsType> {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <img
            className={styles.img}
            src={this.props.imgSrc}
            alt={this.props.title}
          />
          <div className={styles.title}>{this.props.title}</div>
          <div className={styles.price}>$ {this.props.price}</div>
        </div>
      </div>
    );
  }
}

// Types
type ProductItemPropsType = {
  title: string;
  price: number;
  imgSrc: string;
};
