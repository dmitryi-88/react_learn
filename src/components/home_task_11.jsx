import { useState } from "react";

function UserStatus({ isLoggedIn }) {
    isLoggedIn && console.log("Пользователь в системе!");

    return isLoggedIn ? (
        <>
            <h1>Добро пожаловать, пользователь!</h1>
        </>
    ) : (
        <>
            <h1>Войдите в систему!</h1>
        </>
    );
}

function AppUserStatus() {
    const [auth, setAuth] = useState(false);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <UserStatus isLoggedIn={auth} />
            <button
                onClick={() => {
                    setAuth((prev) => !prev);
                }}
            >
                {auth ? "Выйти" : "Войти"}
            </button>
        </div>
    );
}

export default AppUserStatus;
