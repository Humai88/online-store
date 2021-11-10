import React, { Component } from "react";
import { v4 } from "uuid";
import { CartItem } from "./CartItem";
import styles from "./Cart.module.scss";
import { fakeData } from "./fakeData";
export class Cart extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Cart</h2>
        {fakeData.map((p) => {
          return (
            <CartItem
              key={v4()}
              brand={p.brand}
              name={p.name}
              prices={p.prices}
              attributes={p.attributes}
              gallery={p.gallery}
            />
          );
        })}
      </div>
    );
  }
}
