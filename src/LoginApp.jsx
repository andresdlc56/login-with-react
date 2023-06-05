import { AuthProvider } from "./auth/context";
import { AppRouter } from "./router/AppRouter";

export const LoginApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}
