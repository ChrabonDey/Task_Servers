

import { Schema, model } from 'mongoose';
import { Task, TaskPriority, TaskStatus } from './task.interface';

 export interface ITask extends Task, Document {}


const TaskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: String, required: true },
    status: {
      type: String,
      enum: Object.values(TaskStatus),
      default: TaskStatus.Pending,
    },
    priority: {
      type: String,
      enum: Object.values(TaskPriority),
      default: TaskPriority.Medium,
    },
  },
  { timestamps: true }
);

export const TaskModel = model<ITask>('Task', TaskSchema);
