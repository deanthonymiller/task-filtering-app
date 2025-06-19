import { Schema, model, Document } from "mongoose";

export interface ITask extends Document {
    userId: string;
    title: string;
    description: string;
    completed: boolean;
    dueDate: Date;
    priority: string;

}

const TaskSchema: Schema = new Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    dueDate: { type: Date, required: true },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'low' },
}, { timestamps: true });

export const Task = model<ITask>('Task', TaskSchema);