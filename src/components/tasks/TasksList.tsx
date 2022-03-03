import {Box, IconButton, List, ListItem} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React, {Dispatch, SetStateAction} from "react";
import {Done, PlayArrow} from "@mui/icons-material";
import {Task, TaskStatus} from "../../types/task";

type TasksListProps = {
    tasks: Task[];
    setTasks: Dispatch<SetStateAction<Task[]>>;
    setEditTask: Dispatch<SetStateAction<Task>>;
    setOpenEditDialog: Dispatch<SetStateAction<boolean>>;
}

export const TasksList = ({tasks, setTasks, setEditTask, setOpenEditDialog}: TasksListProps) => {

    const checkStatus = (status: TaskStatus): JSX.Element => {
        if (status === TaskStatus.Created) return <PlayArrow/>;
        return <Done/>;
    }

    const onStatusChange = (task: Task): void => {
        const taskIndex = tasks.indexOf(task);
        const editedTasks = tasks;
        editedTasks[taskIndex].status = editedTasks[taskIndex].status === TaskStatus.Created ? TaskStatus.Started : TaskStatus.Completed;
        setTasks([...editedTasks]);
    }

    const onDelete = (taskId: number): void => {
        setTasks(tasks.filter(t => t.id !== taskId));
    }

    const onEdit = (task: Task): void => {
        setEditTask(task);
        setOpenEditDialog(true);
    }

    return (
        <Box>
            <List>
                {tasks.map(t =>
                    <ListItem
                        key={t.id}
                        className="task-item"
                        secondaryAction={
                            <>
                                {t.status !== TaskStatus.Completed &&
                                    <>
                                        <IconButton
                                            aria-label="status"
                                            onClick={() => onStatusChange(t)}
                                        >
                                            {checkStatus(t.status)}
                                        </IconButton>
                                        <IconButton
                                            aria-label="edit"
                                            onClick={() => onEdit(t)}
                                        >
                                            <EditIcon/>
                                        </IconButton>
                                    </>
                                }
                                <IconButton
                                    aria-label="delete"
                                    onClick={() => onDelete(t.id)}
                                >
                                    <DeleteIcon/>
                                </IconButton>
                            </>
                        }
                    >
                        <Box>
                            <Box>
                                {t.name}
                            </Box>
                            <Box className="item-description">
                                {t.status.toString()} | {t.date.toLocaleString()}
                            </Box>
                        </Box>
                    </ListItem>)}
            </List>
        </Box>
    );
}