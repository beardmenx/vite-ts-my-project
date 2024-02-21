import { useState } from "react";
import s from "./EnglishCards.module.css";
import { Card } from "./Card/Card";
import { Modal } from "../Modal/Modal";
import { v1 } from "uuid";
import { EnglishCardList } from "./EnglishCardList/EnglishCardList";

export type EnglishCardProps = {};

export const EnglishCards = () => {
  const [active, setActive] = useState(false);
  const EnglishCardData = [
    {
      id: v1(),
      text: "CPU - central processing unit",
      translate: "главный процессор",
    },
    {
      id: v1(),
      text: "www (worldwide web)",
      translate: "всемирная сеть",
    },
    { id: v1(), text: "GPU", translate: "графический процессор" },
    {
      id: v1(),
      text: "desktop computer",
      translate: "настольный компьютер, стационарный компьютер",
    },
    { id: v1(), text: "computer", translate: "компьютер" },
    { id: v1(), text: "hardware ", translate: "аппаратное обеспечение" },
    { id: v1(), text: "Hz - hertz", translate: "Гц - Герц" },
    { id: v1(), text: "keyboard", translate: "клавиатура" },
    { id: v1(), text: "keyboard", translate: "клавиатура" },
    { id: v1(), text: "keyboard", translate: "клавиатура" },
    { id: v1(), text: "keyboard", translate: "клавиатура" },
    { id: v1(), text: "keyboard", translate: "клавиатура" },
  ];

  const [englishCards, setEnglishCards] = useState(EnglishCardData);

  return (
    <div>
      <h2 className="text-center text-4xl uppercase">Ready Cards</h2>
      <EnglishCardList englishCards={englishCards} />

      <div className={s.section}>
        <button className={s.btn} onClick={() => setActive(true)}>
          + create your own card
        </button>
      </div>

      <Modal active={active} setActive={setActive}>
        <form className={s.form}>
          <input className={s.input} type="text" placeholder=" Add text" />
          <input className={s.input} type="text" placeholder="Add translate" />
          <input className={s.inputFile} type="file" />
          <button className="pl-4 pr-4 text-lg">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

{
}
