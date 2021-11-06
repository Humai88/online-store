import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import { BsCart2 } from "react-icons/bs";
import logo from "./../../assests/2021-11-06 21_23_46-Junior Frontend Test Designs (Public) – Figma.jpg";
import { Categories } from "./Categories";
import { Currencies } from "./Currencies";

export class Navbar extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <ul>
          <Categories />
        </ul>
        <img src={logo} className={styles.logo}></img>
        <div className={styles.cartSection}>
          <Currencies />
          <div>
            <BsCart2 style={{ fontSize: "1.4rem", marginLeft: "0.5rem" }} />
          </div>
        </div>
      </div>
    );
  }
}
