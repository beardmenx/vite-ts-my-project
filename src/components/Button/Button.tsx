import s from "./Button.module.css";

export type ButtonProps = {
  img: string;
};

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button className={s.button}>
        <img src={props.img} alt="" />
      </button>
    </div>
  );
};
