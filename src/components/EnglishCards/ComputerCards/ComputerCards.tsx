import { useState } from 'react';
import { v1 } from 'uuid';
import s from './ComputerCards.module.css';
import { Button } from '../../../UI/buttons/Button/Button';
import { Modal } from '../../Modal/Modal';
import { ComputerCardsList } from './ComputerCardsList/ComputerCardsList';

export type ComputerCardsPropsType = {};

export const ComputerCards = ({}: ComputerCardsPropsType) => {
  const EnglishCardData = [
    {
      id: v1(),
      text: 'CPU - central processing unit',
      translate: 'главный процессор',
    },
    {
      id: v1(),
      text: 'www (worldwide web)',
      translate: 'всемирная сеть',
    },
    { id: v1(), text: 'GPU', translate: 'графический процессор' },
    {
      id: v1(),
      text: 'desktop computer',
      translate: 'настольный компьютер, стационарный компьютер',
    },
    { id: v1(), text: 'computer', translate: 'компьютер' },
    { id: v1(), text: 'hardware ', translate: 'аппаратное обеспечение' },
    { id: v1(), text: 'Hz - hertz', translate: 'Гц - Герц' },
    { id: v1(), text: 'keyboard', translate: 'клавиатура' },
    { id: v1(), text: 'keyboard', translate: 'клавиатура' },
    { id: v1(), text: 'keyboard', translate: 'клавиатура' },
    { id: v1(), text: 'keyboard', translate: 'клавиатура' },
    { id: v1(), text: 'keyboard', translate: 'клавиатура' },
  ];

  const [englishCards, setEnglishCards] = useState(EnglishCardData);
  const [active, setActive] = useState(false);
  return (
    <>
      <div>
        <ComputerCardsList englishCards={englishCards} />
      </div>

      <div className='flex justify-center'>
        <Button
          appearence='big'
          className={s.btn}
          onClick={() => setActive(true)}
        >
          + create your card
        </Button>
      </div>

      <Modal active={active} setActive={setActive}>
        <form className={s.form}>
          <input className={s.input} type='text' placeholder=' Add title' />
          <input className={s.inputFile} type='file' />
          <button className='pl-4 pr-4 text-lg'>Submit</button>
        </form>
      </Modal>
    </>
  );
};
