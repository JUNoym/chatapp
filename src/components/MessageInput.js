import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid } from '@material-ui/core'
import { gravatarPath } from '../gravatar'
import InnerMessageInput from './InnerMessegeInput'
import MessegeSubmitButton from './MessegeSubmitButton'

const useStyles = makeStyles({
    root: {
        gridRow: 3,
        margin: '25px'

    }
})

const MessageInput = ({ name }) => {
    const classes = useStyles()
    const avatarPath = gravatarPath('name');
    const [text, setText] = useState('')
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={10}>
                    {/* InnerMessageInputで何か入力されるたびにsetTextを呼び出してtextを変更する */}
                    <InnerMessageInput name={name} setText={setText} text={text} />
                </Grid>
                <Grid item xs={2} >
                    <MessegeSubmitButton name={name} setText={setText} text={text} />
                </Grid>
            </Grid>
        </div >
    )
}

export default MessageInput
