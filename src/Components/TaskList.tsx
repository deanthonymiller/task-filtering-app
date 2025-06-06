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

            <ul className="space-y-4">
                {filteredTasks.map((task) => (
                    <li key={task.id}
                        className="flex justify-between items-center p-4 border rounded-lg"
                    >
                        <h3 className="font-medium text-lg">{task.title}</h3>
                        <p className="text-gray-600">{task.description}</p>
                        <p className="text-sm text-gray-500">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                        <p>Status: {task.isCompleted ? "Completed" : "Pending"}</p>
                        <div className="space-x-2">
                            <button
                                onClick={() => onHandleToggleCompletion(task.id)}
                                className={`px-3 py-1 rounded ${task.isCompleted ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"}`}
                            >
                                {task.isCompleted ? "Done" : "pending"}
                            </button>
                        </div>
                        <button onClick={() => onHandleDeleteTask(task.id)}
                            className="px-3 py-1 rounded bg-red-200 text-red-800">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;