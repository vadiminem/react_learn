import React from 'react';
import { Container, Stack } from '@mui/material';

import { EditDialog } from 'modals';
import { AddTaskForm, TasksList } from 'components/tasks';
import { Task } from 'types/task';

export const App: React.FC = () => {
  const [openEditDialog, setOpenEditDialog] = React.useState(false);
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [editTask, setEditTask] = React.useState<Task>({} as Task);

  return (
    <Container maxWidth="sm">
      <EditDialog
        open={openEditDialog}
        setOpen={setOpenEditDialog}
        task={editTask}
        tasks={tasks}
        setTasks={setTasks}
      />
      <Stack>
        <AddTaskForm tasks={tasks} setTasks={setTasks} />
        <TasksList
          tasks={tasks}
          setTasks={setTasks}
          setEditTask={setEditTask}
          setOpenEditDialog={setOpenEditDialog}
        />
      </Stack>
    </Container>
  );
};
