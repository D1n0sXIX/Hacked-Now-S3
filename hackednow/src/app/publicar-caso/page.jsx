
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
    // Validar que los campos requeridos estén completos
    if (!titulo.trim()) {
      alert('Por favor, ingresa un título para el caso');
      return;
    }
    
    if (!descripcion.trim()) {
      alert('Por favor, describe el caso');
      return;
    }
    
    if (!categoriaSeleccionada) {
      alert('Por favor, selecciona una categoría');
      return;
    }

    try {
      // Crear el nuevo caso
      const nuevoCaso = {
        id: Date.now().toString(),
        titulo: titulo.trim(),
        descripcion: descripcion.trim(),
        categoria: categoriaSeleccionada,
        etiquetas: etiquetas,
        compartidoEnForo: esAnonimo,
        fechaCreacion: new Date().toISOString(),
        estado: 'publicado'
      };

      // Obtener casos existentes del localStorage
      const casosGuardados = localStorage.getItem('casos');
      const casos = casosGuardados ? JSON.parse(casosGuardados) : [];

      // Agregar el nuevo caso
      casos.push(nuevoCaso);

      // Guardar en localStorage
      localStorage.setItem('casos', JSON.stringify(casos));

      alert('¡Caso publicado con éxito!');
      
      // Limpiar formulario
      setTitulo('');
      setDescripcion('');
      setCategoriaSeleccionada(null);
      setEtiquetas([]);
      setEsAnonimo(false);

    } catch (error) {
      console.error('Error:', error);
      alert('Error al guardar el caso');
    }
  };

  const handleGuardarBorrador = () => {
    // No funciona
    console.log("Boton guardar borrador (no funcional)");
  };

  return (
    <div className="publicar-caso-page">
      <main className="publicar-caso-container">
        <h3>Publica tu Caso de Ciberseguridad</h3>
        
        {/* Zona de texto y multimedia */}
        <div className="publicar-grid-layout">
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
