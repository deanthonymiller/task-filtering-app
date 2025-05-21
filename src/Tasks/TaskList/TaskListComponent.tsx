import { useState } from "react"
import { Task } from "../Models/TaskModel";

const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

const handleAddTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
}

const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter((tasks)=> tasks.id !== taskId))
}

const handleToggleCompletion = (taskId: number) => {
    setTasks(
        tasks.map((task) => 
            task.id === taskId ? { ...task, completed: !task.isCompleted} : task
        )
    )
}

return (
    <div>
        <h2>Task List</h2>
        <ul>
            {tasks.map((task) =>(
                <li key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>Due: {task.dueDate.toLocaleDateString()}</p>
                    <p>Status: {task.isCompleted ? "Completed" : "Pending"}</p>
                    <button onClick={() => handleToggleCompletion(task.id)}>
                        Toggle status
                    </button>
                    <button onClick={()=> handleDeleteTask(task.id)}></button>
                </li>
            ))}
        </ul>
    </div>
);
};

export default TaskList;