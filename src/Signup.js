import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Form from './Form';

const Signup = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      <Form handleClose={handleClose} />
    </Dialog>
  );
};

export default Signup;