import styles from "../../styles/home_task_22/home_task_22.module.scss";
import MainPage from "./home_task_22_MainPage.jsx";
import Profile from "./home_task_22_Profile.jsx";
import Contacts from "./home_task_22_Contacts.jsx";
import ErrorBoundary from "./home_task_22_ErrorBoundary.jsx";
import { useState } from "react";

function PageWithError() {
    const [currentComponent, setCurrentComponent] = useState("main");

    const handleChangeComponent = (e) => {
        setCurrentComponent(e.target.name);
    };

    const choiceComponent = () => {
        switch (currentComponent) {
            case "main":
                return <MainPage />;

            case "profile":
                return <Profile />;

            case "contacts":
                return <Contacts />;

            default:
                return <MainPage />;
        }
    };

    return (
        <div className={styles.page}>
            <h1>Навигация по вкладкам с ErrorBoundary</h1>

            <div className={styles.tabs}>
                <button onClick={handleChangeComponent} name="main">
                    Главная
                </button>
                <button onClick={handleChangeComponent} name="profile">
                    Профиль
                </button>
                <button onClick={handleChangeComponent} name="contacts">
                    Контакты
                </button>
            </div>

            <div className={styles.currentComponent}>
                <ErrorBoundary>{choiceComponent()}</ErrorBoundary>
            </div>
        </div>
    );
}

export default PageWithError;
