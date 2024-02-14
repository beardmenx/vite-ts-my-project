import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { KeyboardEvent, useState } from "react";
import { v1 } from "uuid";

export const Dialogs = () => {
  const [messageData, setMessageData] = useState([
    { id: v1(), message: "HI HI HI" },
    { id: v1(), message: "How old are you ?" },
    { id: v1(), message: "Bomjour Yopta !!" },
    { id: v1(), message: "CA VA ?" },
  ]);

  const [dialog, setDialog] = useState([
    { id: v1(), name: "Vitalii" },
    { id: v1(), name: "Hanna" },
    { id: v1(), name: "Chloe" },
    { id: v1(), name: "Nematulla" },
    { id: v1(), name: "Murusein" },
  ]);

  const [newMessageText, setNewMessageText] = useState("");

  function addMessage(message: string) {
    let newMessage = { id: v1(), message: message };
    let newMessages = [newMessage, ...messageData];
    setMessageData(newMessages);
  }

  const onKeyUpHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.key === "Enter") {
      addMessage(newMessageText);
      setNewMessageText("");
    }
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialog.map((d) => (
          <DialogItem name={d.name} id={d.id} />
        ))}
      </div>

      <div className={s.messages}>
        {messageData.map((m) => (
          <Message message={m.message} />
        ))}
      </div>
      <div>
        <textarea
          value={newMessageText}
          placeholder="Enter your message"
          onChange={(e) => {
            setNewMessageText(e.currentTarget.value);
          }}
          onKeyUp={onKeyUpHandler}
        ></textarea>
        <button
          className="p-2"
          onClick={() => {
            addMessage(newMessageText);
            setNewMessageText("");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};
