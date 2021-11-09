import React, { Component } from "react";
import styles from "./CartItem.module.scss";

export class CartItem extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.productInfo}></div>
        <div className={styles.productCount}>
          <div className={styles.count}></div>
          <img className={styles.img} src="" alt="" />
        </div>
      </div>
    );
  }
}
