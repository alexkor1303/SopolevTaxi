"use client";
import React from "react";
import style from "./Header.module.scss";
import cn from "classnames";
import { Button, SliderMenu } from "..";
import { HeaderLinks } from "./HeaderLinks";
import { HeaderLinkElem } from "./HeaderLinkElem/HeaderLinkElem";
import { BsLightningChargeFill } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";

export const Header = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={style.wrapper}>
      <section className={style.logoBlock}>
        <h1>
          SOPOL
          <BsLightningChargeFill fill={`var(--prime-green)`} />
          TAXI
        </h1>
      </section>
      <section className={style.linkBlock}>
        <section className={style.desktopLinks}>
          {HeaderLinks.map((elem) => {
            return (
              <HeaderLinkElem
                key={elem.key}
                text={elem.text}
                link={elem.link}
              />
            );
          })}
        </section>
        <section className={style.mobileLinks}>
          <Button
            className={cn(style.burgerButton, {
              [style.hiddenButton]: open === true,
            })}
            onClick={() => setOpen(true)}>
            <IoMdMenu size={20} />
          </Button>
          <SliderMenu status={open} />
        </section>
      </section>
    </div>
  );
};
