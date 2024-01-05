import { useState } from "react";
import TodoItem from "./TodoItem";
function AddTodo() {
  let [inputvalue, setInputvalue] = useState("");
  let [dateValue, SetDatValue] = useState("");
  let [todos, setTodos] = useState([]);

  let handleInputChange = (e) => {
    let value = e.target.value;

    setInputvalue(value);
  };
  let handleDateChange = (e) => {
    let value = e.target.value;

    SetDatValue(value);
  };
  let handleClick = () => {
    let value = { input: inputvalue, date: dateValue };
    setTodos([...todos, value]);
  };

  let ButtonDeleteClick = (item) => {
    const filteredTodos = todos.filter((el) => el !== item);
    setTodos(filteredTodos);
  };

  return (
    <div class="row">
      <div class="col-6">
        <input
          type="text"
          value={inputvalue}
          onChange={handleInputChange}
          placeholder="Enter Todo "
        />
      </div>
      <div class="col-4">
        <input type="date" onChange={handleDateChange} />
      </div>
      <div class="col-2">
        <button onClick={handleClick} class="btn btn-success">
          ADD
        </button>
      </div>

      <div>
        {todos.length === 0 ? (
          <h1>Please Enter the Todo List</h1>
        ) : (
          todos.map((el) => (
            <TodoItem
              input={el.input}
              date={el.date}
              ButtonDeleteClick={() => ButtonDeleteClick(el)}
            />
          ))
        )}
      </div>
    </div>
  );
}
export default AddTodo;
