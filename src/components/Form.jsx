import { FaPlusSquare } from "react-icons/fa";
import {StyledForm, StyledFormButton } from "../../styles/StyledForm";

const Form = ({setInputText, inputText, setTodos, todos, setStatus}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value)

  }
  const submitTodoHandler = e => {
    let todo = inputText.replace(/^\s+|\s+$/g, "x");
    e.preventDefault();
    
    if(!todo) {
      alert("Invalid item!");
      return
    }
    
    setTodos([
      ...todos, 
      {
        text: todo,
        completed: false,
        id: Math.random() * 10_000
      }
    ])
    setInputText("");
  }
  const statusHandler = e => {
    setStatus(e.target.value);
    console.log(e.target)
  }  
  return ( 
    <StyledForm>
      <div>
        <input
          type="text"
          required
          onChange={inputTextHandler} 
          value={inputText}
          placeholder="Add new todo"
        />
        <StyledFormButton 
        type="submit" 
        onClick={submitTodoHandler}
        ><FaPlusSquare />
        </StyledFormButton>
        <div>
          <select onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
    </StyledForm>
   );
}

export default Form;