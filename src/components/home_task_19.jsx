import styles from "../styles/home_task_19.module.scss";

import { useRef, useState, useEffect, useMemo } from "react";

function SearchUsers() {
    const refInput = useRef(null);
    const [count, setCount] = useState(0);

    const [users] = useState([
        { id: 1, name: "Алексей" },
        { id: 2, name: "Мария" },
        { id: 3, name: "Иван" },
        { id: 4, name: "Ольга" },
        { id: 5, name: "Дмитрий" },
    ]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (refInput.current) {
            refInput.current.focus();
        }
    }, []);

    const filterUsers = useMemo(() => {
        console.log("Фильтрация..");
        return users.filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase()),
        );
    }, [users, search]);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Поиск пользователей (useMemo)</h1>
                <input
                    ref={refInput}
                    type="text"
                    placeholder="Введите имя"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className={styles.usersList}>
                <ul>
                    {filterUsers.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>

            <button onClick={() => setCount((prev) => prev + 1)}>
                Лишний ререндер: {count}
            </button>
        </div>
    );
}

export default SearchUsers;
