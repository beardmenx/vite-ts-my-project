
import s from "../English.module.css";
import { EnglishCardInterface } from "../../../models/EnglishCars";
import { FC } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export type EnglishItemProps = {
   card: EnglishCardInterface
};

const getEnglishCardByTitle = async (title: string) => {
  try {
    const response = await axios.get('https://65d63771f6967ba8e3bdba15.mockapi.io/englishCard', {
      params: {
        title: title
      }
     
    });
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error fetching English card by title:', error);
    throw error;
  }
};


export const EnglishItem:FC<EnglishItemProps> = ({card}) => {
   
  return (
    <Link to={`/english/${card.title}`} className={s.readyCard} onClick={()=>getEnglishCardByTitle(card.title)}>
      <img src={card.img} alt={card.title} width={150} />
      <h3 className={s.readyCardTitle}> {card.title}</h3>
    </Link>
   
  )
};
