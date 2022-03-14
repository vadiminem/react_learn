import React from 'react';
import { Box, Container, Stack } from '@mui/material';

import { EditDialog } from 'modals';
import { AddTaskForm, TasksList } from 'components/tasks';
import { useData } from 'hooks';
import { TasksProvider } from 'providers';

export const App: React.FC = () => {
  const [, loading] = useData(5000);

  return (
    <TasksProvider>
      <Container maxWidth="sm">
        <EditDialog />
        <Stack>
          <AddTaskForm />
          <TasksList />
          <Box>loading: {loading ? 'true' : 'false'}</Box>
        </Stack>
      </Container>
    </TasksProvider>
  );
};
