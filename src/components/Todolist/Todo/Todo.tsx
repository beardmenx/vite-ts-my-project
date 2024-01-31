import { ChangeEvent, KeyboardEvent, useState } from "react";
import { FilterValuesType } from "../Todolist";
import s from "./Todo.module.css";
import Trash from "../../../assets/trash.svg";
import { Button } from "../../Button/Button";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type TodoPropsType = {
  title: string;
  tasks: Array<TaskType>;
  //   tasks: TaskType[] === tasks: Array<TaskType> одинаковая запись !!
  removeTasks: (id: string) => void;
  changeFilter: (value: FilterValuesType) => void;
  addTask: (title: string) => void;
  changeTaskStatus: (taskId: string, isDone: boolean) => void;
  filter: FilterValuesType;
};

export const Todo = (props: TodoPropsType) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const onKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.key === "Enter") {
      addTask();
    }
  };

  const addTask = () => {
    if (title.trim() !== "") {
      props.addTask(title.trim());
      setTitle("");
    } else {
      setError("Field is not required");
    }
  };

  const onAllClickHandler = () => props.changeFilter("all");

  const onActiveClickHandler = () => props.changeFilter("active");

  const onCompletedClickHandler = () => props.changeFilter("completed");

  return (
    <div className={s.todo}>
      <h3 className="text-center">{props.title}</h3>
      <div className="mb-6">
        <input
          className={error ? "error" : ""}
          value={title}
          onChange={onNewTitleChangeHandler}
          onKeyUp={onKeyUpHandler}
        />
        <button className="pl-3 pr-3" onClick={addTask}>
          +
        </button>
        {error && <div className="errorMessage">{error}</div>}
      </div>
      <ul>
        {props.tasks.map((t) => {
          const onRemoveHandler = () => {
            props.removeTasks(t.id);
          };

          const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskStatus(t.id, e.currentTarget.checked);
          };

          return (
            <li className={t.isDone ? "isDone mb-3" : "mb-3"} key={t.id}>
              <input
                type="checkbox"
                checked={t.isDone}
                onChange={onChangeHandler}
              />
              <span>{t.title}</span>
              <button className="ml-4" onClick={onRemoveHandler}>
                <Button img={Trash} />
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
