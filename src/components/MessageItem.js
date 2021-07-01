import React from 'react'
import {
    ListItem,
    ListItemText,
    Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DisplayTime from './DisplayTime'


const useStyles = makeStyles({
    inline: {
        display: 'inline',
    },
})

const MessageItem = ({ name, text, time }) => {
    console.log((text))
    const classes = useStyles();
    return (
        <ListItem divider={true}>

            <ListItemText
                primary={name.name}
                secondary={
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        {text}
                        {time}
                        <DisplayTime />
                    </Typography>
                }
            />
        </ListItem>
    )
}

export default MessageItem
