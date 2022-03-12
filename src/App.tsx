import React from 'react';
import { Container, Stack } from '@mui/material';

import { EditDialog } from 'modals';
import { AddTaskForm, TasksList } from 'components/tasks';
import { useTasksProvider } from 'hooks';

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
      </Stack>
    </Container>
  );
};
