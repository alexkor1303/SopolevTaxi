import { RxCross2 } from "react-icons/rx";
import { CiMenuKebab } from "react-icons/ci";
import { HeaderLinks } from "../Header/HeaderLinks";
import { Button } from "..";
import style from "./SliderMenu.module.scss";
import cn from "classnames";

interface SliderMenuProps {
  status: boolean;
  hideSlider: () => void;
}

export const SliderMenu = ({ status, hideSlider }: SliderMenuProps) => {
  return (
    <div
      className={cn(style.wrapper, {
        [style.visible]: status === true,
        [style.hidden]: status === false,
      })}>
      <div className={style.slider}>
        <div className={style.linkList}>
          {HeaderLinks.map((el) => {
            return (
              <Button key={el.id} className={style.linkButton}>
                <a onClick={hideSlider} href={el.link}>
                  {el.text}
                </a>
              </Button>
            );
          })}
        </div>
        <Button onClick={hideSlider} className={style.closeButton}>
          <RxCross2 size={20} />
        </Button>
      </div>
    </div>
  );
};
