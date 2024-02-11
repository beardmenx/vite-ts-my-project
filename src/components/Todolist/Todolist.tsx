import { useState } from "react";
import { TaskType, Todo } from "./Todo/Todo";
import { v1 } from "uuid";
import { AddItemForm } from "./Todo/AddItemForm/AddItemForm";

export type FilterValuesType = "all" | "active" | "completed";

export type TasksStateType = {
  [key: string]: Array<TaskType>;
};

export type TodolistType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};

export const Todolist = () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  let [todolists, setTodolists] = useState<Array<TodolistType>>([
    { id: todolistId1, title: "What to learn", filter: "all" },
    { id: todolistId2, title: "What to buy", filter: "all" },
  ]);

  let [tasksObj, setTasks] = useState<TasksStateType>({
    [todolistId1]: [
      { id: v1(), title: "HTML&CSS", isDone: true },
      { id: v1(), title: "JS", isDone: true },
      { id: v1(), title: "React", isDone: false },
      { id: v1(), title: "Redux", isDone: false },
      { id: v1(), title: "Rest API", isDone: false },
      { id: v1(), title: "GraphQl", isDone: false },
    ],
    [todolistId2]: [
      { id: v1(), title: "Book", isDone: true },
      { id: v1(), title: "Milk", isDone: true },
    ],
  });

  function removeTasks(id: string, todolistId: string) {
    let tasks = tasksObj[todolistId];
    let filteredTasks = tasks.filter((t) => t.id !== id);
    tasksObj[todolistId] = filteredTasks;
    setTasks({ ...tasksObj });
  }

  function addTask(title: string, todolistId: string) {
    let task = { id: v1(), title: title, isDone: false };
    let tasks = tasksObj[todolistId];
    let newTasks = [task, ...tasks];
    tasksObj[todolistId] = newTasks;
    setTasks({ ...tasksObj });
  }

  function removeTodo(todolistId: string) {
    let filteredTodo = todolists.filter((tl) => tl.id !== todolistId);
    setTodolists(filteredTodo);
    delete tasksObj[todolistId];
    setTasks({ ...tasksObj });
  }

  function changeTodoTitle(id: string, newTitle: string) {
    const todolist = todolists.find((tl) => tl.id === id);
    if (todolist) {
      todolist.title = newTitle;
      setTodolists([...todolists]);
    }
  }

  function changeFilter(value: FilterValuesType, todolistId: string) {
    let todolist = todolists.find((tl) => tl.id === todolistId);
    if (todolist) {
      todolist.filter = value;
      setTodolists([...todolists]);
    }
  }

  function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
    let tasks = tasksObj[todolistId];
    let task = tasks.find((t) => t.id === taskId);
    if (task) {
      task.isDone = isDone;
      setTasks({ ...tasksObj });
    }
  }
  function changeTaskTitle(
    taskId: string,
    newTitle: string,
    todolistId: string
  ) {
    let tasks = tasksObj[todolistId];
    let task = tasks.find((t) => t.id === taskId);
    if (task) {
      task.title = newTitle;
      setTasks({ ...tasksObj });
    }
  }

  function addTodo(title: string) {
    let todolist: TodolistType = {
      id: v1(),
      filter: "all",
      title: title,
    };
    setTodolists([todolist, ...todolists]);
    setTasks({
      ...tasksObj,
      [todolist.id]: [],
    });
  }

  return (
    <>
      <h1 className="text-2xl mb-4">Todolist</h1>
      <AddItemForm addItem={addTodo} />
      <div className="flex gap-8">
        {todolists.map((tl) => {
          let tasksForTodolist = tasksObj[tl.id];
          if (tl.filter === "completed") {
            tasksForTodolist = tasksForTodolist.filter(
              (t) => t.isDone === true
            );
          } else if (tl.filter === "active") {
            tasksForTodolist = tasksForTodolist.filter(
              (t) => t.isDone === false
            );
          }
          return (
            <Todo
              key={tl.id}
              id={tl.id}
              title={tl.title}
              tasks={tasksForTodolist}
              removeTasks={removeTasks}
              changeFilter={changeFilter}
              addTask={addTask}
              changeTaskStatus={changeStatus}
              changeTaskTitle={changeTaskTitle}
              filter={tl.filter}
              removeTodo={removeTodo}
              changeTodoTitle={changeTodoTitle}
            />
          );
        })}
      </div>
    </>
  );
};
