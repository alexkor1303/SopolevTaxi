import React from "react";
import style from "./AttentionTag.module.scss";

interface AttentionTagProps {
  title: string;
  children: React.ReactNode;
}

export const AttentionTag = ({ title, children }: AttentionTagProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.titleBlock}>{title}</div>
      <div>
        <h5 className={style.descriptionBlock}>{children}</h5>
      </div>
    </div>
  );
};
