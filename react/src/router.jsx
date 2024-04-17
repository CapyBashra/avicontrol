import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Signup from "./views/Signup";
import Users from "./views/Users";
import UserForm from "./views/UserForm";
import Inventario from "./views/Inventario.jsx";
import Alimentacion from "./views/Alimentacion.jsx";
import Salud from "./views/Salud.jsx";
import Reportes from "./views/Reportes.jsx";
import Guias from "./views/Guias.jsx";
import InventarioGallinas from "./views/InventarioGallinas.jsx";
import InventarioHuevos from "./views/InventarioHuevos.jsx";
import InventarioAlimentos from "./views/InventarioAlimentos.jsx";
import ReportesInventario from "./views/ReportesInventario.jsx";
import ReportesAlimentacion from "./views/ReportesAlimentacion.jsx";
import ReportesSalud from "./views/ReportesSalud.jsx";


const router = createBrowserRouter([

    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/inventario" />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/users/new',
                element: <UserForm key="userCreate" />
            },
            {
                path: '/users/:id',
                element: <UserForm key="userUpdate" />
            },
            {
                path: '/inventario',
                element: <Inventario />
            },
            {
                path: '/inventario/gallinas',
                element: <InventarioGallinas />
            },
            {
                path: '/inventario/huevos',
                element: <InventarioHuevos />
            },
            {
                path: '/inventario/alimentos',
                element: <InventarioAlimentos />
            },
            {
                path: '/alimentacion',
                element: <Alimentacion />
            },
            {
                path: '/salud',
                element: <Salud />,
            },
            {
                path: '/reportes',
                element: <Reportes />
            },
            {
                path: '/reportes/inventario',
                element: <ReportesInventario />
            },
            {
                path: '/reportes/alimentacion',
                element: <ReportesAlimentacion />
            },
            {
                path: '/reportes/salud',
                element: <ReportesSalud />
            },
            {
                path: '/guias',
                element: <Guias />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
]);

export default router;