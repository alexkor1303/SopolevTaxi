"use client";
import style from "./MainSection.module.scss";
import Image from "next/image";
import { Button } from "..";
export const MainSection = () => {
  const buttonClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div className={style.wrapper}>
      <div className={style.infoBlock}>
        <h2 className={style.infoTitle}>
          Пассажирские Перевозки
          <br />
          по направлению :
          <br />
          <span className={style.mobileTitle}>
            Хандыга - <span className={style.prime}>Якутск</span> - Хандыга.
          </span>
        </h2>
        <section className={style.textBlock}>
          <p>
            <b>Предоставляем скидки :</b> <br />
            Пенсионерам, многодетным семьям, детям, студентам, инвалидам.
          </p>
          <p>
            <b>А так же :</b>
            <br />
            Заключаем договорова с юридическими лицами.
            <br />
            Принимаем наличный и безналичный расчет
          </p>
        </section>
        <Button
          className={style.mainButton}
          text="Подробнее"
          onClick={buttonClick}
        />
      </div>
      <div className={style.imageBlock}>
        <Image src="/mainCar.png" alt="car image" width={400} height={280} />
      </div>
    </div>
  );
};
