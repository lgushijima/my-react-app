// src/contexts/DialogContext.jsx
import React, {createContext, useContext, useState, useCallback} from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@mui/material';

const DialogContext = createContext();
const initialState = {
  title: '',
  content: '',
  actions: null,
  size: 'md',
};
export const DialogProvider = ({children}) => {
  const [dialogOptions, setDialogOptions] = useState(initialState);
  const [open, setOpen] = useState(false);

  const openDialog = useCallback(options => {
    setDialogOptions(options ?? initialState);
    setOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setOpen(false);
    if (dialogOptions?.onClose) dialogOptions.onClose();

    setTimeout(() => {
      setDialogOptions(initialState);
    }, 500);
  }, [dialogOptions]);

  return (
    <DialogContext.Provider value={{openDialog, closeDialog}}>
      {children}
      <Dialog open={open} onClose={closeDialog} fullWidth maxWidth={dialogOptions.size}>
        <DialogTitle>{dialogOptions.title}</DialogTitle>
        <DialogContent dividers>{dialogOptions.content}</DialogContent>
        <DialogActions>{dialogOptions?.actions || <Button onClick={closeDialog}>Close</Button>}</DialogActions>
      </Dialog>
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error('useDialog precisa estar dentro de <DialogProvider>');
  return ctx;
};
