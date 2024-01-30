import { useState } from "react";
import { TaskType, Todo } from "./Todo/Todo";
import { v1 } from "uuid";

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistPropsType = {};

export const Todolist = () => {
  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "React", isDone: false },
    { id: v1(), title: "Redux", isDone: false },
    { id: v1(), title: "Rest API", isDone: false },
    { id: v1(), title: "GraphQl", isDone: false },
  ]);

  let [filter, setFilter] = useState<FilterValuesType>("all");

  function removeTasks(id: string) {
    let filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }

  function addTask(title: string) {
    let newTask = { id: v1(), title: title, isDone: false };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }

  function changeStatus(taskId: string, isDone: boolean) {
    let task = tasks.find((t) => t.id === taskId);
    if (task) {
      task.isDone = isDone;
    }

    setTasks([...tasks]);
  }

  let tasksForTodolist = tasks;
  if (filter === "completed") {
    tasksForTodolist = tasks.filter((t) => t.isDone === true);
  } else if (filter === "active") {
    tasksForTodolist = tasks.filter((t) => t.isDone === false);
  }

  return (
    <>
      <h1 className="text-2xl mb-4">Todolist</h1>
      <div className="flex gap-8">
        <Todo
          title="What to learn"
          tasks={tasksForTodolist}
          removeTasks={removeTasks}
          changeFilter={changeFilter}
          addTask={addTask}
          changeTaskStatus={changeStatus}
        />
      </div>
    </>
  );
};
