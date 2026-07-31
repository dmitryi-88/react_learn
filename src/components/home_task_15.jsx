import { useReducer } from "react";


const changeUserData = (state, action) => {
    const isValidName = (name) => {
        return name.trim() !== "";
    };

    switch (action.type) {
        case "CHANGE_NAME":
            return isValidName(action.payload.newName)
                ? state.map((user) =>
                      user.id === action.payload.id
                          ? {
                                ...user,
                                name: action.payload.newName,
                            }
                          : user,
                  )
                : state;

        case "CHANGE_IS_ACTIVE":
            return state.map((user) =>
                user.id === action.payload.id
                    ? { ...user, isActive: !user.isActive }
                    : user,
            );

        case "DELETE":
            return state.filter((user) => user.id !== action.payload.id);

        default:
            return state;
    }
};

function Users({ users }) {
    const [usersState, dispatch] = useReducer(changeUserData, users);

    return (
        <>
            {usersState.map((user) => (
                <div
                    key={user.id}
                    className={`cardUser ${user.isActive ? "active" : ""}`}
                >
                    <h1>Имя: {user.name}</h1>

                    <form
                        className="nameForm"
                        onSubmit={(e) => {
                            e.preventDefault();

                            const formData = new FormData(e.target);

                            dispatch({
                                type: "CHANGE_NAME",
                                payload: {
                                    id: user.id,
                                    newName: formData.get("name"),
                                },
                            });
                        }}
                    >
                        <input
                            id="big"
                            name="name"
                            type="text"
                            placeholder="Новое имя"
                        />
                        <button id="small" type="submit">
                            Сохранить
                        </button>
                    </form>

                    <div className="actions">
                        <button
                            className={`activeBtn ${user.isActive ? "active" : ""}`}
                            id="big"
                            onClick={() => {
                                dispatch({
                                    type: "CHANGE_IS_ACTIVE",
                                    payload: {
                                        id: user.id,
                                    },
                                });
                            }}
                        >
                            {user.isActive
                                ? "Сделать не активным"
                                : "Сделать активным"}
                        </button>
                        <button
                            id="small"
                            onClick={() => {
                                dispatch({
                                    type: "DELETE",
                                    payload: {
                                        id: user.id,
                                    },
                                });
                            }}
                        >
                            Удалить
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}

function AppUsersList() {
    const usersList = [
        {
            id: 1,
            name: "Ivan",
            isActive: true,
        },
        {
            id: 2,
            name: "Maria",
            isActive: false,
        },
        {
            id: 3,
            name: "Alexei",
            isActive: true,
        },
        {
            id: 4,
            name: "Oleg",
            isActive: false,
        },
    ];

    return (
        <div className="profiles">
            <Users users={usersList} />
        </div>
    );
}

export default AppUsersList;
