import { Route, Routes } from "react-router-dom";


//Components
import { LoginPage } from "../auth";


//Routes 
import { PedidosRoutes } from "../pedidos";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";



export const AppRouter = () => {
    return (
        <Routes>

            <Route path="/login" element={
                <PublicRoute>
                    <LoginPage />
                </PublicRoute>
            } />

            {/* <Route path="/login" element={ <LoginPage /> } /> */}

            <Route path="/*" element={
                <PrivateRoute>
                    <PedidosRoutes />
                </PrivateRoute>
            } />

           {/*<Route path="/*" element={ <PedidosRoutes /> } />*/}
        </Routes>
    )
}
