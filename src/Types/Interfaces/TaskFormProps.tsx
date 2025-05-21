import { Task } from "./Task"

export interface TaskFormProps
{
    onAddTask: (task: Task) => void;
}