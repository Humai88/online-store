import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  Component,
} from "react";
import styles from "./Button.module.scss";

export class Button extends Component<DefaultButtonPropsType> {
  render() {
    const { className, ...props } = this.props;
    const finalClassName = `${styles.btn} ${className}`;
    return <button className={finalClassName} {...props} />;
  }
}

// Types
type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
