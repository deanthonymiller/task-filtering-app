import { Task } from "./Task"

export interface TaskListProps{
    tasks: Task[];
    onHandleDeleteTask: (taskId: number) => void;
    onHandleToggleCompletion: (taskId: number) => void;
}