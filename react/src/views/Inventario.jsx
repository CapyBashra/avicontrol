import PolyArtGallina from "../assets/polyArtGallina.svg";
import PolyArtHuevos from "../assets/polyArtHuevos.svg";
import PolyArtAlimento from '../assets/polyArtAlimento.svg';
import { Link } from "react-router-dom";


export default function Inventario() {
    return (
        <div className="contenedor-tarjetas">
            <div className="contenedor-tarjeta">
                <Link to="/inventario/gallinas" className="enlace-sin-decorado">
                    <div className="tarjeta-inventario">
                        <h3 className="tarjeta-inventario__titulo">Gallinas</h3>
                        <div className="tarjeta-inventario__contenedor-informacion">
                            <p className="tarjeta-inventario__informacion">Cantidad de lotes: 2</p>
                            <p className="tarjeta-inventario__informacion">Cantidad gallinas de engorde: 90</p>
                            <p className="tarjeta-inventario__informacion">Cantidad gallinas de postura: 50</p>
                            <p className="tarjeta-inventario__informacion">Total gallinas: 140</p>
                        </div>
                        <div className="tarjeta-inventario__ilustracion">
                            <img src={PolyArtGallina} alt="icono gallina en arte de polígonos"/>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="contenedor-tarjeta">
                <Link to="/inventario/huevos" className="enlace-sin-decorado">
                    <div className="tarjeta-inventario">
                        <h3 className="tarjeta-inventario__titulo">Huevos</h3>
                        <div className="tarjeta-inventario__contenedor-informacion">
                            <p className="tarjeta-inventario__informacion">Recolectados hoy: 0</p>
                            <p className="tarjeta-inventario__informacion">Recolectados esta semana: 45</p>
                            <p className="tarjeta-inventario__informacion">Recolectados este mes: 45</p>
                            <p className="tarjeta-inventario__informacion">Recolectados este año: 45</p>
                        </div>
                        <div className="tarjeta-inventario__ilustracion">
                            <img src={PolyArtHuevos} alt="icono huevos en arte de polígonos"/>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="contenedor-tarjeta">
                <Link to="/inventario/alimentos" className="enlace-sin-decorado">
                    <div className="tarjeta-inventario">
                        <h3 className="tarjeta-inventario__titulo">Alimentos</h3>
                        <div className="tarjeta-inventario__contenedor-informacion">
                            <p className="tarjeta-inventario__informacion">Añadido hoy  (Kg): 0</p>
                            <p className="tarjeta-inventario__informacion">Añadido esta semana  (Kg): 3</p>
                            <p className="tarjeta-inventario__informacion">Añadido este mes  (Kg): 3</p>
                            <p className="tarjeta-inventario__informacion">Añadido este año  (Kg): 3</p>
                        </div>
                        <div className="tarjeta-inventario__ilustracion">
                            <img src={PolyArtAlimento} alt="icono alimento para gallina en arte de polígonos"/>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}