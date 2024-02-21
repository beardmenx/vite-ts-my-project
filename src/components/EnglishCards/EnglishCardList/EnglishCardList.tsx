import { Card } from "../Card/Card";
import s from "../EnglishCards.module.css";

export type EnglishCardListPropsType = {
  id: string;
  text: string;
  translate: string;
};

export const EnglishCardList = ({
  englishCards,
}: {
  englishCards: Array<EnglishCardListPropsType>;
}) => {
  return (
    <div className={s.englishCardList}>
      {englishCards.map((englishCard) => {
        return <Card englishCard={englishCard} key={englishCard.id} />;
      })}
    </div>
  );
};
