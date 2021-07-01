import React from 'react'
import { useSelector } from "react-redux";

const DisplayTime = () => {
    const time = useSelector((state) => state.time);

    return (
        <div>
            <div>{time}</div>
        </div>
    )
}

export default DisplayTime
