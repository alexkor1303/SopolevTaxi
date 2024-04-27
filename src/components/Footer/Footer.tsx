import style from "./Footer.module.scss";
import { BsLightningChargeFill } from "react-icons/bs";
export const Footer = () => {
  return (
    <div className={style.wrapper}>
      <p>
        SOPOL
        <BsLightningChargeFill fill={`var(--prime-green)`} />
        TAXI copyright © 2024
      </p>
    </div>
  );
};
