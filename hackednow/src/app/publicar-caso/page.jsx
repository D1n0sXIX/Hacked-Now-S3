
"use client";

import { useState } from "react";
import InputsTextoCaso from "@/components/Publicar_Caso/InputsTextoCaso";
import InputMultimediaCaso from "@/components/Publicar_Caso/InputMultimediaCaso";
import SelectorCategorias from "@/components/Publicar_Caso/SelectorCategorias";
import InputEtiquetas from "@/components/Publicar_Caso/InputEtiquetas";
import SwitchAnonimo from "@/components/Publicar_Caso/SwitchAnonimo";
import BotonesAccion from "@/components/Publicar_Caso/BotonesAccion";
import "./publicar-caso.css";

export default function Publicarcaso() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [etiquetas, setEtiquetas] = useState([]);
  const [esAnonimo, setEsAnonimo] = useState(false);

  const handlePublicar = () => {
    // Lógica para publicar el caso (a implementar)
    console.log("Publicando caso:", {
      titulo,
      descripcion,
      categoria: categoriaSeleccionada,
      etiquetas,
      esAnonimo
    });
  };

  const handleGuardarBorrador = () => {
    // No funciona
    console.log("Boton guardar borrador (no funcional)");
  };

  return (
    <div className="publicar-caso-page">
      <main className="max-w-4xl mx-auto publicar-caso-container">
        <h3 className="text-3xl font-bold text-foreground mb-8">Publica tu Caso de Ciberseguridad</h3>
        
        {/* Zona de texto y multimedia */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <InputsTextoCaso 
            titulo={titulo}
            setTitulo={setTitulo}
            descripcion={descripcion}
            setDescripcion={setDescripcion}
          />
          <InputMultimediaCaso />
        </div>
      
        {/* Zona de categorias */}
        <SelectorCategorias 
          categoriaSeleccionada={categoriaSeleccionada}
          setCategoriaSeleccionada={setCategoriaSeleccionada}
        />
        
        {/* Zona de etiquetas adicionales */}
        <InputEtiquetas 
          etiquetas={etiquetas}
          setEtiquetas={setEtiquetas}
        />
        
        {/* Switch Anónimo */}
        <SwitchAnonimo 
          esAnonimo={esAnonimo}
          setEsAnonimo={setEsAnonimo}
        />
        
        {/* Botones de Acción */}
        <BotonesAccion 
          onPublicar={handlePublicar}
          onGuardarBorrador={handleGuardarBorrador}
        />
      </main>
    </div>
  );
}
