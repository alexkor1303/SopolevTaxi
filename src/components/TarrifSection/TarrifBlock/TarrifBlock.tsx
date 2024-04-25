import React from "react";
import style from "./TarrifBlock.module.scss";
import cn from "classnames";
interface TarrifBlockProps {
  list: {
    id: number;
    road: [
      {
        place: [string];
        price: [string];
      }
    ];
    oldPeople?: string;
    students?: string;
    bigFamily?: string;
    invalid?: string;
    bigChildren?: string;
    littleChildren?: string;
  };
}
export const TarrifBlock = ({ list }: TarrifBlockProps) => {
  return (
    <div
      key={list.id}
      className={cn(style.block, {
        [style.black]: list.id === 1 || list.id === 3,
        [style.white]: list.id === 2 || list.id === 4,
      })}>
      {list.road.map((elem, i) => {
        return (
          <div className={style.road} key={i}>
            <h2 className={style.place}>{elem.place}</h2>
            <p>{elem.price}</p>
          </div>
        );
      })}
    </div>
  );
};
{
  /* <h2 className={style.place}>{list.name}</h2>
<p className={style.price}>{list.price}</p>
<ul className={style.sales}>
  {list.students && <li>Студенты : {list.students}</li>}
  {list.oldPeople && <li>Пенсионеры : {list.oldPeople}</li>}
  {list.bigFamily && <li>Многодетные семьи : {list.bigFamily}</li>}
  {list.invalid && <li>Инвалиды всех групп : {list.invalid}</li>}
  {list.bigChildren && <li>Дети до 11 лет : {list.bigChildren}</li>}
  {list.littleChildren && <li>Дети до 10 лет : {list.littleChildren}</li>}
</ul> */
}
