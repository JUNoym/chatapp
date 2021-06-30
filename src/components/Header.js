import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { colors } from '@material-ui/core';

const useStyles = makeStyles({
    header: {
        background: 'green',
        color: 'white',
        fontSize: 'bold'
    }
})

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            リアルタイムチャットアプリ
        </div>
    )
}

export default Header
