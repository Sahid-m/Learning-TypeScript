import { ChangeEvent, useState } from 'react';
import './App.css';


function App() {

  interface Todos{
    id: number;
    value: string;
    done: boolean;
  }

  const [todos, setTodos] = useState<Todos[]>([]);
  const [todo, setTodo] = useState<string>("");


  const handleAddTodo = () => {
    if (todo.length === 0) {
      alert("Please Add a Todo First");
    } else {

      const id:number = (Math.random() % 1000) + 1;

      setTodos([...todos, { id: id, value: todo, done: false } ])
      setTodo("");
    }
  }

  const handleCheckMark = (id:number) => {
    let updated_Todo: Todos[] = [];
    
    updated_Todo = todos.map((todo) => 
      todo.id == id ?  {...todo, done: !todo.done} : todo 
    )

    setTodos(updated_Todo);
  }

  const handleDelete = (id:number) => {
    let updated_Todo: Todos[] = [];

    updated_Todo = todos.filter((todo) => todo.id != id);

    setTodos(updated_Todo);
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }

  return (
    <>
      <div className='container'>
        <h1 className='heading'>Todo APP</h1>
        <div className="todo">
          <input className='todo-input' value={todo} onChange={(e) => {handleInput(e)}} />
          <button className='add-todo' onClick={handleAddTodo} > Add Todo</button>
        </div>
            {/* <li><div className='todo-list-list'> <input className='todo-checkbox' type='checkbox' /> Todo 1 <button className='delete-todo' > Delete </button></div></li> */}
        <div className="todo-list">
          <ul>
          {todos.length == 0 ? (<h1> No Todo</h1>) : (
            todos.map((todo) => {
              return (<li><div className={todo.done ? ` done todo-list-list` : `todo-list-list`}> <input onClick={() => handleCheckMark(todo.id)} className='todo-checkbox' checked={todo.done} type='checkbox' /> <span className='text'>{todo.value}</span> <button className='delete-todo' onClick={() => handleDelete(todo.id)} > Delete </button></div></li>)
            })
            )}
            </ul>
        </div>
        
      </div>
    </>
  )
}

export default App
