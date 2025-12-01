"use client";

import { useEffect, useState } from "react";
import TarjetaCaso from "./TarjetaCaso";
import casosData from "@/data/casos.json";
import "@/app/foro/lista-casos.css";

export default function ListaCasos() {
  const [todosLosCasos, setTodosLosCasos] = useState([]);

  useEffect(() => {
    // Obtener casos del localStorage
    const casosGuardados = localStorage.getItem('casos');
    // Si no hay casos en localStorage, usar un array vacío
    const casosLocalStorage = casosGuardados ? JSON.parse(casosGuardados) : [];
    
    // Filtrar solo los casos que están compartidos en el foro (no anónimos)
    const casosPublicos = casosLocalStorage.filter(caso => caso.compartidoEnForo === true);
    
    // Combinar: primero los del localStorage, luego los del JSON
    const casosCombinados = [...casosPublicos, ...casosData];
    
    setTodosLosCasos(casosCombinados);
  }, []);

  return (
    <div className="lista-casos">
      <h2>Lista de Casos</h2>
      <div className="casos-grid">
        {todosLosCasos.map((caso) => (
          <TarjetaCaso key={caso.id} caso={caso} />
        ))}
      </div>
    </div>
  );
}
