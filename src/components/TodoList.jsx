import Todo from "./Todo";

const TodoList = ({todos, setTodos}) => {
  return ( 
    <>
    <ul>
    {
      todos && 
      todos.map(todo => (
        <Todo todo={todo}
        todos={todos}
        setTodos={setTodos}
        key={todo.id}/>
      ))
    }
    </ul>
    </>
   );
}
 
export default TodoList;