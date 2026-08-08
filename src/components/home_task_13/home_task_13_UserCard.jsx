function UserCard({ name, age, email }) {
    return (
        <div
            style={{
                width: "300px",
                height: "150px",
                backgroundColor: "lightblue",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                borderRadius: "10px",
            }}
        >
            <h2>{name}</h2>
            <span>{age}</span>
            <span>{email}</span>
        </div>
    );
}

export default UserCard;
