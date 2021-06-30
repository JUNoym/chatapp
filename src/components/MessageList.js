import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { messagesRef } from '../firebase'
import { List } from '@material-ui/core';
import MessageItem from './MessageItem'

const useStyles = makeStyles({
    root: {
        gridRow: 2,
        overflow: 'auto',
    }
})
const MessageList = ({ name, key, text }) => {
    const classes = useStyles()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        messagesRef
            .orderByKey()
            .limitToLast(5) //最新のデータ5件分を取得する
            .on('value', (snapshot) => {
                //key: -MdSPw-qYbo2jmz-n0Oz, value:{name: {…}, text: "from button"}
                //{key: -MdSPw-qYbo2jmz-n0Oz, name: 'Junya', text: "from button"}に変更する
                const messages = snapshot.val();
                if (messages === null) return;
                const entries = Object.entries(messages) //オブジェクトを[key, value] からなる配列にして返す
                const changeNewMessages = entries.map((entry) => {
                    const key = entry[0]
                    const nameAndText = entry[1]
                    return { key, ...nameAndText }
                })
                console.log(changeNewMessages);
                setMessages(changeNewMessages)
            })
    }, [])
    // messageRef.on()でデータを取得する
    // orderByKey()でKeyで並び替えることによりKeyはタイムスタンプそのものなので
    // 時系列順に表示させることができる

    return (
        <List className={classes.root}>
            {
                messages.map(({ key, name, text }) => {
                    return <MessageItem key={key} name={name} text={text}></MessageItem>
                })
            }
        </List>
    )
}

export default MessageList
