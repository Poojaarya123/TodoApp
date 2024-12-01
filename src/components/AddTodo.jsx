import { useRef, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoname] = useState();
  // const [todoDate, setDueDate] = useState();

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // When we use useState then
  // const handlerNewChange = (event) => {
  //   setTodoname(event.target.value);
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };

  const handleButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, todoDate);
  };

  return (
    <div className="container text-center mt-4">
      <form className="row" onSubmit={handleButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success">
            <IoIosAddCircleOutline></IoIosAddCircleOutline>
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
