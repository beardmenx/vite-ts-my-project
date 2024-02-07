import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { useState } from "react";
import { v1 } from "uuid";

export const Dialogs = () => {
  let [message, setMessage] = useState([
    { id: v1(), message: "HI HI HI" },
    { id: v1(), message: "How old are you ?" },
    { id: v1(), message: "Bomjour Yopta !!" },
    { id: v1(), message: "CA VA ?" },
  ]);

  let [dialog, setDialog] = useState([
    { id: v1(), name: "Vitalii" },
    { id: v1(), name: "Hanna" },
    { id: v1(), name: "Chloe" },
    { id: v1(), name: "Nematulla" },
    { id: v1(), name: "Murusein" },
  ]);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialog.map((d) => (
          <DialogItem name={d.name} id={d.id} />
        ))}
      </div>

      <div className={s.messages}>
        {message.map((m) => (
          <Message message={m.message} />
        ))}
      </div>
    </div>
  );
};
