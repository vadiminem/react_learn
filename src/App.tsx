import React from 'react';
import { Container, Stack } from '@mui/material';

import { EditDialog } from 'modals';
import { AddTaskForm, TasksList } from 'components/tasks';
import { Task, TaskStatus } from 'types/task';

export const App: React.FC = () => {
  const [openEditDialog, setOpenEditDialog] = React.useState(false);
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [editTask, setEditTask] = React.useState<Task | null>(null);

  const onTaskStatusChange = (taskId: number): void => {
    const newTasks = tasks.map((task: Task) => {
      if (task.id === taskId) {
        task.status =
          task.status === TaskStatus.Created ? TaskStatus.Started : TaskStatus.Completed;
      }
      return task;
    });
    setTasks(newTasks);
  };

  const onCreateTask = (taskName: string): void => {
    const task: Task = {
      id: Date.now(),
      name: taskName,
      date: new Date(),
      status: TaskStatus.Created,
    };
    setTasks([task, ...tasks]);
  };

  const onDeleteTask = (taskId: number): void => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const onEditTask = (task: Task): void => {
    setEditTask(task);
    setOpenEditDialog(true);
  };

  const onEditTaskDialogSave = (editedTask: Task): void => {
    const newTasks = tasks.map((task: Task) => {
      if (task.id === editedTask.id) {
        return editedTask;
      }
      return task;
    });

    setTasks(newTasks);
    setOpenEditDialog(false);
  };

  const onEditTaskDialogClose = (): void => {
    setOpenEditDialog(false);
  };

  return (
    <Container maxWidth="sm">
      <EditDialog
        open={openEditDialog}
        task={editTask}
        onSaveTask={onEditTaskDialogSave}
        onClose={onEditTaskDialogClose}
      />
      <Stack>
        <AddTaskForm onCreateTask={onCreateTask} />
        <TasksList
          tasks={tasks}
          onTaskStatusChange={onTaskStatusChange}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />
      </Stack>
    </Container>
  );
};
