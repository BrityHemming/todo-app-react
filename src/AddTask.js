import './AddTask.css';
import {useState} from 'react';

function AddTask(props){

  /**managing the state of input - input store input - setInput is a function that sets the value */
    const [input, setInput] = useState('');

    /**setting the input value*/
    const handleChange = e => {
        setInput(e.target.value);
      };
    
    /**when we try to submit form page refreshes - we want to stop that */
    const handleSubmit = e => {
        e.preventDefault();
    
        props.onSubmit({
          /**creating a unique id we will use this later for marking tasks complete - the changes of 2 ids being the same is very slim */
          id: Math.floor(Math.random() * 10000),
          text: input
        });
        /**setting the input back to empty on submit */
        setInput('');
      };
    

    return(<section className="form-container">
        <form className="Add-a-task" onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="newTask">Add A New Task:</label>
                <input 
                id="newTask" 
                type="text" 
                value={input}
                name="newTask"
                onChange={handleChange} 
                />
            </fieldset>
            <button type="submit" onClick={handleSubmit}>Add</button>
        </form>
    </section>);
}

export default AddTask;