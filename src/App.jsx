import { useEffect, useState } from "react";
import Global from "../styles/GlobalStyles"
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const filterHandler = () => {
    switch(status) {

      case "completed": 
        setFilteredTodos(todos.filter(item => item.completed === true))
        break;
      
      case "uncompleted": 
        setFilteredTodos(todos.filter(item => item.completed === false))        
        break;
      
      default: 
        setFilteredTodos(todos)        
        break;
    }
  }
  useEffect(()=> {
    getLocalTodos();
  }, [])
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") == null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  }
  return ( 
  <>
  <Global />
  <Header />
  <Form
  inputText={inputText}
  setInputText={setInputText} 
  todos={todos}
  setTodos={setTodos}
  setStatus={setStatus}
  />
  <TodoList
  todos={filteredTodos}
  setTodos={setTodos}
  />
  </> 
  );
}
 
export default App;