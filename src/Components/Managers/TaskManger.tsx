import { useState, useEffect } from 'react';
import { Task } from "../../Types/Interfaces/Tasks/Task";
import TaskForm from '../TaskForm';
import TaskList from '../TaskList';


const TaskManager = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleAddTask = (newTask: Task) => {
        setTasks([...tasks, newTask]);
    }
    
    const handleDeleteTask = (taskId: number) => {
        setTasks(tasks.filter((task)=> task.id !== taskId))
    }
    
    const handleToggleCompletion = (taskId: number) => {
        setTasks(
            tasks.map((task) => 
                task.id === taskId ? { ...task, completed: !task.isCompleted} : task
            )
        )
    }

    useEffect(()=> {
        const savedTasks = localStorage.getItem("filteredTasks");
        if(savedTasks){
            setTasks(JSON.parse(savedTasks));
        }
    }, [tasks])

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm onAddTask={handleAddTask} />
            <TaskList
             tasks={tasks}
             onHandleDeleteTask={handleDeleteTask}
             onHandleToggleCompletion={handleToggleCompletion}
             />
        </div>
    );
}
export default TaskManager;