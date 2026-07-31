import "./home_task_5.css";
import { useState } from "react";

let clickCount = 0;

const handleClick = () => {
    clickCount++;
    console.log(`Нажатий: ${clickCount}`);
};

const inputChangeLog = (event) => {
    console.log(event.target.value);
};

function HomeTask5() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="task5">
            <button onClick={handleClick}>Нажми меня</button>
            <p>Количество нажатий смотрите в консоли</p>
            <input
                type="text"
                placeholder="Введите имя"
                onChange={inputChangeLog}
            />
            <p>Смотрите имя в консоли</p>
            <div
                onMouseOver={() => {
                    setIsHovered(true);
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                }}
                className={isHovered ? "highlight" : ""}
            >
                Наведи на меня
            </div>
        </div>
    );
}

export default HomeTask5;

// Ответы на вопросы:

// Почему clickCount не обновляет интерфейс?
// clickCount не обновляет интерфейс потому что это обычная переменная JS,
// а не состояние React.

// В чём недостаток вывода в консоль?
// Пользователь не видит информацию, если на зайти в devtools,
// после обновления страницы информация теряется.

// Какие данные можно извлечь из объекта event?
// event.target — элемент, на котором произошло событие.
// event.target.value — значение поля ввода.
// event.target.name — имя элемента (если задан атрибут name).
// event.type — тип события (click, change, mouseover и т.д.).
// event.currentTarget — элемент, на котором висит обработчик.
// event.clientX и event.clientY — координаты курсора при событиях мыши.
// event.key — клавиша, которую нажал пользователь (для событий клавиатуры).

// Почему React предлагает описывать события через onClick, а не addEventListener?
// React использует собственную систему обработки событий (Synthetic Events), которая:
// работает одинаково во всех браузерах;
// автоматически управляет обработчиками при создании и удалении компонентов;
// делает код более декларативным и понятным;
// хорошо интегрируется с состоянием (state) и жизненным циклом компонентов.
