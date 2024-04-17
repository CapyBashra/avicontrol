import { useState } from "react";
import SaludMedicacion from "./SaludMedicacion";
import SaludVacunacion from "./SaludVacunacion";


export default function Salud() {

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
                >Vacunación</div>
                <div
                    onClick={() => handleButtonClick('B')}
                    className={`app-contenido-cuerpo-cabecera__derecha ${selectedChild === 'B' ? 'app-contenido-cuerpo-cabecera__derecha--activo' : ''}`}
                >Medicación</div>
            </div>
            <div className="app-contenido-cuerpo-contenido">
            {selectedChild === 'A' ? <SaludVacunacion /> : null}
            {selectedChild === 'B' ? <SaludMedicacion /> : null}
            </div>
        </div>
    );
}

