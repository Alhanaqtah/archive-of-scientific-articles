import { HtmlHTMLAttributes, ReactNode } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

interface KeywordProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
}

export function Keyword(props: KeywordProps) {
  const { children, className, ...rest } = props;
  return (
    <span className={classNames(className, styles.keyword)} {...rest}>
      {children}
    </span>
  );
}
