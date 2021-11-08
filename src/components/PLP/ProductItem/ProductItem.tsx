import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./ProductItem.module.scss";

export default class ProductItem extends Component<ProductItemPropsType> {
  render() {
    const { title, price, imgSrc, link } = this.props;
    return (
      <NavLink to={link} className={styles.wrapper}>
        <div className={styles.content}>
          <img className={styles.img} src={imgSrc} alt={title} />
          <div className={styles.title}>{title}</div>
          <div className={styles.price}>$ {price}</div>
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
