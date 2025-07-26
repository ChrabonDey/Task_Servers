
export enum TaskStatus{
    Pending= "Pending",
    Completed="Completed"
}

export enum TaskPriority{
     Low="Low",
     Medium="Medium",
     High="High"
}

export interface Task{
    id:string,
    title: string,
    description:string,
    dueDate:string,
    status:TaskStatus,
    priority: TaskPriority
}