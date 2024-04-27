import style from "./Footer.module.scss";
import { GiHorizonRoad } from "react-icons/gi";

export const Footer = () => {
  return (
    <div className={style.wrapper}>
      <section></section>
      <section></section>
      <section>
        <GiHorizonRoad />
        <p>sopol taxi copyright © 2024</p>
      </section>
      <GiHorizonRoad />
    </div>
  );
};
