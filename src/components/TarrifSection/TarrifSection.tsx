import style from "./TarrifSection.module.scss";
import cn from "classnames";
import { AttentionTag } from "..";
import { TarrifList } from "./TarrifsList";
import { TarrifBlock } from "./TarrifBlock/TarrifBlock";
export const TarrifSection = () => {
  return (
    <div id="Tarrifs">
      <AttentionTag title="Внимание!">
        Уважаемые жители и гости Томпонского района! Пожалуйста, ознакомьтесь с
        нашими обновленными ценами на перевозки.
      </AttentionTag>
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
    </div>
  );
};
