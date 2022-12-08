import React, { useEffect, useState } from 'react';
import './timer.css';


export const Timer = () => {

    let [time, setTime] = useState(0);

    useEffect(() => {
        console.log("timer rendered",time);

        const timer = setInterval(() => {
            setTime(time => time + 1);
        },1000)

        return () => {
            clearInterval(timer)
        }
    })



    return (
        <div className="timer">

            Timer: {time}

        </div>
    )

}