import React, {useState} from 'react';
import './App.css';
import {Container, Stack} from "@mui/material";
import {ITask} from "./models";
import {EditDialog} from "./EditDialog/EditDialog";
import {AddTask} from "./AddTask/AddTask";
import {TasksList} from "./TasksList/TasksList";

function App() {
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [editTask, setEditTask] = useState<ITask>({} as ITask);

    return (
        <Container maxWidth='sm'>
            <EditDialog
                open={openEditDialog}
                setOpen={setOpenEditDialog}
                task={editTask}
                tasks={tasks}
                setTasks={setTasks}
            />
            <Stack>
                <AddTask
                    tasks={tasks}
                    setTasks={setTasks}
                />
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
