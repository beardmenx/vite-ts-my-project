import { CategoryCard } from "./CategoryCard/CategoryCard";
import Comp from "../../../assets/EnglishCardsImg/comp.jpg";

export type CategoriesEnglishCardsPropsType = {};

export const CategoriesEnglishCards = ({}: {}) => {
  return (
    <>
      <h1 className="text-center text-5xl uppercase">Flashcards Category</h1>
      <div className="grid grid-cols-3 gap-2 ">
        <CategoryCard title="Computer" img={Comp} />
        <CategoryCard title="Animal" img={Comp} />
        <CategoryCard title="Computer science" img={Comp} />
        <CategoryCard title="Computer" img={Comp} />
      </div>
    </>
  );
};
