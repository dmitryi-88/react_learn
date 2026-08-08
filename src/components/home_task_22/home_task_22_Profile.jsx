import styles from "../../styles/home_task_22/home_task_22_Profile.module.scss";
import { useEffect, useState } from "react";

function Profile({ error = true }) {
    if (error) {
        throw new Error("Ошибка профиля");
    }

    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return isLoaded ? (
        <div className={styles.loading}>
            <h2>Повторная загрузка профиля...</h2>
        </div>
    ) : (
        <div className={styles.profile}>
            <h2>Мой профиль:</h2>
            <span>Имя: Дмитрий</span>
            <span>Телефон: +76541614615</span>
            <span>email: example@mail.com</span>
        </div>
    );
}

export default Profile;
