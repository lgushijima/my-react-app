import React, {createContext, useContext, useState, useCallback} from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@mui/material';

const ModalContext = createContext(null);
const initialState = {
  title: '',
  content: '',
  actions: null,
  size: 'md',
};

export const ModalProvider = ({children}) => {
  const [modalOptions, setModalOptions] = useState(initialState);
  const [open, setOpen] = useState(false);

  const openModal = useCallback(options => {
    setModalOptions(options ?? initialState);
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    if (modalOptions?.onClose) modalOptions.onClose();
    setTimeout(() => {
      setModalOptions(initialState);
    }, 500);
  }, [modalOptions]);

  return (
    <ModalContext.Provider value={{openModal, closeModal}}>
      {children}

      <Dialog open={open} onClose={closeModal} fullWidth maxWidth={modalOptions.size}>
        <DialogTitle>{modalOptions.title}</DialogTitle>
        <DialogContent dividers>{modalOptions.content}</DialogContent>
        <DialogActions>
          {modalOptions?.actions || (
            <Button onClick={closeModal} variant="contained" color="primary">
              Close
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal precisa ser usado dentro de um <ModalProvider>');
  return ctx;
};
