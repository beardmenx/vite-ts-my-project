import { ChangeEvent } from "react";
import { FilterValuesType } from "../Todolist";
import Trash from "../../../assets/trash.svg";
import { AddItemForm } from "./AddItemForm/AddItemForm";
import { EdiatableSpan } from "./EdiatableSpan/EdaiatableSpan";

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

  const onAllClickHandler = () => props.changeFilter("all", props.id);

  const onActiveClickHandler = () => props.changeFilter("active", props.id);

  const onCompletedClickHandler = () =>
    props.changeFilter("completed", props.id);

  const addTask = (title: string) => {
    props.addTask(title, props.id);
  };

  return (
    <div className="todo">
      <h3 className="text-center">
        <EdiatableSpan title={props.title} onChange={changeTodoTitle} />
        <button className="pl-2 pr-2" onClick={removeTodo}>
          X
        </button>
      </h3>
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
            <li className={t.isDone ? "isDone mb-3" : "mb-3"} key={t.id}>
              <input
                type="checkbox"
                checked={t.isDone}
                onChange={onChangeStatusHandler}
              />

              <EdiatableSpan title={t.title} onChange={onChangeTitleHandler} />
              <button className="ml-4" onClick={onRemoveHandler}>
                <img src={Trash} alt="" />
              </button>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-around mt-4">
        <button
          className={
            props.filter === "all" ? "activeBtn pl-2 pr-2" : " pl-2 pr-2"
          }
          onClick={onAllClickHandler}
        >
          All
        </button>
        <button
          className={
            props.filter === "active" ? "activeBtn pl-2 pr-2" : " pl-2 pr-2"
          }
          onClick={onActiveClickHandler}
        >
          Active
        </button>
        <button
          className={
            props.filter === "completed" ? "activeBtn pl-2 pr-2" : " pl-2 pr-2"
          }
          onClick={onCompletedClickHandler}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
