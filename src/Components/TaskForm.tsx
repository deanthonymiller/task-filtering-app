import { useState } from "react"
import { TaskFormProps } from "../Types/Interfaces/Tasks/TaskFormProps";
import { Task } from "../Types/Interfaces/Tasks/Task";

const TaskForm = ({onAddTask}: TaskFormProps ) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState<Date>(new Date()); 


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTask: Task = {
            id: Date.now(),
            title,
            description,
            isCompleted: false,
            dueDate,
            priority: "low"
        };

        onAddTask(newTask);
        setTitle("");
        setDescription("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
            />
            <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDueDate(new Date(e.target.value))}
            />
            <input 
                type="date"
                value={dueDate.toISOString().split("T")[0]}
                onChange={(e) => setDueDate(new Date(e.target.value))}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
