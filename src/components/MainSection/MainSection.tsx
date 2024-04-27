import style from "./MainSection.module.scss";
import Image from "next/image";
import { BiLabel } from "react-icons/bi";
export const MainSection = () => {
  return (
    <div className={style.wrapper} id="Main">
      <div className={style.infoBlock}>
        <h2 className={style.infoTitle}>
          Пассажирские Перевозки
          <br />
          <span className={style.mobileTitle}>
            Хандыга - <span className={style.prime}>Якутск</span> - Хандыга.
          </span>
        </h2>
        <section className={style.textBlock}>
          <p>
            <BiLabel className={style.icon} fill="black" />
            Скидки пенсионерам, многодетным семьям, детям, студентам, инвалидам
          </p>
          <p>
            <BiLabel className={style.icon} />
            Заключение договоров с юридическими лицами
            <br />
            <BiLabel className={style.icon} />
            Наличный и безналичный расчет
          </p>
        </section>
      </div>
      <div className={style.imageBlock}>
        <Image src="/mainCar.png" alt="car image" width={450} height={300} />
      </div>
    </div>
  );
};
