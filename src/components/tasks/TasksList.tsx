import React from 'react';
import { Box, List } from '@mui/material';

import { Task } from 'types/task';
import { TaskItem } from './TaskItem';

interface TasksListProps {
  tasks: Task[];
  onTaskStatusChange: (taskId: number) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

export const TasksList: React.FC<TasksListProps> = ({
  tasks,
  onTaskStatusChange,
  onEditTask,
  onDeleteTask,
}) => {
  return (
    <Box>
      <List>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onTaskStatusChange={onTaskStatusChange}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </List>
    </Box>
  );
};
