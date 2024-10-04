import { ButtonHTMLAttributes, ReactNode } from "react";

import classNames from "classnames";

import styles from "./style.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color?: "blue" | "yellow" | "red";
  colorStyle?: "outline" | "fill";
  className?: string;
}

export function Button(props: ButtonProps) {
  const {
    children,
    color = "blue",
    colorStyle = "fill",
    className,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      className={classNames(styles.primaryButton, className, {
        [styles.blue]: color === "blue",
        [styles.red]: color === "red",
        [styles.yellow]: color === "yellow",
        [styles.outline]: colorStyle === "outline",
        [styles.fill]: colorStyle === "fill",
      })}
    >
      {children}
    </button>
  );
}
