import { Router } from "express";
import { createTask, deleteTask, getTask, updateTask } from "./task.controller";

const router=Router();

router.post("/", createTask)
router.get('/', getTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);


export const taskRoute=router