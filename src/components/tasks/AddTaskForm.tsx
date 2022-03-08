import React from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';

interface AddTaskProps {
  onCreateTask: (taskName: string) => void;
}

export const AddTaskForm: React.FC<AddTaskProps> = ({ onCreateTask }) => {
  const [textFieldValue, setTextFieldValue] = React.useState<string>('');

  const onAddTask = (event: React.FormEvent): void => {
    event.preventDefault();
    const name = textFieldValue.trim();
    if (name.length > 0) {
      onCreateTask(name);
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
