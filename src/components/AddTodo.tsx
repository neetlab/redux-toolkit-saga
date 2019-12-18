import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";

const mapDispatch = { onAddTodo: addTodo };

interface AddTodoProps {
  onAddTodo: (todoText: string) => void;
}

const AddTodo = ({ onAddTodo }: AddTodoProps) => {
  const [todoText, setTodoText] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.currentTarget.value);
  };

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!todoText.trim()) {
            return;
          }
          onAddTodo(todoText);
          setTodoText("");
        }}
      >
        <input value={todoText} onChange={onChange} />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};

export default connect(null, mapDispatch)(AddTodo);
