import { StyledButton, StyledItem } from "../../styles/StyledItem"
import { FaCheck, FaTrash } from "react-icons/fa"

const Todo = ({todo, todos, setTodos}) => {
  const removeHandler = () => {
    setTodos(todos.filter(item => item.id !== todo.id))
  }
  const completeHandler = () => { 
   setTodos(todos.map(item => {
     if(item.id == todo.id) {
        item.completed = !item.completed
     }
     return item
   }))
  }
  return (  
      <StyledItem completed={todo.completed}>
        <li>{todo.text}</li>
        
        <StyledButton
          completed
          onClick={completeHandler}>
          <FaCheck />
        </StyledButton>
        
        <StyledButton 
          onClick={removeHandler}>
          <FaTrash />
        </StyledButton>
      </StyledItem>
   );
}
 
export default Todo;
