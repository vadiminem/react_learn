import React, { useState } from 'react';
import { Container, Stack } from '@mui/material';
import { EditDialog } from './modals';
import { AddTask, TasksList } from './components/tasks';
import { Task } from './types/task';

function App() {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editTask, setEditTask] = useState<Task>({} as Task);

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
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TasksList
          tasks={tasks}
          setTasks={setTasks}
          setEditTask={setEditTask}
          setOpenEditDialog={setOpenEditDialog}
        />
      </Stack>
    </Container>
  );
}

export default App;
