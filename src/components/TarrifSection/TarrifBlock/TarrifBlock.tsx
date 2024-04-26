import React from "react";
import style from "./TarrifBlock.module.scss";
import cn from "classnames";
interface TarrifBlockProps {
  list: {
    id: number;
    road: {
      place: string[];
      price: string[];
    }[];
    sales: (string | null)[];
  };
}

export const TarrifBlock = ({ list }: TarrifBlockProps) => {
  return (
    <div
      key={list.id}
      className={cn(style.block, {
        [style.black]:
          list.id === 1 || list.id === 4 || list.id === 5 || list.id === 8,
        [style.white]:
          list.id === 2 || list.id === 3 || list.id === 6 || list.id === 7,
      })}>
      {list.road.map((roadElem, i) => {
        return (
          <div key={i} className={style.road}>
            <section className={style.roadHeading}>
              <h2 className={style.place}>{roadElem.place}</h2>
              <span className={style.price}>{roadElem.price}</span>
            </section>
            {list.sales && (
              <ul className={style.sales}>
                {list.sales?.map((saleElem, i) => {
                  return <li key={i}>{saleElem}</li>;
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};
