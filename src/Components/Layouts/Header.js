import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'


export default props =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h5">
                Exercise database
            </Typography>
        </Toolbar>
    </AppBar>