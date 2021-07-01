import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { colors } from '@material-ui/core';

const useStyles = makeStyles({
    header: {
        background: 'green',
        color: 'white',
        fontWeight: 'bold',
        padding: '15px'
    }
})

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            RealTime Chat
        </div>
    )
}

export default Header
