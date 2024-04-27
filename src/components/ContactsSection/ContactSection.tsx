import style from "./ContactSection.module.scss";
import cn from "classnames";
import { ContactLinks } from "./ContactLinks";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import { GoMail } from "react-icons/go";
import { BsTelephonePlus } from "react-icons/bs";
import { Button } from "..";
import Image from "next/image";
export const ContactSection = () => {
  return (
    <div className={style.wrapper} id="Contacts">
      <section className={style.linkList}>
        <h3>
          Свяжитесь с нами в любой удобной
          <br />
          для вас социальной сети :
        </h3>
        {ContactLinks.map((linkElem) => {
          while (linkElem.id < 6) {
            return (
              <a key={linkElem.id} href={linkElem.link} target="_blank">
                <Button
                  className={cn(style.buttonLink, {
                    [style.telegram]: linkElem.icon === "telegram",
                    [style.whatsapp]: linkElem.icon === "whatsapp",
                    [style.instagram]: linkElem.icon === "instagram",
                    [style.instagram]: linkElem.icon === "instagram",
                    [style.mail]: linkElem.icon === "mail",
                  })}>
                  {linkElem.icon === "telegram" ? (
                    <PiTelegramLogoLight fill="white" size={25} />
                  ) : linkElem.icon === "whatsapp" ? (
                    <FaWhatsapp fill="white" size={25} />
                  ) : linkElem.icon === "instagram" ? (
                    <FaInstagram fill="white" size={25} />
                  ) : linkElem.icon === "mail" ? (
                    <GoMail fill="white" size={25} />
                  ) : null}
                </Button>
              </a>
            );
          }
        })}
        <h3>Или просто позвоните нам :</h3>
        {ContactLinks.map((linkElem) => {
          return linkElem.id > 5 ? (
            <a key={linkElem.id} href={linkElem.link}>
              <Button
                className={cn(style.buttonLink, {
                  [style.mts]: linkElem.operator === "МТС",
                  [style.megaphone]: linkElem.operator === "Мегафон",
                })}>
                <BsTelephonePlus fill="white" size={25} />
                {linkElem.operator}
              </Button>
            </a>
          ) : null;
        })}
      </section>
      <section className={style.qrCode}>
        <Image
          src="/qr-code.svg"
          width={200}
          height={200}
          alt="telegram qrcode"
        />
        наведите камеру
      </section>
    </div>
  );
};
