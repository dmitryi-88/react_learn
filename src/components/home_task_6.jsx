import { useState } from "react";
import "./home_task_6.css";

function TodoList() {
    const [uniqueID, setUniqueID] = useState(0);
    const [taskList, setTaskList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addTaskToPage = () => {
        const trimmedText = inputValue.trim();

        if (!trimmedText) return;

        setTaskList([
            ...taskList,
            {
                id: uniqueID,
                text: trimmedText,
                completed: false,
            },
        ]);

        setUniqueID(uniqueID + 1);
        setInputValue("");
    };

    const toggleTask = (id) => {
        setTaskList(
            taskList.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task,
            ),
        );
    };

    const deleteTask = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id));
    };

    const completedCount = taskList.filter((task) => task.completed).length;

    return (
        <div className="TodoListContainer">
            <div className="addtask">
                <input
                    type="text"
                    placeholder="Новая задача"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />

                <button onClick={addTaskToPage}>Добавить задачу</button>
            </div>

            <p>
                Выполнено {completedCount} из {taskList.length}
            </p>

            {taskList.length === 0 ? (
                <p>Нет задач</p>
            ) : (
                <ul>
                    {taskList.map((task) => (
                        <li key={task.id}>
                            <input
                                id="checkbox"
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask(task.id)}
                            />

                            <span>{task.text}</span>

                            <button onClick={() => deleteTask(task.id)}>
                                Удалить
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TodoList;
