import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Button } from '../../../../UI/buttons/Button/Button';
import s from '../../Todolist.module.css';

export type AddItemFromPropsType = {
  addItem: (title: string) => void;
};

export function AddItemForm(props: AddItemFromPropsType) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const onKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const addTask = () => {
    if (title.trim() !== '') {
      props.addItem(title.trim());
      setTitle('');
    } else {
      setError('Field is not required');
    }
  };

  return (
    <div className='mb-6'>
      <input
        className={error ? s['error'] : s['input']}
        placeholder='add task'
        value={title}
        onChange={onNewTitleChangeHandler}
        onKeyUp={onKeyUpHandler}
      />
      <Button onClick={addTask}>+</Button>
      {error && <div className={s['errorMessage']}>{error}</div>}
    </div>
  );
}
