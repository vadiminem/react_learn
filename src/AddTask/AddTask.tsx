import {Box, Button, Grid, TextField} from "@mui/material";
import React, {ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from "react";
import {ITask, TaskStatus} from "../models";

type AddTaskProps = {
    tasks: ITask[];
    setTasks: Dispatch<SetStateAction<ITask[]>>;
}

export const AddTask = ({tasks, setTasks}: AddTaskProps) => {
    const [textFieldValue, setTextFieldValue] = useState<string>('');

    const onAddTask = (event: FormEvent): void => {
        event.preventDefault();
        const name = textFieldValue.trim();
        if (name.length > 0) {
            const task: ITask = {
                id: tasks.length,
                name: name,
                date: new Date(),
                status: TaskStatus.Created
            }
            setTasks([task, ...tasks]);
            setTextFieldValue('');
        }
    }

    const onValueChanged = (event: ChangeEvent<HTMLInputElement>): void => {
        setTextFieldValue(event.target.value);
    }

    return (
        <Box>
            <form
                className="add-task-form"
                onSubmit={onAddTask}
                autoComplete="off"
            >
                <Grid container>
                    <Grid item xs={10}>
                        <TextField
                            autoFocus={true}
                            className="add-task-field"
                            placeholder="Task name"
                            size="small"
                            value={textFieldValue}
                            onChange={onValueChanged}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button type="submit">Add</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}