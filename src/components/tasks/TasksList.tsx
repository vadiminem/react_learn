import React from 'react';
import { Box, List } from '@mui/material';

import { TaskItem } from './TaskItem';
import { useTasks } from 'hooks';

export const TasksList: React.FC = () => {
  const { tasks } = useTasks();

  return (
    <Box>
      <List>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </List>
    </Box>
  );
};
