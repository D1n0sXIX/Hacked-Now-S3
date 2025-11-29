// Hook personalizado para manejar casos con LocalStorage

export const useCasos = () => {
  // Obtener todos los casos
  const getCasos = () => {
    if (typeof window === 'undefined') return [];
    const casosGuardados = localStorage.getItem('casos');
    return casosGuardados ? JSON.parse(casosGuardados) : [];
  };

  // Guardar un nuevo caso
  const saveCaso = (caso) => {
    const casos = getCasos();
    const nuevoCaso = {
      id: Date.now().toString(),
      ...caso,
      fechaCreacion: new Date().toISOString(),
      estado: 'publicado'
    };
    casos.push(nuevoCaso);
    localStorage.setItem('casos', JSON.stringify(casos));
    return nuevoCaso;
  };

  // Obtener un caso por ID
  const getCasoById = (id) => {
    const casos = getCasos();
    return casos.find(caso => caso.id === id);
  };

  // Eliminar un caso
  const deleteCaso = (id) => {
    const casos = getCasos();
    const casosFiltrados = casos.filter(caso => caso.id !== id);
    localStorage.setItem('casos', JSON.stringify(casosFiltrados));
  };

  // Inicializar con casos de ejemplo (opcional)
  const initCasosEjemplo = () => {
    const casos = getCasos();
    if (casos.length === 0) {
      const casosEjemplo = [
        {
          id: "1",
          titulo: "Intento de phishing vía correo corporativo",
          descripcion: "Recibí un correo que parecía ser de IT solicitando credenciales...",
          categoria: "phishing",
          etiquetas: ["correo", "corporativo", "credenciales"],
          compartidoEnForo: true,
          fechaCreacion: new Date(Date.now() - 86400000).toISOString(),
          estado: "publicado"
        },
        {
          id: "2",
          titulo: "Malware detectado en USB",
          descripcion: "Al conectar una USB encontrada, el antivirus detectó malware...",
          categoria: "malware",
          etiquetas: ["usb", "antivirus"],
          compartidoEnForo: true,
          fechaCreacion: new Date(Date.now() - 172800000).toISOString(),
          estado: "publicado"
        }
      ];
      localStorage.setItem('casos', JSON.stringify(casosEjemplo));
      return casosEjemplo;
    }
    return casos;
  };

  return {
    getCasos,
    saveCaso,
    getCasoById,
    deleteCaso,
    initCasosEjemplo
  };
};
