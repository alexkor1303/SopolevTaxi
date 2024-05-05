import React from "react";
import style from "./Button.module.scss";
import cn from "classnames";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button className={cn(style.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};
