import styles from "../../styles/home_task_22/home_task_22_Contacts.module.scss";

function Contacts() {
    return (
        <div className={styles.contacts}>
            <h2>Контактные данные:</h2>
            <span>+799846651</span>
            <span>+865615165161</span>
            <span>+484984646464</span>
            <span>Адрес: ул. Пушкина 1</span>
        </div>
    );
}

export default Contacts;
