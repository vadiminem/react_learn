export interface Task {
  id: number;
  name: string;
  date: Date;
  status: TaskStatus;
}

export enum TaskStatus {
  Created = 'Created',
  Started = 'Started',
  Completed = 'Completed',
}
