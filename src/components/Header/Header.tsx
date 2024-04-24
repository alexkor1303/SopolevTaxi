import React from "react";
import Image from "next/image";
import style from "./Header.module.scss";
import { HeaderLinks } from "./HeaderLinks";
import { HeaderLinkElem } from "./HeaderLinkElem/HeaderLinkElem";
import cn from "classnames";

export const Header = () => {
  return (
    <div className={style.wrapper}>
      <section className={style.logoBlock}>
        <Image src="./logo.svg" alt="logotype" width={90} height={90} />
        <h1>SOPOL/TAXI</h1>
      </section>
      <section className={style.linkBlock}>
        {HeaderLinks.map((elem) => {
          return (
            <HeaderLinkElem key={elem.key} text={elem.text} link={elem.link} />
          );
        })}
      </section>
    </div>
  );
};
