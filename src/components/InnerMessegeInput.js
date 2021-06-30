import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import { PushMessage } from '../firebase'

const InnerMessegeInput = ({ name, setText, text }) => {
    const [isComposed, setIsComposed] = useState(false);

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
                    PushMessage({ name, text });
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
