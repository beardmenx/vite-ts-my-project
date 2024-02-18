import { ReactNode } from "react";
import "./Modal.css";

export type ModalPropsType = {
  active: boolean;
  setActive: (param: boolean) => void;
  children: ReactNode;
};

export const Modal = (props: ModalPropsType) => {
  return (
    <div
      className={props.active ? "modal active" : "modal"}
      onClick={() => props.setActive(false)}
    >
      <div
        className={props.active ? "modalContent active" : "modalContent"}
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
};
