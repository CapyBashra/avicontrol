import { Link } from "react-router-dom";
import IconoInventario from "../assets/inventario.svg";
import IconoAlimentacion from "../assets/alimentacion.svg";
import IconoSalud from "../assets/salud.svg";

export default function Reportes() {
    return (
        <div>
            <div className="contenedor-tarjetas">
                <div className="contenedor-tarjeta">
                    <Link to="/reportes/inventario" className="enlace-sin-decorado">
                        <div className="tarjeta-reportes">
                            <div className="tarjeta-reportes__icono">
                                <img className="app-icono icono-reportes" src={IconoInventario} alt="Icono inventario" />
                            </div>
                            <h3 className="tarjeta-reportes__titulo">Reporte de Inventario</h3>
                        </div>
                    </Link >
                </div>
                <div className="contenedor-tarjeta">
                    <Link to="/reportes/alimentacion" className="enlace-sin-decorado">
                        <div className="tarjeta-reportes">
                            <div className="tarjeta-reportes__icono">
                                <img className="app-icono icono-reportes" src={IconoAlimentacion} alt="Icono alimentación" />
                            </div>
                            <h3 className="tarjeta-reportes__titulo">Reporte de Alimentación</h3>
                        </div>
                    </Link >
                </div>
                <div className="contenedor-tarjeta">
                    <Link to="/reportes/salud" className="enlace-sin-decorado">
                        <div className="tarjeta-reportes">
                            <div className="tarjeta-reportes__icono">
                                <img className="app-icono icono-reportes" src={IconoSalud} alt="Icono salud" />
                            </div>
                            <h3 className="tarjeta-reportes__titulo">Reporte de Salud</h3>
                        </div>
                    </Link >
                </div>
            </div>
        </div>
    )
}