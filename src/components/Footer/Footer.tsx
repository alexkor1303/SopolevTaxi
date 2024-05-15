import style from "./Footer.module.scss";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

export const Footer = () => {
  const now = new Date().getFullYear();

  return (
    <div className={style.wrapper}>
      <section className={style.phones}>
        Телефон для быстрой связи :
        <ul>
          <li>
            <FaPhoneAlt />
            8-914-103-30-36
          </li>
          <li>
            <FaPhoneAlt /> 8-924-761-38-13
          </li>
        </ul>
      </section>
      <section>
        <p>
          SOPOLEV
          <BsLightningChargeFill fill={`var(--prime-green)`} />
          TAXI copyright © {now}
        </p>
      </section>
    </div>
  );
};
