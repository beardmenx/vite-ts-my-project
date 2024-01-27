import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

export type DialogsProps = {};

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

export const Dialogs: DialogsProps = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Vitalii" id={1} />
        <DialogItem name="Hanna" id={2} />
        <DialogItem name="Chloe" id={3} />
        <DialogItem name="Nematulla" id={4} />
        <DialogItem name="Mirusein" id={5} />
      </div>

      <div className={s.messages}>
        <Message message="HI HI HI" />
        <Message message="Bomjour Yopta !!" />
        <Message message="How old are you ?" />
        <Message message="CA VA ?" />
      </div>
    </div>
  );
};
