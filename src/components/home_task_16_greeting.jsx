import { useContext } from "react";
import { AuthContext } from "./home_task_16_context";

function Greeting() {
    const { user } = useContext(AuthContext);

    return (
        <>
            <p>Привет, {user}!</p>
        </>
    );
}

export default Greeting