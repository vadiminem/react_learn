import React from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';

import { Task, TaskStatus } from 'types/task';

interface AddTaskProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const AddTask: React.FC<AddTaskProps> = ({ tasks, setTasks }: AddTaskProps) => {
  const [textFieldValue, setTextFieldValue] = React.useState<string>('');

  const onAddTask = (event: React.FormEvent): void => {
    event.preventDefault();
    const name = textFieldValue.trim();
    if (name.length > 0) {
      const task: Task = {
        id: Date.now(),
        name: name,
        date: new Date(),
        status: TaskStatus.Created,
      };
      setTasks([task, ...tasks]);
      setTextFieldValue('');
    }
  };

  const onValueChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTextFieldValue(event.target.value);
  };

  return (
    <Box>
      <form className="add-task-form" onSubmit={onAddTask} autoComplete="off">
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
};
