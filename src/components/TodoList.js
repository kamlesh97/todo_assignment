import React from "react";

const TodoList = ({ todos, setTodos, setEdit }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = ({ id }) => {
    const findItem = todos.find((todo) => todo.id === id);
    setEdit(findItem);
  };

  const handleSave = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div className='main-input' > 
      {todos.map((todo) => (
        <div key={todo.id} className='todo-list'>
          <input
            type="text"
            value={todo.title}
            onChange={(e) => {
              e.preventDefault();
            }}
            className='list'
             
          />
          <span>
            <button className='icon' onClick={() => handleSave(todo)}>
              <i className="fas fa-check-circle"></i>
            </button>
            <button className='icon' onClick={() => handleEdit(todo)}>
              <i className="fas fa-edit"></i>
            </button>
            <button className='icon' onClick={() => handleDelete(todo)}>
              <i className="fas fa-trash"></i>
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
