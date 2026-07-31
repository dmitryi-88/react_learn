// В задании пришлось так же использовать useCallBack,
// так как передаваемые функции в TodoItem меняют свои ссылки,
// и React.memo становится бесполезным.

// При отключении StrictMode видно что ререндериться именно компонент - элемент списка
// который подвергается изменению.

import { memo, useState, useRef, useEffect, useCallback } from "react";
import styles from "../styles/home_task_18.module.scss";

function TodoItem({ id, text, status, onToggle, onDelete }) {
    console.log("Render TodoItem...", id);

    return (
        <li>
            Задача: "{text}" | Статус:
            <input
                type="checkbox"
                checked={status}
                onChange={() => onToggle(id)}
            />
            <button onClick={() => onDelete(id)}>Удалить</button>
        </li>
    );
}

const MemoziedTodoItem = memo(TodoItem);

function ToDoMemo() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const refInput = useRef();

    useEffect(() => {
        if (refInput.current) {
            refInput.current.focus();
        }
    }, []);

    const handleAddTask = () => {
        if (!newTask) return;

        setTasks([...tasks, { id: Date.now(), text: newTask, status: false }]);
    };

    const handleDelete = useCallback((id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }, []);

    const toggleTask = useCallback((id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, status: !task.status } : task,
            ),
        );
    }, []);

    return (
        <div className={styles.todoList}>
            <h1>Список задач (React.memo)</h1>
            <div className={styles.taskBar}>
                <input
                    ref={refInput}
                    type="text"
                    placeholder="Новая задача"
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={handleAddTask}>Добваить задачу</button>
            </div>

            <ul className={styles.tasksList}>
                {tasks.map((task) => (
                    <MemoziedTodoItem
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        status={task.status}
                        onToggle={toggleTask}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ToDoMemo;
