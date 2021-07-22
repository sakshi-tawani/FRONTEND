import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Signup from './Signup';
import { makeStyles } from '@material-ui/core';


const App = () => {
  
  // declare a new state variable for signup open
  const [open, setOpen] = useState(false);

  // function to handle signup open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle signup close
  const handleClose = () => {
    setOpen(false);
  };

  return (
    
    <div className="App">
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Signup
      </Button>
      <Signup open={open} handleClose={handleClose} />
    </div>
  );
};

export default App;