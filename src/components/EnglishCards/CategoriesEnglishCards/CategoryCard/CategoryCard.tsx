import { ButtonsNavBar } from "../../../../UI/buttons/buttonsNavBar/ButtonsNavBar";
import s from "./CategoryCard.module.css";

export type CategoryCardPropsType = {
  title: string;
  img: string;
};

export const CategoryCard = ({ title, img }: CategoryCardPropsType) => {
  return (
    <>
      <div className={s.categoryCard}>
        <img src={img} alt="" width={120} />
        <h2 className="text-2xl ml-4">{title}</h2>
      </div>
    </>
  );
};
