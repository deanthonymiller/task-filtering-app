import { useState, useEffect } from 'react';
import { Task } from "../Types/Interfaces/Tasks/Task";
import TaskForm from '../Components/TaskForm';
import TaskList from '../Components/TaskList';


const TaskManager = () => {
    const [tasks, setTasks] = useState<Task[]>(() => {

        const saved = localStorage.getItem("filteredTasks")
        if (!saved) {
            return [];
        }
        const rawTasks = JSON.parse(saved);
        return rawTasks.map((task: any) => ({
            ...task,
            dueDate: task.dueDate ? new Date(task.dueDate) : null
        }));
    });
    const handleAddTask = (newTask: Task) => {
        setTasks([...tasks, newTask]);
    }

    const handleDeleteTask = (taskId: number) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }

    const handleToggleCompletion = (taskId: number) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
            )
        )
    }

    useEffect(() => {
        const savedTasks = localStorage.getItem("filteredTasks");
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, [])

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
};
export default TaskManager;