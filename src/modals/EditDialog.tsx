import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

import { useTasks } from 'hooks';

export const EditDialog: React.FC = () => {
  const [fieldValue, setFieldValue] = React.useState<string>('');
  const { editableTask, openEditDialog, saveEditedTask, closeEditDialog } = useTasks();

  const onSave = (): void => {
    const name = fieldValue.trim();
    if (name.length > 0 && editableTask) {
      saveEditedTask({ ...editableTask, name });
    }
  };

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFieldValue(event.target.value);
  };

  return (
    <Dialog open={openEditDialog} onClose={closeEditDialog}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <TextField autoFocus defaultValue={editableTask?.name} onChange={onTextChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeEditDialog}>Cancel</Button>
        <Button onClick={onSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
