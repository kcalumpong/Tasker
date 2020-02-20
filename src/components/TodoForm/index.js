import React from 'react';

const TodoForm = (props) => {

        return (
            <div className="todoForm">
                <form className="todoForm">
                    <label>Task Name</label>
                    <input
                        value={props.state.task.taskName}
                        onChange={props.handleChange}
                        type="todo"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Task Name">
                    </input>
                   
                    <label>Task Description</label>
                    <textarea
                        value={props.state.task.taskDescription}
                        onChange={props.handleChange}
                        type="todo"
                        className="form-control"
                        id="exampleFormControlInput2"
                        placeholder="Task Description">
                    </textarea>
                </form>
                <button className="saveButton" onClick={props.handleSaveButton}>SUBMIT</button>
            </div>
    
            )
        }
    
    export default TodoForm;
