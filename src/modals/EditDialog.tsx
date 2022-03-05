import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

import { Task } from 'types/task';

interface EditDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const EditDialog: React.FC<EditDialogProps> = ({
  open,
  setOpen,
  task,
  tasks,
  setTasks,
}: EditDialogProps) => {
  const [fieldValue, setFieldValue] = React.useState<string>('');

  const onSave = (): void => {
    const name = fieldValue.trim();
    if (name.length > 0) {
      setOpen(false);
      const index = tasks.indexOf(task);
      const newTasks = tasks;
      newTasks[index].name = name;
      setTasks(newTasks);
    }
  };

  const onClose = (): void => {
    setOpen(false);
  };

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFieldValue(event.target.value);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <TextField autoFocus defaultValue={task.name} onChange={onTextChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
