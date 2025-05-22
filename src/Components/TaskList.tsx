import { useState, useEffect } from "react";
import { TaskListProps } from "../Types/Interfaces/Tasks/TaskListProps";


const TaskList = ({ tasks, onHandleDeleteTask, onHandleToggleCompletion }: TaskListProps) => {
    const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

    const filteredTasks = tasks.filter((tasks) => {
        if (filter === "completed") { return tasks.isCompleted; }
        if (filter === "pending") { return !tasks.isCompleted };
        return true;
    });

    const handleFilterChange = (newFilter: "all" | "completed" | "pending") => {
        setFilter(newFilter);
    };

    useEffect(() => {
        localStorage.setItem("filteredTasks", JSON.stringify(tasks))
    }, [filteredTasks])

    return (
        <div>
            <h2>Task List</h2>

            <div>
                <button onClick={() => handleFilterChange("all")}>All</button>
                <button onClick={() => handleFilterChange("completed")}>Completed</button>
                <button onClick={() => handleFilterChange("pending")}>Pending</button>
            </div>

            <ul>
                {filteredTasks.map((task) => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                        <p>Status: {task.isCompleted ? "Completed" : "Pending"}</p>
                        <button onClick={() => onHandleToggleCompletion(task.id)}>
                            Toggle status
                        </button>
                        <button onClick={() => onHandleDeleteTask(task.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;