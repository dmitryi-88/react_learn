import { useState, useRef } from "react";

function StopWatch() {
    const [seconds, setSeconds] = useState(0);
    const refID = useRef(null);

    const handleStart = () => {
        if (refID.current !== null) return;

        refID.current = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);
    };

    const handleStop = () => {
        clearInterval(refID.current);
        refID.current = null;
    };

    const handleReset = () => {
        clearInterval(refID.current);
        refID.current = null;
        setSeconds(0);
    };

    return (
        <>
            <h1>Секундомер (useRef + setInterval)</h1>
            <p>Прошло секунд: {seconds}</p>

            <button onClick={handleStart}>Старт</button>
            <button onClick={handleStop}>Стоп</button>
            <button onClick={handleReset}>Сброс</button>
        </>
    );
}

export default StopWatch;
