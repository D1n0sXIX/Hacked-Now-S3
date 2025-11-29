import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Ruta al archivo JSON
const casosFilePath = path.join(process.cwd(), 'src', 'data', 'casos.json');

// GET - Obtener todos los casos
export async function GET() {
  try {
    const fileContents = fs.readFileSync(casosFilePath, 'utf8');
    const casos = JSON.parse(fileContents);
    return NextResponse.json(casos);
  } catch (error) {
    return NextResponse.json([], { status: 200 });
  }
}

// POST - Crear un nuevo caso
export async function POST(request) {
  try {
    const nuevoCaso = await request.json();
    
    // Leer casos existentes
    let casos = [];
    try {
      const fileContents = fs.readFileSync(casosFilePath, 'utf8');
      casos = JSON.parse(fileContents);
    } catch (error) {
      casos = [];
    }
    
    // Agregar ID y fecha al nuevo caso
    const casoConMetadata = {
      id: Date.now().toString(),
      ...nuevoCaso,
      fechaCreacion: new Date().toISOString(),
      estado: 'publicado'
    };
    
    // Agregar el nuevo caso
    casos.push(casoConMetadata);
    
    // Guardar en el archivo
    fs.writeFileSync(casosFilePath, JSON.stringify(casos, null, 2), 'utf8');
    
    return NextResponse.json({ 
      success: true, 
      caso: casoConMetadata 
    }, { status: 201 });
    
  } catch (error) {
    console.error('Error al guardar el caso:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error al guardar el caso' 
    }, { status: 500 });
  }
}
