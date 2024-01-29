export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

export type TodoPropsType = {
  title: string;
  tasks: Array<TaskType>;
  //   tasks: TaskType[] === tasks: Array<TaskType> одинаковая запись !!
};

export const Todo = (props: TodoPropsType) => {
  return (
    <div>
      <h3 className="text-center">{props.title}</h3>
      <div>
        <input type="text" />
        <button className="pl-3 pr-3">+</button>
      </div>
      <ul>
        <li>
          <input type="checkbox" checked={props.tasks[0].isDone} />
          <span>{props.tasks[0].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={props.tasks[1].isDone} />
          <span>{props.tasks[1].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={props.tasks[2].isDone} />
          <span>{props.tasks[2].title}</span>
        </li>
      </ul>
      <div className="flex justify-around">
        <button className="pl-2 pr-2">All</button>
        <button className="pl-2 pr-2">Active</button>
        <button className="pl-2 pr-2">Completed</button>
      </div>
    </div>
  );
};
