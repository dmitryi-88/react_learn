function FruitList({ fruit_list }) {
    return (
        <ul style={{ padding: "20px", listStyle: "square" }}>
            {fruit_list.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    );
}

function AppFruit() {
    const fruits = ["apple", "banana", "orange"];

    return (
        <div className="fruitList">
            <h2>Домашнее задание: Рендеринг списков</h2>
            <FruitList fruit_list={fruits} />
        </div>
    );
}

export default AppFruit;
