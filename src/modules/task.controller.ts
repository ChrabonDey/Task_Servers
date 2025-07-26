import { Request, Response } from "express";
import { TaskModel } from "./tast.model";


export const createTask= async(req:Request,res:Response)=>{
  try{
      const task=new TaskModel(req.body);
    const saved=await task.save()
    res.status(201).json(saved)
  }catch(error){
    console.log(error)
  }
}
export const getTask=async(req:Request, res:Response)=>{
    const task=await TaskModel.find()
    res.json(task)
}

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = await TaskModel.findByIdAndUpdate(id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: 'Task not found' });
  res.json(updated);
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await TaskModel.findByIdAndDelete(id);
  if (!deleted) return res.status(404).json({ message: 'Task not found' });
  res.json(deleted);
};





