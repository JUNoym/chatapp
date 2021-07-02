import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MessageInput from './MessageInput'
import MessageList from './MessageList'
import Header from './Header'


const useStyles = makeStyles({
    root: {
        display: 'grid',
        height: '100vh',
        gridTemplateRows: 'auto 1fr auto',
    }
})


const Main = (name) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <MessageInput name={name} />
            <MessageList name={name} />
        </div>
    )
}

export default Main
