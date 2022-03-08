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
  task: Task | null;
  onSaveTask: (editedTask: Task) => void;
  onClose: () => void;
}

export const EditDialog: React.FC<EditDialogProps> = ({ open, task, onSaveTask, onClose }) => {
  const [fieldValue, setFieldValue] = React.useState<string>('');

  const onSave = (): void => {
    const name = fieldValue.trim();
    if (name.length > 0 && task) {
      onSaveTask({ ...task, name });
    }
  };

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFieldValue(event.target.value);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <TextField autoFocus defaultValue={task?.name} onChange={onTextChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
