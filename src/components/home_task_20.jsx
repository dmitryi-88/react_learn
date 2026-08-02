import { useState, useCallback, memo } from "react";
import styles from "../styles/home_task_20.module.scss";

const TodoItem = memo(function TodoItem({
    id,
    text,
    status,
    onToggle,
    onDelete,
}) {
    console.log(`Render Task... id: ${id}`);
    return (
        <li>
            {text}
            <input
                type="checkbox"
                checked={status}
                onChange={() => onToggle(id)}
            />
            <button onClick={() => onDelete(id)}>Удалить</button>
        </li>
    );
});

function AppTodo() {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");

    const handleToggle = useCallback((id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, status: !task.status } : task,
            ),
        );
    }, []);

    const handleDelete = useCallback((id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Спиосок задач (useCallback)</h1>
                <input
                    type="text"
                    placeholder="Новая задача"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    onClick={() => {
                        text &&
                            setTasks((prev) => [
                                ...prev,
                                { id: Date.now(), text: text, status: false },
                            ]);
                        setText("");
                    }}
                >
                    Добавить
                </button>
            </div>

            <div className={styles.taskList}>
                {tasks.length ? (
                    <ul>
                        {tasks.map((task) => (
                            <TodoItem
                                key={task.id}
                                id={task.id}
                                text={task.text}
                                status={task.status}
                                onToggle={handleToggle}
                                onDelete={handleDelete}
                            />
                        ))}
                    </ul>
                ) : (
                    <p>Список задач пуст!</p>
                )}
            </div>
        </div>
    );
}

export default AppTodo;
