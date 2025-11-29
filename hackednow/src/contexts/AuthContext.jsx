"use client"

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar usuario solo en el cliente
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUser(JSON.parse(storedUser)); //WARNING DE OPTIZiMACION , IGNORAR POR AHORA
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const updateUser = (updates) => {
    setUser((previousUser) => {
      const currentUser = previousUser || {};
      const mergedUser = {
        ...currentUser,
        ...updates,
        notificaciones: {
          ...(currentUser.notificaciones || {}),
          ...(updates?.notificaciones || {}),
        },
        preferencias: {
          ...(currentUser.preferencias || {}),
          ...(updates?.preferencias || {}),
        },
        seguridad: {
          ...(currentUser.seguridad || {}),
          ...(updates?.seguridad || {}),
        },
      };

      localStorage.setItem('user', JSON.stringify(mergedUser));
      return mergedUser;
    });
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
}