import React from "react";

const AddTaskForm = () =>(
    <header className="AddTaskForm">
    <form>
          <input type='text' placeholder='What needs to be done...'></input>
          <button type='submit'>Add</button>
        </form>
  </header>
);

export default AddTaskForm;