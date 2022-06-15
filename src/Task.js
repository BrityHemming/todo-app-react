import './Task.css';
import {useEffect, useState} from 'react';

function Task({todo, completeTodo}){

    const [isComplete, setIsComplete] = useState(false);

    // We need to use a useEffect hook to detect if
    // the todo prop has changed so we can update the
    // isComplete state variable.
    useEffect(() => {
      setIsComplete(todo.isComplete);
    }, [todo]);

    const handleChange = event => {
        if (event.target.checked) {
          console.log('✅ Checkbox is checked');
        } else {
          console.log('⛔️ Checkbox is NOT checked');
        }
        setIsComplete(current => !current);

        // Call the parent component's completeTodo method
        // so we're keeping the list of todos in state in sync
        // with the checking and unchecking of the input element
        // within each Task component.
        completeTodo(todo.id);
      };

      /**Form code */
      

    // return (<div className={!isComplete ? 'task' : 'completed'}>
    //     {/* <p className="text">this is a task</p> */}
    //     <p className="text">{text}</p>
    //     <input
    //       type="checkbox"
    //       value={isComplete}
    //       onChange={handleComplete}
    //       id="complete"
    //       name="complete"
    //     />
    
    // The Task component should only be responsible 
    // for rendering a single todo.
    return (
      <div className={todo.isComplete ? 'completed' : 'task'}>
         <p className="text">{todo.text}</p>
         {/* Set the input element's checked property instead of value */}
         <input
          type="checkbox"
          checked={isComplete}
          onChange={handleChange}
          id="complete"
          name="complete"
        />
        </div>);
}

export default Task;