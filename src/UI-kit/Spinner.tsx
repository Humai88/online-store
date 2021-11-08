import { Fragment } from "react";
import loader from "./../assests/Ajax-Loading.svg";
import styles from "./Spinner.module.scss";

export const Spinner = () => {
  return (
    <Fragment>
      <div className={styles.backdrop}>
        <img className={styles.img} src={loader} alt="loading" />
      </div>
    </Fragment>
  );
};
