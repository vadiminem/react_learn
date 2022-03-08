import React from 'react';
import { Box, List } from '@mui/material';

import { Task, TaskStatus } from 'types/task';
import { TaskItem } from './TaskItem';

interface TasksListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setEditTask: React.Dispatch<React.SetStateAction<Task | null>>;
  setOpenEditDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TasksList: React.FC<TasksListProps> = ({
  tasks,
  setTasks,
  setEditTask,
  setOpenEditDialog,
}) => {
  const onStatusChange = (task: Task): void => {
    const taskIndex = tasks.indexOf(task);
    const editedTasks = tasks;
    editedTasks[taskIndex].status =
      editedTasks[taskIndex].status === TaskStatus.Created
        ? TaskStatus.Started
        : TaskStatus.Completed;
    setTasks(editedTasks);
  };

  const onDelete = (taskId: number): void => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const onEdit = (task: Task): void => {
    setEditTask(task);
    setOpenEditDialog(true);
  };

  return (
    <Box>
      <List>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onTaskStatusChanged={onStatusChange}
            onEditTask={onEdit}
            onDeleteTask={onDelete}
          />
        ))}
      </List>
    </Box>
  );
};
