import styles from '../styles/home_task_16_loginPanel.module.scss';
import { useContext, useState } from "react";
import { AuthContext } from "./home_task_16_context";
import Greeting from "./home_task_16_greeting";

function LoginPanel() {
    const { user, login, logout } = useContext(AuthContext);
    const [inputValue, setInputValue] = useState("");

    return user ? (
        <div className={styles.authPanel}>
            <h2>Панель пользователя</h2>
            <Greeting />
            <button onClick={logout}>Выйти</button>
        </div>
    ) : (
        <div className={styles.authPanel}>
            <h2>Панель пользователя</h2>
            <input
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                value={inputValue}
                placeholder="Введите имя"
            />
            <button onClick={() => login(inputValue)}>Войти</button>
        </div>
    );
}

export default LoginPanel;
