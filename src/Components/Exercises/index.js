import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core'


const styles = {
    Paper: { 
        padding: 20, 
        marginTop: 10, 
        marginBottom: 10,
        height: 400,
        overflowY: 'auto',
     }
}

export default ({ 
    exercises,
    category,
    onSelect,
    exercise: {
        id, 
        title = 'Welcome!', 
        description =  'Select an exercise'
    }
}) => 
    <Grid container spacing={1}>
        <Grid item sm>
            <Paper style={styles.Paper}>
                { exercises.map(([group, exercises]) =>
                    !category || category === group
                        ? <Fragment key={group}>
                            <Typography 
                                variant="h6"
                                style={{textTransform: 'capitalize'}}
                            >
                                {group}
                            </Typography>
                            <List component="ul">
                                {exercises.map(({ id, title }) => 
                                    <ListItem 
                                        key={id}
                                        button
                                        onClick={() => onSelect(id)}
                                    >
                                        <ListItemText 
                                            primary={title}
                                        />
                                    </ListItem>
                                )}
                            </List>
                          </Fragment>
                        : null
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography variant="h3">
                    {title}
                </Typography>
                <Typography 
                    variant="body1"
                    style={{marginTop: 24}}
                >
                    {description}
                </Typography>
            </Paper>
        </Grid>
    </Grid>
