import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  children?: React.ReactElement | string;
  onClick?: (() => void) | ((e: any) => void);
  type?: "add" | "remove" | "update";
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      {children}
    </button>
  );
};
