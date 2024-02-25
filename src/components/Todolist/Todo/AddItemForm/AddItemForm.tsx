import { ChangeEvent, KeyboardEvent, useState } from "react";

export type AddItemFromPropsType = {
  addItem: (title: string) => void;
};

export function AddItemForm(props: AddItemFromPropsType) {
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
      props.addItem(title.trim());
      setTitle("");
    } else {
      setError("Field is not required");
    }
  };

  return (
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
  );
}
