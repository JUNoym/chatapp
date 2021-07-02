import React, { useEffect, useRef } from 'react'
import {
    ListItem,
    ListItemText,
    Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DisplayTime from './DisplayTime'


const useStyles = makeStyles({
    inline: {
        display: 'flex',
        fontSize: '10px',
        textAlign: 'flex-end'
    },
})

const MessageItem = ({ isLastMessage, name, text, time }) => {
    const ref = useRef(null)
    const classes = useStyles();

    useEffect(() => {
        if (isLastMessage) {
            //Trueの時にスクロール
            ref.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [isLastMessage])
    return (
        <ListItem divider={true} ref={ref}>

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
