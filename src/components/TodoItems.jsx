import TodoItem from "./TodoItem";

function TodoItems({todoItems,onDeleteClick}){
  return (
  <>
   {todoItems.map((items)=>(
  <TodoItem todoName={items.name} todoDate={items.date} onDeleteClick={onDeleteClick}>
   </TodoItem>

   ))}

  </>)
}
export default TodoItems;