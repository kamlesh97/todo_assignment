import React, { useEffect } from "react";
import { v4 as uuid4 } from "uuid";
const Form = ({ input, setInput, todos, setTodos, edit, setEdit }) => {

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEdit("");
  };

  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [setInput, edit]);

  const onInputHandle = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      setTodos([...todos, { id: uuid4(), title: input, completed: false }]);
    } else {
      updateTodo(input, edit.id, edit.completed);
    }
  };
  return (
    <div>
      <form onSubmit={onFormSubmit} className="form">
        <input
          type="text"
          value={input}
          required
          onChange={onInputHandle}
          placeholder="input toDo"
          className='task-input'
        />
        <button type="submit" className="button-add">
          {edit?'edit':'add todo'}
        </button>
      </form>
    </div>
  );
};

export default Form;
