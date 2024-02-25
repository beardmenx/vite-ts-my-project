import React, { ReactNode } from "react";
import s from "./Button.module.css";

type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className={s.button} onClick={onClick}>
      {children}
    </button>
  );
};
