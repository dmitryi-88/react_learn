import { useState } from "react";

function UserCard({ name, age, color }) {
    console.log("Ререндер UserCard");

    return (
        <>
            <div
                className="card"
                style={{
                    width: "300px",
                    height: "100px",
                    backgroundColor: color,
                }}
            >
                <h3 style={{ paddingLeft: "10px" }}>{name}</h3>
                <h4 style={{ paddingLeft: "10px" }}>{age}</h4>
            </div>
        </>
    );
}

function AppUserCard() {
    const colors = ["red", "green", "blue", "yellow", "gray", "orange"];

    const [age, setAge] = useState(27);
    const [color, setColor] = useState("gray");

    const changeColor = () => {
        const newColors = colors.filter((elem) => elem !== color);
        return newColors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <>
            <button
                style={{ width: "300px" }}
                onClick={() => {
                    setAge(age + 1);
                }}
            >
                Изменить возраст
            </button>
            <button
                style={{ width: "300px" }}
                onClick={() => {
                    setColor(changeColor());
                }}
            >
                Изменить цвет карточки
            </button>
            <UserCard name={"Dima Egorov"} age={age} color={color} />
        </>
    );
}

export default AppUserCard;
