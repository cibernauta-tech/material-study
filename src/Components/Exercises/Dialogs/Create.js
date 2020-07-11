import React, { Fragment } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

export default props =>
    <Fragment>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New exercise</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Fill out the form to create a new exercise.
                </DialogContentText>
                <form>

                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    </Fragment>