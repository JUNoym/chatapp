import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDCRWXgwQLiPBBzdy8sBusgkITilnG2Fn0",
    authDomain: "react-chat-app-6fd93.firebaseapp.com",
    projectId: "react-chat-app-6fd93",
    storageBucket: "react-chat-app-6fd93.appspot.com",
    messagingSenderId: "308165368401",
    appId: "1:308165368401:web:f59fe5fd987a5e9705b670",
    measurementId: "G-25CFGFRP41"
};

firebase.initializeApp(firebaseConfig)
const database = firebase.database()

// RealTime Databaseのどの名前空間にデータを追加するのかを設定する
export const messagesRef = database.ref('messages')

// ボタンやエンターキーが押された時に実行するのでexportする
export const PushMessage = ({ name, text }) => {
    messagesRef.push({ name, text })
}