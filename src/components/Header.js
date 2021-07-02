import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    header: {
        background: 'deepskyblue',
        border: '5px solid white',
        color: 'white',
        fontWeight: 'bold',
        padding: '15px',
        borderRadius: '5px'
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
