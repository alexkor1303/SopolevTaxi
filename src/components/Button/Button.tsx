"use client";
import style from "./Button.module.scss";
import cn from "classnames";
interface ButtonProps {
  onClick: () => void;
  text: string;
  className: string;
}
export const Button = ({ onClick, text, className }: ButtonProps) => {
  return (
    <button className={cn(className, style.button)} onClick={onClick}>
      {text}
    </button>
  );
};
