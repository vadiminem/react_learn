import {TaskStatus} from "./TaskStatus";

export interface ITask {
    id: number;
    name: string;
    date: Date;
    status: TaskStatus;
}