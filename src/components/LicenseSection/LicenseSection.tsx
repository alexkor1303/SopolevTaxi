"use client";
import React from "react";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import style from "./License.module.scss";
import { AttentionTag, Button, ModalWindow } from "..";
export const LicenseSection = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={style.wrapper} id="License">
      <ModalWindow onClose={() => setOpen(!open)} status={open}>
        <Image
          className={style.image}
          src={"/license.png"}
          width={340}
          height={560}
          alt="license"
        />
      </ModalWindow>
      <section className={style.attention}>
        <AttentionTag title="Работаем официально!">
          <b>Безопасные и официальные перевозки:</b>
          <br />
          Узнайте больше о нашей лицензии и ИНН.
        </AttentionTag>
      </section>
      <section className={style.information}>
        <span>
          <b>ИНН : </b>142600067778
        </span>
        <span>
          <b>Лицензия на пассажирские перевозки : </b>
          <Button className={style.button} onClick={() => setOpen(true)}>
            <b>Открыть</b>
            <FaEye className={style.eyeIcon} size={15} />
          </Button>
        </span>
      </section>
    </div>
  );
};
