import './modal.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {  JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from 'react';

interface ModalProps {
  /**
   * Title modal
   */
  title : string;
  /**
   * Text modal
   */
  text : string;
  /**
   * Button contents
   */
  label: string;
}


/**
 * Primary UI component for user interaction
 */
export const Modal = ({
  title,
  text,
  label,
  ...props
}: ModalProps) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  
  return (
      <AlertDialog  title={title} text={text} label={label} />
    // <button
    //   type="button"
    //   {...props}
    //   onClick={ Prueba}
    // >
    //   {label}
    // </button>
  );
};


// export default function AlertDialog() {
  const AlertDialog = ({...props}) => {
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          {props.label}
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {props.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {props.text}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }


