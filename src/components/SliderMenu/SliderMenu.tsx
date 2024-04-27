import { link } from "fs";
import { HeaderLinks } from "../Header/HeaderLinks";
import style from "./SliderMenu.module.scss";
import cn from "classnames";
interface SliderMenuProps {
  status: boolean;
}
export const SliderMenu = ({ status }: SliderMenuProps) => {
  return (
    <div
      className={cn(style.wrapper, {
        [style.visible]: status === true,
        [style.hidden]: status === false,
      })}>
      {HeaderLinks.map((el) => {
        return (
          <a key={el.key} href={el.link}>
            {el.text}
          </a>
        );
      })}
    </div>
  );
};
