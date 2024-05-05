import { ReactNode } from "react";
import style from "./ModaWindow.module.scss";
import { RxCross2 } from "react-icons/rx";

import cn from "classnames";
import { Button } from "@/components";

interface ModalWindowProps {
  status: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const ModalWindow = ({
  status,
  children,
  onClose,
}: ModalWindowProps) => {
  return (
    <div
      className={cn(style.hidden, {
        [style.visible]: status === true,
      })}>
      <div className={style.wrapper}>
        <div className={style.innerBlock}>{children}</div>
        <Button className={style.button} onClick={() => onClose()}>
          <RxCross2 />
        </Button>
      </div>
    </div>
  );
};
