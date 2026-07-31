import { AuthProvider } from "./home_task_16_context";
import LoginPanel from "./home_task_16_loginPanel";

function AppAuthUser() {
    return (
        <AuthProvider>
            <h1>Главная страница</h1>
            <LoginPanel />
        </AuthProvider>
    );
}

export default AppAuthUser;
