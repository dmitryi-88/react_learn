import UserCard from "./home_task_13_UserCard";

function AppUserCard2() {
    const users = [
        {
            name: "Alice",
            age: 25,
            email: "example@mail.com",
        },
        {
            name: "Bob",
            age: 20,
            email: "example2@mail.com",
        },
        {
            name: "Charlie",
            age: 30,
            email: "example3@mail.com",
        },
    ];

    return (
        <>
            {users.map((user) => (
                <UserCard
                    key={user.name}
                    name={user.name}
                    age={user.age}
                    email={user.email}
                />
            ))}
        </>
    );
}

export default AppUserCard2;
