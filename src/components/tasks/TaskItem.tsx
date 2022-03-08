import React from 'react';
import { Box, IconButton, ListItem } from '@mui/material';
import { Delete, Done, Edit, PlayArrow } from '@mui/icons-material';

import { Task, TaskStatus } from 'types/task';

interface TaskItemProps {
  task: Task;
  onTaskStatusChange: (taskId: number) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onTaskStatusChange,
  onEditTask,
  onDeleteTask,
}) => {
  const renderTaskStatus = (status: TaskStatus): JSX.Element => {
    if (status === TaskStatus.Created) return <PlayArrow />;
    return <Done />;
  };

  const onStatusChange = () => {
    onTaskStatusChange(task.id);
  };

  const onEdit = () => {
    onEditTask(task);
  };

  const onDelete = () => {
    onDeleteTask(task.id);
  };

  const getTaskActions = (task: Task): JSX.Element => {
    return (
      <React.Fragment>
        {task.status !== TaskStatus.Completed && (
          <React.Fragment>
            <IconButton aria-label="status" onClick={onStatusChange}>
              {renderTaskStatus(task.status)}
            </IconButton>
            <IconButton aria-label="edit" onClick={onEdit}>
              <Edit />
            </IconButton>
          </React.Fragment>
        )}
        <IconButton aria-label="delete" onClick={onDelete}>
          <Delete />
        </IconButton>
      </React.Fragment>
    );
  };

  return (
    <ListItem className="task-item" secondaryAction={getTaskActions(task)}>
      <Box>
        <Box>{task.name}</Box>
        <Box className="item-description">
          {task.status} | {task.date.toLocaleString()}
        </Box>
      </Box>
    </ListItem>
  );
};
