import { Poiret_One } from "@next/font/google";
import { DividerList } from "./DividerList";
import styles from "./Divider.module.scss";
import cn from "classnames";
const poiret_One = Poiret_One({ subsets: ["cyrillic"], weight: "400" });
export const Divider = () => {
  return (
    <div className={cn(poiret_One.className, styles.dividerBlock)}>
      <ul>
        {DividerList.map((el) => {
          return <li key={el.key}>{el.text}</li>;
        })}
      </ul>
    </div>
  );
};
