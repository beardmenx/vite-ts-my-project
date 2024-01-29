import { TaskType, Todo } from "./Todo/Todo";

export type TodolistProps = {};

export const Todolist = () => {
  let tasks1: Array<TaskType> = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
  ];

  let tasks2: Array<TaskType> = [
    { id: 1, title: "Terminator", isDone: true },
    { id: 2, title: "XXX", isDone: false },
    { id: 3, title: "Pirates of Caribean", isDone: true },
  ];

  return (
    <>
      <h1 className="text-2xl mb-4">Todolist</h1>
      <div className="flex gap-8">
        <Todo title="What to learn" tasks={tasks1} />
        <Todo title="Movies" tasks={tasks2} />
      </div>
    </>
  );
};
