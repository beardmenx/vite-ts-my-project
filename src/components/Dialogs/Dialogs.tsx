import s from "./Dialogs.module.css";
import { v1 } from "uuid";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";

export type DialogsProps = {};

export const Dialogs = () => {
  let dialogs = [
    { id: v1(), name: "Vitalii" },
    { id: v1(), name: "Hanna" },
    { id: v1(), name: "Chloe" },
    { id: v1(), name: "Nematulla" },
    { id: v1(), name: "Murusein" },
  ];

  let messages = [
    { id: v1(), message: "HI HI HI" },
    { id: v1(), message: "How old are you ?" },
    { id: v1(), message: "Bomjour Yopta !!" },
    { id: v1(), message: "CA VA ?" },
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogs.map((d) => (
          <DialogItem name={d.name} id={d.id} />
        ))}
      </div>

      <div className={s.messages}>
        {messages.map((m) => (
          <Message message={m.message} />
        ))}
      </div>
    </div>
  );
};
