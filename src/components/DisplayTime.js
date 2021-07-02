import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    inline: {
        display: 'flex',
        textAlign: 'flex-end',
        background: 'white',
    },
})

const DisplayTime = ({ time, text }) => {
    const classes = useStyles();
    return (
        <div className={classes.inline}>
            {time}
        </div>
    )
}

export default DisplayTime
