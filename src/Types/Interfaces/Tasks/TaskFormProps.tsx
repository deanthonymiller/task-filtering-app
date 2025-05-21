import { Task } from "./Tasks/Task"

export interface TaskFormProps
{
    onAddTask: (task: Task) => void;
}