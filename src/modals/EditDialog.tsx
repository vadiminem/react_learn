import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import {Task} from "../types/task";

type EditDialogProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    task: Task;
    tasks: Task[];
    setTasks: Dispatch<SetStateAction<Task[]>>;
}

export const EditDialog = ({open, setOpen, task, tasks, setTasks}: EditDialogProps) => {
    const [fieldValue, setFieldValue] = useState<string>('');

    const handleSave = (): void => {
        const name = fieldValue.trim();
        if (name.length > 0) {
            setOpen(false);
            const index = tasks.indexOf(task);
            const newTasks = tasks;
            newTasks[index].name = name;
            setTasks(newTasks);
        }
    }

    const handleClose = (): void => {
        setOpen(false);
    }

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setFieldValue(event.target.value);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    defaultValue={task.name}
                    onChange={handleTextChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    )
}