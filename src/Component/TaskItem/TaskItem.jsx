import React from "react";
import './TaskItem.css';
import { IoCloseCircleSharp } from "react-icons/io5";



const TaskItem = ({task,deleteTask,handleChangeStatus}) =>(
    <li className="TaskItem">
        <input onChange={() => handleChangeStatus(task.id)} 
        id='Task' type='checkbox' checked={task.status}></input>
        <h2>{task.title}</h2>
        <button onClick={() => {deleteTask(task.id)}}><IoCloseCircleSharp className="icon-button" /></button>
    </li>
)

export default TaskItem;