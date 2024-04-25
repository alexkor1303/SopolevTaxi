import style from "./TarrifSection.module.scss";
import cn from "classnames";
import Image from "next/image";
import { TarrifList } from "./TarrifsList";
import { TarrifBlock } from "./TarrifBlock/TarrifBlock";
export const TarrifSection = () => {
  return (
    <div className={style.wrapper}>
      {TarrifList.map((elem) => {
        const blockClassName = elem.id;
        console.log(blockClassName);
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
      <section className={style.image}></section>
    </div>
  );
};
