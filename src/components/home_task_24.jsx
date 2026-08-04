import { useState } from "react";
import styles from "../styles/home_task_24.module.scss";

const useCounter = (initialValue, step = 1) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount((prev) => prev + step);
    };

    const decrement = () => {
        setCount((prev) => prev - step);
    };

    const reset = () => {
        setCount(initialValue);
    };

    return [count, increment, decrement, reset];
};

function Counter() {
    const [count, increment, decrement, reset] = useCounter(0, 5);

    return (
        <div className={styles.container}>
            <h1>Домашнее задание: useCounter</h1>
            <span>
                Текущее значение:{" "}
                <strong key={count} className={styles.jump}>{count}</strong>
            </span>

            <div className={styles.buttons}>
                <button onClick={increment}>Увеличить</button>
                <button onClick={decrement}>Уменьшить</button>
                <button onClick={reset}>Сбросить</button>
            </div>
        </div>
    );
}

export default Counter;
