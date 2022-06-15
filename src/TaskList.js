import Task from "./Task";
import './TaskList.css';
import {useState} from 'react';
import AddTask from "./AddTask";

//rfcs enter is a shortcut for creating a functional component 
// function TaskList(){
//     return (<section className="task-container">
//         <Task/>
//         <Task/>
//         <Task/>
//         <Task/>
//         <Task/>
//         <Task/>
//         <Task/>
//     </section>);
// }

function TaskList(){
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
          return;
        }
        /**using the spread operator to pass my todo objects into an array */
        const newTodos = [todo, ...todos];
        /**setting my todos to an the new array above */
        setTodos(newTodos);
        console.log(...todos);
      };
    
      const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        });
        setTodos(updatedTodos);
      };

    return (<div><section className="task-container">
        <Task todos={todos} completeTodo={completeTodo}/>
    </section>
    <AddTask onSubmit={addTodo}/>
    </div>);
    
}
export default TaskList;