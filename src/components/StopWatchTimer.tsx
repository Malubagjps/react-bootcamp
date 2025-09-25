import React, { useState, useEffect } from 'react'

const StopWatchTimer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId = null;

        if (isRunning) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        }
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isRunning]);
    const minutes = Math.floor(((time /1000) % 3600) / 60);
    const seconds = Math.floor(time / 1000) % 60;
    const milliseconds = Math.floor((time % 1000) / 10);

    const startTimer = () => {
        setIsRunning(true);
    }

    const stopTimer = () => {
        setIsRunning(false);
    }

    const resetTimer = () => {
        setIsRunning(false);
        setTime(0);
    }

    const formatTime = (time) => {
        return time < 10 ? `0${time}`: `${time}`;
    }

    return (
        <div>
            <h2>Stop Watch Timer</h2>
            <div style={{ fontSize: '48px', marginBottom: '30px'}}>
                {formatTime(minutes)}:{formatTime(seconds)}:{formatTime(milliseconds)}
            </div>
            <div style={{display: 'flex', justifyContent: 'space-evenly', width: '300px'}}>
                <button onClick={startTimer} style={{backgroundColor: "green", color: "white"}}>Start</button>
                <button onClick={stopTimer} style={{backgroundColor: "red", color: "white"}}>Stop</button>
                <button onClick={resetTimer} style={{backgroundColor: "blue", color: "white"}}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatchTimer