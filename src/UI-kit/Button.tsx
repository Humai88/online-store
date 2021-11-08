import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button.module.scss";

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<DefaultButtonPropsType> = ({
  className,
  ...restProps
}) => {
  const finalClassName = `${styles.btn} ${className}`;
  return <button className={finalClassName} {...restProps} />;
};
