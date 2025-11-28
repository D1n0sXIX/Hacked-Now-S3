"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  Bell,
  CheckCircle2,
  Globe2,
  Lock,
  Mail,
  Palette,
  Phone,
  Settings,
  ShieldCheck,
  User,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const inputBase =
  "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#8db5ce]/60 focus:outline-none focus:border-[#009dff] focus:ring-1 focus:ring-[#009dff] transition-colors";

export default function PaginaUser() {
  const { user, isLoading, updateUser } = useAuth();
  const [feedback, setFeedback] = useState("");

  const [profileForm, setProfileForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    ubicacion: "",
    bio: "",
  });

  const [securityForm, setSecurityForm] = useState({
    dobleFactor: false,
    alertasInicioSesion: true,
  });

  const [notificationForm, setNotificationForm] = useState({
    incidencias: true,
    mensajes: true,
    boletin: false,
    alertasSeguridad: true,
  });

  const [preferencesForm, setPreferencesForm] = useState({
    idioma: "es",
    zonaHoraria: "Europe/Madrid",
    tema: "auto",
    resumenSemanal: true,
  });

  useEffect(() => {
    if (!user) return;

    /* eslint-disable react-hooks/set-state-in-effect */
    setProfileForm({
      nombre: user.nombre || "",
      email: user.email || "",
      telefono: user.telefono || "",
      ubicacion: user.ubicacion || "",
      bio: user.bio || "",
    });

    setSecurityForm({
      dobleFactor: user?.seguridad?.dobleFactor ?? false,
      alertasInicioSesion: user?.seguridad?.alertasInicioSesion ?? true,
    });

    setNotificationForm({
      incidencias: user?.notificaciones?.incidencias ?? true,
      mensajes: user?.notificaciones?.mensajes ?? true,
      boletin: user?.notificaciones?.boletin ?? false,
      alertasSeguridad: user?.notificaciones?.alertasSeguridad ?? true,
    });

    setPreferencesForm({
      idioma: user?.preferencias?.idioma || "es",
      zonaHoraria: user?.preferencias?.zonaHoraria || "Europe/Madrid",
      tema: user?.preferencias?.tema || "auto",
      resumenSemanal: user?.preferencias?.resumenSemanal ?? true,
    });
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [user]);

  const showFeedback = (message) => {
    setFeedback(message);
    setTimeout(() => setFeedback(""), 2500);
  };

  const handleProfileSubmit = (event) => {
    event.preventDefault();
    updateUser(profileForm);
    showFeedback("Perfil actualizado correctamente");
  };

  const handleSecuritySubmit = (event) => {
    event.preventDefault();
    updateUser({ seguridad: securityForm });
    showFeedback("Preferencias de seguridad guardadas");
  };

  const handleNotificationSubmit = (event) => {
    event.preventDefault();
    updateUser({ notificaciones: notificationForm });
    showFeedback("Notificaciones personalizadas");
  };

  const handlePreferencesSubmit = (event) => {
    event.preventDefault();
    updateUser({ preferencias: preferencesForm });
    showFeedback("Preferencias generales guardadas");
  };

  const toggleField = (setter, field) => {
    setter((previous) => ({
      ...previous,
      [field]: !previous[field],
    }));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-3 text-[#8db5ce]">
          <div className="h-3 w-3 rounded-full bg-[#009dff] animate-pulse" />
          <p>Cargando tus ajustes...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-[#172a36] border border-[#203b4b] rounded-2xl p-8 text-center shadow-xl">
          <div className="mx-auto w-16 h-16 rounded-full bg-[#009dff]/10 flex items-center justify-center mb-4">
            <Lock className="text-[#009dff]" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Acceso restringido</h1>
          <p className="text-[#8db5ce] text-sm mb-6">
            Inicia sesión para gestionar tu perfil, notificaciones y preferencias de la cuenta.
          </p>
          <Link
            href="/auth/login"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#009dff] text-black font-bold rounded-lg hover:bg-[#0088dd] transition-colors"
          >
            Ir a iniciar sesión
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <section className="bg-gradient-to-r from-[#172a36] to-[#0f1c24] border border-[#203b4b] rounded-2xl p-6 md:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={user.avatar}
                alt={user.nombre}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#009dff] object-cover"
              />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#8db5ce]">Perfil</p>
                <h1 className="text-2xl md:text-3xl font-bold text-white">{user.nombre}</h1>
                <p className="text-[#8db5ce] text-sm">{user.rol || "Miembro"} · {user.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full md:w-auto md:max-w-lg">
              {["Notificaciones activas", "Doble factor", "Resumen semanal"].map((label, index) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                >
                  <CheckCircle2 className="text-[#009dff]" size={18} />
                  <div>
                    <p className="text-sm text-white font-semibold">{label}</p>
                    <p className="text-xs text-[#8db5ce]">
                      {index === 0 && "Recibirás alertas de casos y mensajes"}
                      {index === 1 && "Protege tus accesos con 2FA"}
                      {index === 2 && "Actividad enviada cada lunes"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {feedback && (
            <div className="mt-6 bg-[#009dff]/10 border border-[#009dff]/30 text-white rounded-xl px-4 py-3 text-sm flex items-center gap-2">
              <ShieldCheck size={18} className="text-[#009dff]" />
              <span>{feedback}</span>
            </div>
          )}
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_1fr] gap-6">
          <section className="bg-[#172a36] border border-[#203b4b] rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <User className="text-[#009dff]" />
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#8db5ce]">Perfil</p>
                <h2 className="text-xl font-bold text-white">Datos básicos</h2>
              </div>
            </div>

            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white mb-2">Nombre completo</label>
                  <input
                    type="text"
                    value={profileForm.nombre}
                    onChange={(event) => setProfileForm({ ...profileForm, nombre: event.target.value })}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-sm text-white mb-2">Correo electrónico</label>
                  <input
                    type="email"
                    value={profileForm.email}
                    onChange={(event) => setProfileForm({ ...profileForm, email: event.target.value })}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-sm text-white mb-2">Teléfono</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 text-[#8db5ce]" size={16} />
                    <input
                      type="tel"
                      value={profileForm.telefono}
                      onChange={(event) => setProfileForm({ ...profileForm, telefono: event.target.value })}
                      className={`${inputBase} pl-10`}
                      placeholder="+34 600 123 456"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white mb-2">Ubicación</label>
                  <div className="relative">
                    <Globe2 className="absolute left-3 top-3.5 text-[#8db5ce]" size={16} />
                    <input
                      type="text"
                      value={profileForm.ubicacion}
                      onChange={(event) => setProfileForm({ ...profileForm, ubicacion: event.target.value })}
                      className={`${inputBase} pl-10`}
                      placeholder="Ciudad, país"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm text-white mb-2">Biografía</label>
                <textarea
                  rows="3"
                  value={profileForm.bio}
                  onChange={(event) => setProfileForm({ ...profileForm, bio: event.target.value })}
                  className={`${inputBase} min-h-[120px]`}
                  placeholder="Comparte tu experiencia o intereses en ciberseguridad"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="bg-[#009dff] text-black font-bold px-5 py-3 rounded-lg hover:bg-[#0088dd] transition-colors"
                >
                  Guardar cambios
                </button>
                <p className="text-xs text-[#8db5ce] flex items-center gap-2">
                  <Mail size={16} />
                  Usaremos tu email para avisarte de movimientos críticos en tu cuenta.
                </p>
              </div>
            </form>
          </section>

          <section className="bg-[#172a36] border border-[#203b4b] rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#009dff]" />
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#8db5ce]">Seguridad</p>
                <h2 className="text-xl font-bold text-white">Protección y accesos</h2>
              </div>
            </div>

            <form onSubmit={handleSecuritySubmit} className="space-y-4">
              {[{
                id: "dobleFactor",
                label: "Doble factor activado",
                description: "Añade una segunda capa de seguridad al iniciar sesión.",
              }, {
                id: "alertasInicioSesion",
                label: "Alertas de inicios sospechosos",
                description: "Recibe correos cuando detectemos un acceso inusual.",
              }].map((setting) => (
                <div
                  key={setting.id}
                  className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <div>
                    <p className="text-white font-semibold">{setting.label}</p>
                    <p className="text-sm text-[#8db5ce]">{setting.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleField(setSecurityForm, setting.id)}
                    className={`w-12 h-6 rounded-full border transition-all duration-200 ${
                      securityForm[setting.id]
                        ? "bg-[#009dff] border-[#009dff]"
                        : "bg-white/10 border-white/20"
                    }`}
                  >
                    <span
                      className={`block h-5 w-5 bg-white rounded-full shadow transform transition-transform duration-200 ${
                        securityForm[setting.id] ? "translate-x-6" : "translate-x-0.5"
                      }`}
                    />
                  </button>
                </div>
              ))}

              <div className="bg-[#0f1c24] border border-white/10 rounded-xl p-4 flex items-start gap-3">
                <AlertTriangle className="text-[#f6ad55] mt-1" />
                <div>
                  <p className="text-sm text-white font-semibold">Consejo rápido</p>
                  <p className="text-sm text-[#8db5ce]">
                    Actualiza tu contraseña cada 90 días y evita reutilizar claves en otros servicios.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-white/10 text-white font-semibold px-5 py-3 rounded-lg border border-white/20 hover:border-[#009dff] hover:text-[#009dff] transition-colors"
              >
                Guardar seguridad
              </button>
            </form>
          </section>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <section className="bg-[#172a36] border border-[#203b4b] rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <Bell className="text-[#009dff]" />
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#8db5ce]">Alertas</p>
                <h2 className="text-xl font-bold text-white">Notificaciones</h2>
              </div>
            </div>

            <form onSubmit={handleNotificationSubmit} className="space-y-4">
              {[{
                id: "incidencias",
                label: "Actividad en mis casos",
                description: "Avisos inmediatos cuando alguien responda o etiquete mi reporte.",
              }, {
                id: "mensajes",
                label: "Mensajes directos",
                description: "Permitir mensajes privados de expertos verificados.",
              }, {
                id: "boletin",
                label: "Boletín de ciberseguridad",
                description: "Resumen mensual con tendencias y alertas destacadas.",
              }, {
                id: "alertasSeguridad",
                label: "Alertas críticas",
                description: "Notificaciones prioritarias sobre amenazas activas.",
              }].map((option) => (
                <div
                  key={option.id}
                  className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <div>
                    <p className="text-white font-semibold">{option.label}</p>
                    <p className="text-sm text-[#8db5ce]">{option.description}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notificationForm[option.id]}
                    onChange={() => toggleField(setNotificationForm, option.id)}
                    className="h-5 w-5 rounded border-white/20 bg-[#0f1c24] text-[#009dff] focus:ring-0"
                  />
                </div>
              ))}

              <div className="flex items-center justify-between bg-[#0f1c24] border border-white/10 rounded-xl px-4 py-3">
                <div>
                  <p className="text-white font-semibold">Modo silencioso</p>
                  <p className="text-sm text-[#8db5ce]">Pausa las notificaciones durante 12 horas.</p>
                </div>
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg border border-white/20 text-sm text-white hover:border-[#009dff]"
                >
                  Activar
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-[#009dff] text-black font-bold px-5 py-3 rounded-lg hover:bg-[#0088dd] transition-colors"
              >
                Guardar notificaciones
              </button>
            </form>
          </section>

          <section className="bg-[#172a36] border border-[#203b4b] rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <Settings className="text-[#009dff]" />
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#8db5ce]">Preferencias</p>
                <h2 className="text-xl font-bold text-white">Idioma y apariencia</h2>
              </div>
            </div>

            <form onSubmit={handlePreferencesSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white mb-2">Idioma</label>
                  <select
                    value={preferencesForm.idioma}
                    onChange={(event) => setPreferencesForm({ ...preferencesForm, idioma: event.target.value })}
                    className={inputBase}
                  >
                    <option value="es">Español</option>
                    <option value="en">Inglés</option>
                    <option value="fr">Francés</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white mb-2">Zona horaria</label>
                  <select
                    value={preferencesForm.zonaHoraria}
                    onChange={(event) => setPreferencesForm({ ...preferencesForm, zonaHoraria: event.target.value })}
                    className={inputBase}
                  >
                    <option value="Europe/Madrid">Europe/Madrid</option>
                    <option value="America/Mexico_City">America/Mexico_City</option>
                    <option value="America/Bogota">America/Bogota</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white mb-2">Tema</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[{ value: "auto", label: "Auto", icon: Palette }, { value: "light", label: "Claro", icon: SunIcon }, { value: "dark", label: "Oscuro", icon: MoonIcon }].map((theme) => (
                      <button
                        key={theme.value}
                        type="button"
                        onClick={() => setPreferencesForm({ ...preferencesForm, tema: theme.value })}
                        className={`flex flex-col items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors ${
                          preferencesForm.tema === theme.value
                            ? "border-[#009dff] text-white bg-[#009dff]/10"
                            : "border-white/20 text-[#8db5ce] hover:border-white/40"
                        }`}
                      >
                        <theme.icon size={18} />
                        {theme.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white mb-2">Accesibilidad</label>
                  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                    <div>
                      <p className="text-white font-semibold">Resúmenes semanales</p>
                      <p className="text-sm text-[#8db5ce]">Informe de actividad y consejos rápidos.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleField(setPreferencesForm, "resumenSemanal")}
                      className={`w-12 h-6 rounded-full border transition-all duration-200 ${
                        preferencesForm.resumenSemanal
                          ? "bg-[#009dff] border-[#009dff]"
                          : "bg-white/10 border-white/20"
                      }`}
                    >
                      <span
                        className={`block h-5 w-5 bg-white rounded-full shadow transform transition-transform duration-200 ${
                          preferencesForm.resumenSemanal ? "translate-x-6" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-[#0f1c24] border border-white/10 rounded-xl p-4 flex items-start gap-3">
                <Palette className="text-[#009dff]" />
                <div>
                  <p className="text-sm text-white font-semibold">Personaliza tu experiencia</p>
                  <p className="text-sm text-[#8db5ce]">
                    Ajusta el idioma y el tema para adaptarse a tus necesidades. Estos cambios se sincronizan con tu perfil.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-white/10 text-white font-semibold px-5 py-3 rounded-lg border border-white/20 hover:border-[#009dff] hover:text-[#009dff] transition-colors"
              >
                Guardar preferencias
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" {...props}>
      <path
        d="M12 4V2M12 22v-2M4 12H2m20 0h-2M18.364 5.636 19.778 4.222M4.222 19.778 5.636 18.364M18.364 18.364l1.414 1.414M4.222 4.222 5.636 5.636M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" {...props}>
      <path
        d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 0 0 12 17a7 7 0 0 0 9-4.21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}