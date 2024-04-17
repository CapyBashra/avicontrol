import { NavLink, Navigate, Outlet, useLocation } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client.js";
import { useEffect } from "react";
import IconoMenu from "../assets/menu.svg";
import IconoInventario from "../assets/inventario.svg";
import IconoAlimentacion from "../assets/alimentacion.svg";
import IconoSalud from "../assets/salud.svg";
import IconoReportes from "../assets/reportes.svg";
import IconoGuias from "../assets/guias.svg";

export default function DefaultLayout() {
    const { user, token, setUser, setToken, notification } = useStateContext();
    const location = useLocation();

    const getPageTitle = () => {
        switch (location.pathname) {
            case '/inventario':
                return 'Inventario';
            case '/inventario/gallinas':
                return 'Inventario de gallinas';
            case '/inventario/huevos':
                return 'Inventario de huevos';
            case '/inventario/alimentos':
                return 'Inventario de alimentos';
            case '/alimentacion':
                return 'Alimentación';
            case '/salud':
                return 'Salud';
            case '/reportes':
                return 'Reportes';
            case '/reportes/inventario':
                return 'Reporte de inventario';
            case '/reportes/alimentacion':
                return 'Reporte de alimentación';
            case '/reportes/salud':
                return 'Reporte de salud';
            case '/guias':
                return 'Guías';
            default:
                return '';
        }
    }

    if (!token) {
        return <Navigate to="/login" />
    }

    const onLogout = ev => {
        ev.preventDefault()

        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })
    }

    useEffect(() => {
        axiosClient.get('/user')
            .then(({ data }) => {
                setUser(data)
            })
    }, [])

    console.log(location.pathname)

    return (
        <div id="defaultLayout" className="app">
            <div className="app-lateral">
                <div className="app-lateral-cabecera">
                    <img className="app-lateral-cabera__icono app-icono" src={IconoMenu} alt="Icono de menú" />
                </div>
                <nav className="app-navegador">
                    <NavLink className={({ isActive }) => `app-navegador__enlace ${isActive ? 'app-navegador__enlace--activo' : ''}`} to='/inventario'>
                        <img className="app-navegador__enlace-icono" src={IconoInventario} alt="Icono de inventario" />
                        <span className="app-navegador__enlace-texto">Inventario</span>
                    </NavLink>
                    <NavLink className={({ isActive }) => `app-navegador__enlace ${isActive ? 'app-navegador__enlace--activo' : ''}`} to='/alimentacion'>
                        <img className="app-navegador__enlace-icono" src={IconoAlimentacion} alt="Icono de alimentacion" />
                        <span className="app-navegador__enlace-texto">Alimentación</span>
                    </NavLink>
                    <NavLink className={({ isActive }) => `app-navegador__enlace ${isActive ? 'app-navegador__enlace--activo' : ''}`} to='/salud'>
                        <img className="app-navegador__enlace-icono" src={IconoSalud} alt="Icono de salud" />
                        <span className="app-navegador__enlace-texto">Salud</span>
                    </NavLink>
                    <NavLink className={({ isActive }) => `app-navegador__enlace ${isActive ? 'app-navegador__enlace--activo' : ''}`} to='/reportes'>
                        <img className="app-navegador__enlace-icono" src={IconoReportes} alt="Icono de reportes" />
                        <span className="app-navegador__enlace-texto">Reportes</span>
                    </NavLink>
                    <NavLink className={({ isActive }) => `app-navegador__enlace ${isActive ? 'app-navegador__enlace--activo' : ''}`} to='/guias'>
                        <img className="app-navegador__enlace-icono" src={IconoGuias} alt="Icono de guias" />
                        <span className="app-navegador__enlace-texto">Guías</span>
                    </NavLink>
                </nav>
            </div>
            <div className="app-contenido">
                <header className="app-contenido-cabecera">
                    <div className="app-contenido-cabecera__titulo">{getPageTitle()}</div>
                    <div className="app-contenido-cabecera__cuenta">
                        {user.name} &nbsp; &nbsp;
                        <button onClick={onLogout} className="boton" href="#">Salir</button>
                    </div>
                </header>
                <main className="app-contenido-cuerpo">
                    <Outlet />
                </main>
                {notification &&
                    <div className="notification">
                        {notification}
                    </div>
                }
            </div>
        </div>
    )
}
