import React from 'react'
import {
    ListItem,
    ListItemText,
    Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DisplayTime from './DisplayTime'


const useStyles = makeStyles({
    parent: {
        // position: 'relative'
    },
    inline: {
        display: 'flex',
        fontSize: '10px',
        // marginTop: '30px'
        textAlign: 'flex-end'
    },
})

const MessageItem = ({ name, text, time }) => {
    const classes = useStyles();
    return (
        <ListItem divider={true}>

            <ListItemText
                primary={name.name}
                secondary={
                    <div className={classes.inline}>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {text}
                        </Typography>
                    </div>

                }
            />
            <div className={classes.inline}>
                <DisplayTime className={classes.inline} time={time} />
            </div>

        </ListItem >
    )
}

export default MessageItem
