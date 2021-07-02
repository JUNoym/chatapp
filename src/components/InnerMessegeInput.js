import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import { PushMessage } from '../firebase'
import { useSelector, useDispatch } from "react-redux";


const InnerMessegeInput = ({ name, setText, text }) => {
    const dispatch = useDispatch();

    const getTime = () => {
        dispatch({ type: "GET_TIME" })
    }

    const [isComposed, setIsComposed] = useState(false);
    const time = useSelector((state) => state.time);

    return (
        <TextField
            autoFocus
            fullWidth={true}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
                if (isComposed) return;

                const text = e.target.value;
                //テキストが空文字の時にFirebaseに送られないようにする
                if (text === '') return;

                if (e.key === 'Enter') {
                    getTime()
                    PushMessage({ name, text, time });
                    setText('');
                    e.preventDefault();
                }
            }}
            onCompositionStart={() => setIsComposed(true)}
            onCompositionEnd={() => setIsComposed(false)}
            value={text}
        />
    )
}

export default InnerMessegeInput
