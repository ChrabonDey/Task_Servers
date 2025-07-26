"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const mongoose_1 = require("mongoose");
const task_interface_1 = require("./task.interface");
const TaskSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: String, required: true },
    status: {
        type: String,
        enum: Object.values(task_interface_1.TaskStatus),
        default: task_interface_1.TaskStatus.Pending,
    },
    priority: {
        type: String,
        enum: Object.values(task_interface_1.TaskPriority),
        default: task_interface_1.TaskPriority.Medium,
    },
}, { timestamps: true });
exports.TaskModel = (0, mongoose_1.model)('Task', TaskSchema);
