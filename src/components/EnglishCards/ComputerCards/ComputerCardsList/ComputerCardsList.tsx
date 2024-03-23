import s from './ComputerCardsList.module.css';
import { Card } from './Card/Card';

export type EnglishCardListPropsType = {
  id: string;
  text: string;
  translate: string;
};

export const ComputerCardsList = ({
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
