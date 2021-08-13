import { createStore } from "redux";
//　Githubの新機能のテスト

const initialState = {
    time: '18時00分'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TIME":
            let today = new Date();
            const data2 = today.getHours() + '時' + today.getMinutes() + '分'
            today = String(data2)
            return {
                time: state.time = today,
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
