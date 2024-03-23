import { ChangeEvent } from 'react';
import { FilterValuesType } from '../Todolist';
import Trash from '../../../assets/trash.svg';
import { AddItemForm } from './AddItemForm/AddItemForm';
import { EdiatableSpan } from './EdiatableSpan/EdaiatableSpan';
import { Button } from '../../../UI/buttons/Button/Button';
import Delete from '../../../assets/trash.svg';
import s from '../Todolist.module.css';

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type TodoPropsType = {
  id: string;
  title: string;
  tasks: Array<TaskType>;
  //   tasks: TaskType[] === tasks: Array<TaskType> одинаковая запись !!
  removeTasks: (taskId: string, todolistId: string) => void;
  changeFilter: (value: FilterValuesType, todolistId: string) => void;
  addTask: (title: string, todolistId: string) => void;
  changeTaskStatus: (
    taskId: string,
    isDone: boolean,
    todolistId: string
  ) => void;
  changeTaskTitle: (id: string, newTitle: string, todolistId: string) => void;
  filter: FilterValuesType;
  removeTodo: (todolistId: string) => void;
  changeTodoTitle: (id: string, newTitle: string) => void;
};

export const Todo = (props: TodoPropsType) => {
  const removeTodo = () => {
    props.removeTodo(props.id);
  };
  const changeTodoTitle = (newTitle: string) => {
    props.changeTodoTitle(props.id, newTitle);
  };

  const onAllClickHandler = () => props.changeFilter('all', props.id);

  const onActiveClickHandler = () => props.changeFilter('active', props.id);

  const onCompletedClickHandler = () =>
    props.changeFilter('completed', props.id);

  const addTask = (title: string) => {
    props.addTask(title, props.id);
  };

  return (
    <div className={s.todo}>
      <div className='text-center'>
        <EdiatableSpan title={props.title} onChange={changeTodoTitle} />
        <Button onClick={removeTodo}>
          <img src={Delete} alt='' />
        </Button>
      </div>
      <AddItemForm addItem={addTask} />
      <ul>
        {props.tasks.map((t) => {
          const onRemoveHandler = () => {
            props.removeTasks(t.id, props.id);
          };

          const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskStatus(t.id, e.currentTarget.checked, props.id);
          };
          const onChangeTitleHandler = (newValue: string) => {
            props.changeTaskTitle(t.id, newValue, props.id);
          };

          return (
            <li className={t.isDone ? 'isDone mb-3' : 'mb-3'} key={t.id}>
              <input
                type='checkbox'
                checked={t.isDone}
                onChange={onChangeStatusHandler}
              />

              <EdiatableSpan title={t.title} onChange={onChangeTitleHandler} />
              <Button onClick={onRemoveHandler}>
                <img src={Trash} alt='' />
              </Button>
            </li>
          );
        })}
      </ul>
      <div className='flex justify-around mt-4'>
        <Button
          appearence='big'
          className={props.filter === 'all' ? `${s.active}` : ''}
          onClick={onAllClickHandler}
        >
          All
        </Button>
        <Button
          appearence='big'
          className={props.filter === 'active' ? `${s.active}` : ''}
          onClick={onActiveClickHandler}
        >
          Active
        </Button>
        <Button
          appearence='big'
          className={props.filter === 'completed' ? `${s.active}` : ''}
          onClick={onCompletedClickHandler}
        >
          Completed
        </Button>
      </div>
    </div>
  );
};
