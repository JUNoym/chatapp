import React from 'react'
import { PushMessages, PushMessage } from '../firebase'
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';


const MessegeSubmitButton = ({ name, setText, text }) => {
    return (
        <div>
            <IconButton disabled={text == ''} onClick={() => {
                PushMessage({ name, text })
                setText('')
            }}>
                <SendIcon />
            </IconButton>
        </div>
    )
}

export default MessegeSubmitButton
