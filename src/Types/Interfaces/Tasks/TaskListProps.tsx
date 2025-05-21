import { Task } from "./Tasks/Task";

export interface TaskListProps{
    tasks: Task[];
    onHandleDeleteTask: (taskId: number) => void;
    onHandleToggleCompletion: (taskId: number) => void;
}