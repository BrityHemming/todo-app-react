import './Task.css';
import {useState} from 'react';



function Task({todos, completeTodo}){

    const [isComplete, setIsComplete] = useState(false);

    const handleComplete = event => {
        if (event.target.checked) {
          console.log('✅ Checkbox is checked');
        } else {
          console.log('⛔️ Checkbox is NOT checked');
        }
        setIsComplete(current => !current);
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
    
    return todos.map((item, index) => (
      <div key={index.id} 
      className={item.isComplete ? 'completed' : 'task'}>
         <p className="text">{item.text}</p>
         <input
          type="checkbox"
          value={isComplete}
          onChange={handleComplete}
          id="complete"
          name="complete"
          key={item.id} 
          onClick={() => completeTodo(item.id)}
        />
        </div>));
}

export default Task;