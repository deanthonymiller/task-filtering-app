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
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold text-center">My Tasks</h1>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <TaskForm onAddTask={handleAddTask} />
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <TaskList
                        tasks={tasks}
                        onHandleDeleteTask={handleDeleteTask}
                        onHandleToggleCompletion={handleToggleCompletion}
                    />
                </div>
            </div>
        </div>
    );
};
export default TaskManager;