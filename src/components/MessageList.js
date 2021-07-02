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
const MessageList = () => {
    const classes = useStyles()
    const [messages, setMessages] = useState([])
    // const [times, setTimes] = useState([])
    useEffect(() => {
        messagesRef
            .orderByKey()
            .limitToLast(10) //最新のデータ5件分を取得する
            .on('value', (snapshot) => {
                //0: {key: "-Md_GyPXuGq7aySz2K2f", name: {…}, text: "テスト", time: "13:00"}
                //{key: -MdSPw-qYbo2jmz-n0Oz, name: 'Junya', text: "from button",time: "13:00"}に変更する
                const messages = snapshot.val();
                console.log(messages)
                if (messages === null) return;
                const entries = Object.entries(messages) //オブジェクトを[key, value] からなる配列にして返す
                console.log(entries) //["-Md_GyPXuGq7aySz2K2f", {…}] 配列になって返ってくる
                const changeNewMessages = entries.map((entry) => {
                    const key = entry[0]
                    const nameAndTextAndTime = entry[1]
                    return { key, ...nameAndTextAndTime }　// {…}を展開する
                })
                console.log(changeNewMessages);
                setMessages(changeNewMessages)
            })
    }, [])
    // messageRef.on()でデータを取得する
    // orderByKey()でKeyで並び替えることによりKeyはタイムスタンプそのものなので
    // 時系列順に表示させることができる

    // 最新のメッセージが追加された時に　追加されたメッセージがスクロールされて表示されるための実装
    const length = messages.length　// 最後の要素の時にスクロールをするよう実装する

    return (
        <List className={classes.root}>
            {
                messages.map(({ key, name, text, time }, index) => {
                    const isLastMessege = length === index + 1
                    console.log(text)
                    return <MessageItem key={key} name={name} text={text} time={time} isLastMessage />
                })
            }
        </List>
    )
}

export default MessageList
