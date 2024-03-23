import { useState } from 'react';
import s from './EnglishCards.module.css';
import { Modal } from '../Modal/Modal';
import { Button } from '../../UI/buttons/Button/Button';
import { EnglishCategoryCard } from './EnglishCategoryCard/EnglishCategoryCard';
import { v1 } from 'uuid';

export type EnglishCardProps = {};

export const EnglishCards = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div>
        <EnglishCategoryCard id={v1()} title={'Computer '} />
      </div>

      <Button
        appearence='big'
        className={s.btn}
        onClick={() => setActive(true)}
      >
        + create your category
      </Button>

      <Modal active={active} setActive={setActive}>
        <form className={s.form}>
          <input className={s.input} type='text' placeholder=' Add title' />
          <input className={s.inputFile} type='file' />
          <button className='pl-4 pr-4 text-lg'>Submit</button>
        </form>
      </Modal>
    </div>
  );
};
