import s from "../Dialogs.module.css";

export type MessageProps = {
  message: string;
};

export const Message = (props: MessageProps) => {
  return (
    <>
      <div className={s.message}>{props.message}</div>
    </>
  );
};
