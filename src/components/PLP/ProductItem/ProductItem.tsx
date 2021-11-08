import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./ProductItem.module.scss";

export default class ProductItem extends Component<ProductItemPropsType> {
  render() {
    return (
      <NavLink to={this.props.link} className={styles.wrapper}>
        <div className={styles.content}>
          <img
            className={styles.img}
            src={this.props.imgSrc}
            alt={this.props.title}
          />
          <div className={styles.title}>{this.props.title}</div>
          <div className={styles.price}>$ {this.props.price}</div>
        </div>
      </NavLink>
    );
  }
}

// Types
type ProductItemPropsType = {
  title: string;
  price: number;
  imgSrc: string;
  link: string;
};
