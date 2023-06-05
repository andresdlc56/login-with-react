import { Navigate, Route, Routes } from "react-router-dom";


//Components
import { Navbar } from "../../ui";
import { DashboardPage } from "../pages";


export const PedidosRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="/dashboard" element={ <DashboardPage /> } />

                    <Route path="/*" element={ <Navigate to="/dashboard" /> } />
                </Routes>
            </div>
        </>
    )
}
