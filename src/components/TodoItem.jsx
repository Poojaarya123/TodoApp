import { MdDelete } from "react-icons/md";
function TodoItem({todoDate,todoName,onDeleteClick}){
  
      return  <div className="container text-center mt-4">
       <div class="row">
      <div class="col-6">{todoName}</div>
      <div class="col-4">{todoDate} </div>
      <div class="col-2">                                      {/* child to parent */}
      <button type="button" class="btn btn-danger" onClick={() => onDeleteClick(todoName)}><MdDelete></MdDelete></button>
      </div>
    </div>
    </div> 
  }
  export default TodoItem;   