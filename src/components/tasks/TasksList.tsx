import React from 'react';
import { Box, IconButton, List, ListItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Done, PlayArrow } from '@mui/icons-material';

import { Task, TaskStatus } from 'types/task';

interface TasksListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setEditTask: React.Dispatch<React.SetStateAction<Task>>;
  setOpenEditDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TasksList: React.FC<TasksListProps> = ({
  tasks,
  setTasks,
  setEditTask,
  setOpenEditDialog,
}) => {
  const checkStatus = (status: TaskStatus): JSX.Element => {
    if (status === TaskStatus.Created) return <PlayArrow />;
    return <Done />;
  };

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

  const getTaskActions = (task: Task): JSX.Element => {
    return (
      <React.Fragment>
        {task.status !== TaskStatus.Completed && (
          <React.Fragment>
            <IconButton aria-label="status" onClick={() => onStatusChange(task)}>
              {checkStatus(task.status)}
            </IconButton>
            <IconButton aria-label="edit" onClick={() => onEdit(task)}>
              <EditIcon />
            </IconButton>
          </React.Fragment>
        )}
        <IconButton aria-label="delete" onClick={() => onDelete(task.id)}>
          <DeleteIcon />
        </IconButton>
      </React.Fragment>
    );
  };

  return (
    <Box>
      <List>
        {tasks.map(task => (
          <ListItem key={task.id} className="task-item" secondaryAction={getTaskActions(task)}>
            <Box>
              <Box>{task.name}</Box>
              <Box className="item-description">
                {task.status.toString()} | {task.date.toLocaleString()}
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
