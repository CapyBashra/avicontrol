import { Link } from "react-router-dom";
import IconoAgregar from "../assets/agregar.svg"
import IconoMenuVertical from "../assets/menuVertical.svg";

export default function SaludMedicacion() {




    return (
        <div>
            <div className="contenedor-tarjetas">
                <div className="contenedor-tarjeta">
                    <Link to="/inventario/gallinas" className="enlace-sin-decorado">
                        <div className="tarjeta-registro">
                            <h3 className="tarjeta-registro__titulo">Sinusitis infecciosa</h3>
                            <div className="tarjeta-registro__contenedor-informacion">
                                <p className="tarjeta-registro__informacion tarjeta-registro__informacion--resaltada">Rango: Lote 2</p>
                                <p className="tarjeta-registro__informacion tarjeta-registro__informacion--resaltada">Medicina/Antibiótico: Tiambulab</p>
                                <p className="tarjeta-registro__informacion tarjeta-registro__informacion--resaltada">Cantidad medicada: 50</p>
                                <p className="tarjeta-registro__informacion">16 de Mayo 2023</p>
                            </div>
                            <div className="tarjeta-registro__icono">
                                <img className="app-icono icono-menu-vertical" src={IconoMenuVertical} alt="Menu vertical" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="app-icono icono-agregar">
                <img className="app-icono-agregar__icono" src={IconoAgregar} alt="Icono para agregar un registro" />
            </div>
        </div>
    );
}
