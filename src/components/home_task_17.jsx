import { useState, useRef } from "react";

function StopWatch() {
    console.log("rerender...");
    const [seconds, setSeconds] = useState(0);
    const refID = useRef(null);

    const handleStart = () => {
        setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);
    };

    const handleStop = () => {
        clearInterval()
    }

    return (
        <>
            <h1>Секундомер (useRef + setInterval)</h1>
            <p>Прошло секунд: {seconds}</p>

            <button onClick={handleStart}>Старт</button>
            <button>Стоп</button>
            <button>Сброс</button>
        </>
    );
}

export default StopWatch;
