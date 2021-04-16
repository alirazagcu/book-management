import React from 'react';
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@material-ui/core"

export default function FormDialog({handleCloseCallBack, open}) {
  return (
    <div>
      <Dialog open={open} onClose={handleCloseCallBack} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">User Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
              Please add phone no and address so we reach you better
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="phoneNo"
            label="Phone No"
            fullWidth
            type="number"
            onChange = {(e)=>{console.log(e.target.value)}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            fullWidth
            onChange = {(e)=>{console.log(e.target.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCallBack} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseCallBack} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
