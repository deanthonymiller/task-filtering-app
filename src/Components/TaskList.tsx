import { TaskListProps } from "../Types/Interfaces/TaskListProps";

const TaskList = ({tasks, onHandleDeleteTask, onHandleToggleCompletion }: TaskListProps) => {
 
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
                    <button onClick={() => onHandleToggleCompletion(task.id)}>
                        Toggle status
                    </button>
                    <button onClick={()=> onHandleDeleteTask(task.id)}></button>
                </li>
            ))}
        </ul>
    </div>
);
};

export default TaskList;