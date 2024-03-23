import { ChangeEvent, useState } from 'react';
import s from '../../Todolist.module.css';

export type EdiatableSpanPropsType = {
  title: string;
  onChange: (newValue: string) => void;
};

export function EdiatableSpan(props: EdiatableSpanPropsType) {
  const [editMode, setEditMode] = useState(false);
  let [title, setTitle] = useState('');

  const activatedEditMode = () => {
    setEditMode(true);
    setTitle(props.title);
  };
  const activatedViewMode = () => {
    setEditMode(false);
    props.onChange(title);
  };
  const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.currentTarget.value);
  return editMode ? (
    <input
      value={title}
      onChange={onChangeTitleHandler}
      onBlur={activatedViewMode}
      autoFocus
    />
  ) : (
    <span className={s['span']} onDoubleClick={activatedEditMode}>
      {props.title}
    </span>
  );
}
