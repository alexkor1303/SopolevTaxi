import style from "./TarrifSection.module.scss";
import cn from "classnames";
import Image from "next/image";
import { TarrifList } from "./TarrifsList";
import { TarrifBlock } from "./TarrifBlock/TarrifBlock";
export const TarrifSection = () => {
  return (
    <div className={style.wrapper}>
      {TarrifList.map((elem) => {
        return (
          <div
            key={elem.id}
            className={cn(style.block, {
              [style[`block${elem.id}`]]: elem.id,
            })}>
            <TarrifBlock list={elem} />
          </div>
        );
      })}
    </div>
  );
};
