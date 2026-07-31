function ButtonWithCallback({ onButtonClick }) {
    return (
        <>
            <button onClick={() => onButtonClick("Кнопка была нажата!")}>
                Нажми меня
            </button>
        </>
    );
}

function AppButtonWithCallback() {
    const handleClick = (message) => {
        console.log(`Сообщение из дочернего компонента: ${message}`);
    };

    return (
        <div>
            <ButtonWithCallback onButtonClick={handleClick} />
        </div>
    );
}

export default AppButtonWithCallback;
