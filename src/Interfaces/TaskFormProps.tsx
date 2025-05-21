import { Task } from "../Interfaces/Task"

export interface TaskFormProps
{
    onAddTask: (task: Task) => void;
}