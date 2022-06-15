import Task from "./Task";
import './TaskList.css';
import {useState} from 'react';
import AddTask from "./AddTask";


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

// Creating some initial data in order to test
// the updated Task component (we want to verify that
// the task isComplete property can be successfully passed
// down into the Task component as the initial checkbox state).
const TODOS_DATA = [
  { id: 1, text: 'Task 1', isComplete: true },
  { id: 2, text: 'Task 2', isComplete: false },
  { id: 3, text: 'Task 3', isComplete: false }
];

function TaskList(){
    const [todos, setTodos] = useState(TODOS_DATA);

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
            // In order for the useEffect hook inside of the Task
            // component to detect when a task object has changed
            // we need to create a copy of the object before
            // we update it.
            todo = {...todo};
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        });
        setTodos(updatedTodos);
      };

    return (<div><section className="task-container">
      {/* The TaskList component should render the list of todos */}
      {todos.map(t => (
        <Task key={t.id} todo={t} completeTodo={completeTodo}/>
      ))}
    </section>
    <AddTask onSubmit={addTodo}/>
    </div>);
    
}
export default TaskList;