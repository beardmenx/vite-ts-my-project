import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import { v1 } from "uuid";

export type DialogsProps = {};

export type DialogItemProps = {
  name: string;
  id: string;
};

const DialogItem = (props: DialogItemProps) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export type MessageProps = {
  message: string;
};

const Message = (props: MessageProps) => {
  return <div className={s.message}>{props.message}</div>;
};

export const Dialogs = () => {
  let dialogsData = [
    { id: v1(), name: "Vitalii" },
    { id: v1(), name: "Hanna" },
    { id: v1(), name: "Chloe" },
    { id: v1(), name: "Nematulla" },
    { id: v1(), name: "Murusein" },
  ];

  let messagesData = [
    { id: v1(), message: "HI HI HI" },
    { id: v1(), message: "How old are you ?" },
    { id: v1(), message: "Bomjour Yopta !!" },
    { id: v1(), message: "CA VA ?" },
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>

      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
      </div>
    </div>
  );
};
