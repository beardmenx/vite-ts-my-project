import { useState } from "react";
import s from "./Card.module.css";
import CPU from "../../../assets/EnglishCardsImg/CPU.jpeg";
import { Tooltip } from "react-tooltip";

export type CardPropsType = {
  id: string;
  text: string;
  translate: string;
};

export const Card = ({ englishCard }: { englishCard: CardPropsType }) => {
  const [flip, setFlip] = useState(false);
  return (
    <div
      className={`${s.card} ${flip ? `${s.flip}` : ""}`}
      onClick={() => setFlip(!flip)}
      data-tooltip-id="my-tooltip"
      data-tooltip-content="Click me!"
      data-tooltip-place="top"
    >
      <div className={`${s.front}`}>
        <div className={s.frontInner}>
          <img className={s.frontImg} src={CPU} alt="CPU" />
          {englishCard.text}
        </div>
        <Tooltip id="my-tooltip" />
      </div>
      <div className={s.back}>{englishCard.translate}</div>
    </div>
  );
};
