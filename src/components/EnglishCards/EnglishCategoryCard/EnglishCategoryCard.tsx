import { NavLink } from 'react-router-dom';
import Comp from '../../../assets/EnglishCardsImg/comp.jpg';
import s from './EnglishCategoryCard.module.css';
import cn from 'classnames';

export type EnglishCategoryCardPropsType = {
  id: string;
  title: string;
};

export const EnglishCategoryCard = ({
  id,
  title,
}: EnglishCategoryCardPropsType) => {
  return (
    <>
      <NavLink to={`/englishCategoryCard/${id}`}>
        <div className={cn(s.wrapper, 'flex align-center')}>
          <div>
            <img src={Comp} alt='' width={100} />
          </div>
          <h3 className='m-auto text-3xl'>{title}</h3>
        </div>
      </NavLink>
    </>
  );
};
