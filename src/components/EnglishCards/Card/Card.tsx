import { useState } from "react";
import s from "./Card.module.css";
import CPU from "../../../assets/EnglishCardsImg/CPU.jpeg";

export type CardPropsType = {
  id: string;
  text: string;
  translate: string;
};

export const Card = ({ englishCard }: { englishCard: CardPropsType }) => {
  const [flip, setFlip] = useState(false);
  console.log(englishCard);
  return (
    <div
      className={`${s.card} ${flip ? `${s.flip}` : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <div className={s.front}>
        <div className={s.frontInner}>
          <img className={s.frontImg} src={CPU} alt="CPU" />
          {englishCard.text}
        </div>
      </div>
      <div className={s.back}>{englishCard.translate}</div>
    </div>
  );
};
