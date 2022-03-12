import React from 'react';
import { Box, Container, Stack } from '@mui/material';

import { EditDialog } from 'modals';
import { AddTaskForm, TasksList } from 'components/tasks';
import { useData, useTasksProvider } from 'hooks';

export const App: React.FC = () => {
  const {
    tasks,
    editableTask,
    openEditDialog,
    createTask,
    changeTaskStatus,
    editTask,
    deleteTask,
    saveEditedTask,
    closeEditDialog,
  } = useTasksProvider();

  const [, loading] = useData(5);

  return (
    <Container maxWidth="sm">
      <EditDialog
        open={openEditDialog}
        task={editableTask}
        onSaveTask={saveEditedTask}
        onClose={closeEditDialog}
      />
      <Stack>
        <AddTaskForm onCreateTask={createTask} />
        <TasksList
          tasks={tasks}
          onTaskStatusChange={changeTaskStatus}
          onEditTask={editTask}
          onDeleteTask={deleteTask}
        />
        <Box>loading: {loading ? 'true' : 'false'}</Box>
      </Stack>
    </Container>
  );
};
