import React , {useState ,useEffect} from "react";
import {
    AddTaskForm,
    TaskList,
    FilterFooter,
    } from '../'
import './TodoApp.css';
import{ v4 as uuidv4} from 'uuid';

const TodoApp = () =>
{
    const [tasks, setTasks] = useState([])
    const [filteredTasks, setFilteredTasks] = useState([])
    const[filter,setFilter] = useState('all')
    const[refresh,setRefresh] = useState(0)
    useEffect(() => {
        setTasks([
            {
                id:uuidv4(),
                title: 'Defualt Task',
                status: true, //Boolean

            },
            {
                id:uuidv4(),
                title: 'Defualt Task number 2',
                status: false, //Boolean

            },

        ])
    },[]);
    useEffect(() => {
        if (filter === 'all'){
            setFilteredTasks(tasks)
        }
        if (filter === 'completed'){
            const newCompletedFilteredTasks = tasks.filter(task => task.status)
            setFilteredTasks(newCompletedFilteredTasks)
        }
        if (filter === 'active'){
            const newActiveFilteredTasks = tasks.filter(task => !task.status)
            setFilteredTasks(newActiveFilteredTasks)
        }
        },[filter,tasks,refresh]);
    

    const addTask = (tasktitle) =>{
        const newTasks =[
        
            ...tasks,
            {
                id:uuidv4(),
                title: tasktitle,
                status: false, //Boolean
            }
        ];
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks))
    }
    const deleteTask = (taskId) =>{
        let newTasksList = tasks
        delete newTasksList[tasks.findIndex((task) => task.id === taskId)];
        newTasksList.filter((item) => item);
        setTasks(newTasksList);
        localStorage.setItem("tasks", JSON.stringify(newTasksList))
    }
    const handleChangeStatus = (taskId) =>{
        // console.log("taskId",taskId)
        let newTasksList = tasks
        const taskIndex = tasks.findIndex((task) => task.id === taskId)
        newTasksList[taskIndex].status = !newTasksList[taskIndex].status;
        newTasksList.filter((item) => item);
        setTasks(newTasksList);
        setRefresh(refresh + 1)
    }
    return(
        <div className="TodoApp">
            <AddTaskForm addTask = {addTask}/>
            <TaskList tasks={filteredTasks} deleteTask={deleteTask} handleChangeStatus={handleChangeStatus}/>
            <FilterFooter tasks={tasks} updateFilter ={setFilter}/>
        </div>
    )
}

export default TodoApp