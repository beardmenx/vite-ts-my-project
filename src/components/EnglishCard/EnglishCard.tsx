import { useState } from "react";
import { Modal } from "../Modal/Modal";
import s from "./EnglishCard.module.css";

export type EnglishCardProps = {};

export const EnglishCard = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex justify-between">
      <div>Воспользоваться готовыми карточками</div>
      <div>
        <div className={s.section}>
          <h2 className="text-center">Создать свою карточку</h2>
          <button className={s.btn} onClick={() => setActive(true)}>
            open modal window
          </button>
        </div>
      </div>

      <Modal active={active} setActive={setActive}>
        <form className={s.form}>
          <input type="text" /> Add text
          <input type="text" /> add Photo
          <button>Submit</button>
        </form>
      </Modal>
    </div>
  );
};
