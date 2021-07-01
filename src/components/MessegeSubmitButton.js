import React from 'react'
import { PushMessages, PushMessage } from '../firebase'
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import { useSelector, useDispatch } from "react-redux";
import { getTime } from './App'



const MessegeSubmitButton = ({ name, setText, text, }) => {

    const getTime = () => {
        dispatch({ type: "GET_TIME" })
    }
    const time = useSelector((state) => state.time);

    const dispatch = useDispatch();
    return (
        <div>
            <IconButton disabled={text == ''} onClick={() => {
                getTime()
                PushMessage({ name, text, time })
                setText('')
            }}>
                <SendIcon />
            </IconButton>
        </div>
    )
}

export default MessegeSubmitButton
