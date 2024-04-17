import { useState } from "react";
import InventarioGallinasAdicion from "./InventarioGallinasAdicion";
import InventarioGallinasReduccion from "./InventarioGallinasReduccion";


export default function InventarioGallinas() {
    const [selectedChild, setSelectedChild] = useState('A');
      
        const handleButtonClick = (child) => {
          setSelectedChild(child);
        };
      
        

    return (
        <div>
            <div className="app-contenido-cuerpo-cabecera">
                <div
                    onClick={() => handleButtonClick('A')}
                    className={`app-contenido-cuerpo-cabecera__izquierda ${selectedChild === 'A' ? 'app-contenido-cuerpo-cabecera__izquierda--activo' : ''}`}
                >Adiciones</div>
                <div
                    onClick={() => handleButtonClick('B')}
                    className={`app-contenido-cuerpo-cabecera__derecha ${selectedChild === 'B' ? 'app-contenido-cuerpo-cabecera__derecha--activo' : ''}`}
                >Reducciones</div>
            </div>
            <div className="app-contenido-cuerpo-contenido">
            {selectedChild === 'A' ? <InventarioGallinasAdicion   /> : null}
            {selectedChild === 'B' ? <InventarioGallinasReduccion /> : null}
            </div>
        </div>
    );
}