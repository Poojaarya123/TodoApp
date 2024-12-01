import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./Todo-app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const initialtodoItems = [
    { name: "Buy Milk", date: "4/11/2023" },
    { name: "Buy coffe", date: "4/11/2023" },
    { name: "Like this video", date: "5/12/2024" },
  ];

  const [todoItems, setTodoItems] = useState(initialtodoItems);

  function handleNewitem(itemName, itemDueDate) {
    console.log(`${itemName} ${itemDueDate}`);
    const newTodoItems = [...initialtodoItems,
      { name: itemName, date: itemDueDate },   //intial todoitem nd ek obj 
    ];                                      
    setTodoItems(newTodoItems);
  }

  const handleDeleteItem=(todoItemName)=>{
  //  console.log(`${todoItemName}`);
  const newTodoItems = todoItems.filter((items)=>(items.name!==todoItemName))
   setTodoItems(newTodoItems); 
  }
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewitem}></AddTodo>
       {todoItems.length ===0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;


// in form action == (define path) server pr kis path pr le kar jaana h  
//  preventDefault === jo me data bhej rhe h bss method ke pass jaye (jo call kar rhe h) form submit nhi hoga...
// useRef == UI re

 