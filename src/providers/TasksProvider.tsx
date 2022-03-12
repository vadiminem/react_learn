import React from 'react';

import { Task, TaskStatus } from 'types/task';

interface TasksContextType {
  tasks: Task[];
  editableTask: Task | null;
  openEditDialog: boolean;
  createTask: (taskName: string) => void;
  changeTaskStatus: (taskId: number) => void;
  editTask: (task: Task) => void;
  deleteTask: (taskId: number) => void;
  saveEditedTask: (task: Task) => void;
  closeEditDialog: () => void;
}

const initialTasksContext: TasksContextType = {
  tasks: {} as Task[],
  editableTask: null,
  openEditDialog: false,
  createTask: () => {},
  changeTaskStatus: () => {},
  editTask: () => {},
  deleteTask: () => {},
  saveEditedTask: () => {},
  closeEditDialog: () => {},
};

export const TasksContext = React.createContext<TasksContextType>(initialTasksContext);

export const TasksProvider: React.FC = ({ children }) => {
  const [openEditDialog, setOpenEditDialog] = React.useState(false);
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [editableTask, setEditableTask] = React.useState<Task | null>(null);

  const createTask = React.useCallback(
    (taskName: string) => {
      const task: Task = {
        id: Date.now(),
        name: taskName,
        date: new Date(),
        status: TaskStatus.Created,
      };
      setTasks([task, ...tasks]);
    },
    [tasks],
  );

  const changeTaskStatus = React.useCallback(
    (taskId: number) => {
      const newTasks = tasks.map((task: Task) => {
        if (task.id === taskId) {
          task.status =
            task.status === TaskStatus.Created ? TaskStatus.Started : TaskStatus.Completed;
        }
        return task;
      });
      setTasks(newTasks);
    },
    [tasks],
  );

  const editTask = React.useCallback((task: Task) => {
    setEditableTask(task);
    setOpenEditDialog(true);
  }, []);

  const deleteTask = React.useCallback(
    (taskId: number) => {
      setTasks(tasks.filter(t => t.id !== taskId));
    },
    [tasks],
  );

  const saveEditedTask = React.useCallback(
    (editedTask: Task) => {
      const newTasks = tasks.map((task: Task) => {
        if (task.id === editedTask.id) {
          return editedTask;
        }
        return task;
      });

      setTasks(newTasks);
      setOpenEditDialog(false);
    },
    [tasks],
  );

  const closeEditDialog = React.useCallback(() => {
    setOpenEditDialog(false);
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        editableTask,
        openEditDialog,
        createTask,
        changeTaskStatus,
        editTask,
        deleteTask,
        saveEditedTask,
        closeEditDialog,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
