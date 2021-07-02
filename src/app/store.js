import { createStore } from "redux";

const initialState = {
    time: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TIME":
            let today = new Date();
            const data2 = today.getHours() + '時' + today.getMinutes() + '分'
            today = String(data2)
            // console.log(today)
            // console.log(typeof (today))
            return {
                time: state.time = today,
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;