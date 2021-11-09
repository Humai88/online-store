import React, { Component, DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./SquareBtn.module.scss";

export class SquareBtn extends Component<DefaultDivPropsType> {
  render() {
    const { children, className } = this.props;
    const finalClasses = `${styles.squareBtn} ${className ? className : ""}`;
    return <div className={finalClasses}>{children}</div>;
  }
}

// Types
type DefaultDivPropsType = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLInputElement
>;
