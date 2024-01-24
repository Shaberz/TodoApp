import React ,{useState}from "react";
import './AddTaskForm.css'
const AddTaskForm = ({addTask}) =>{

  const [value , setValue] =useState('')
  const handleChange =(event) =>{
    if (event) event.preventDefault();
    setValue(event.target.value);
  };
  // console.log("Value....",value);

const handleSubmit = (event) =>{
  if (event) event.preventDefault();
  if (!value || value ===''){
    return
  }
  addTask(value);
};


return(
    <header className="AddTaskForm">
    <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type='text' placeholder='What needs to be done...'></input>
          <button type='submit'>Add</button>
        </form>
  </header>
)};

export default AddTaskForm;