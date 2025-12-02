import React, { useEffect, useRef, useState } from "react";

export default function StatsSection() {
  const stats = [
    { percentage: 85, label: "Casos Resueltos por la Comunidad", color: "#009dff" },
    { percentage: 60, label: "Ahorro vs. Consultoría Tradicional", color: "#00ffaa" },
    { percentage: 92, label: "Satisfacción con Expertos Verificados", color: "#ff0099" },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Resultados <span className="text-[#009dff]">Medibles</span>
          </h2>
          <p className="text-[#E0E0E0]/80 text-lg">Datos reales de nuestra comunidad</p>
        </div>

        <div className="flex flex-wrap justify-center gap-16 md:gap-24">
          {stats.map((stat, index) => (
            <AnimatedDonut
              key={index}
              percentage={stat.percentage}
              label={stat.label}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AnimatedDonut({ percentage, label, color }) {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    });

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = parseInt(percentage);
      const duration = 2000;
      const incrementTime = duration / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, percentage]);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = isVisible
    ? circumference - (percentage / 100) * circumference
    : circumference;

  return (
    <div ref={domRef} className="flex flex-col items-center group cursor-default">
      <div className="relative w-44 h-44 transition-transform duration-500 hover:scale-110">
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-30 transition-opacity duration-1000"
          style={{ backgroundColor: isVisible ? color : "transparent" }}
        />

        <svg className="w-full h-full transform -rotate-90">
          <circle cx="88" cy="88" r={radius} stroke="#172a36" strokeWidth="14" fill="transparent" />
          <circle
            cx="88"
            cy="88"
            r={radius}
            stroke={color}
            strokeWidth="14"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all ease-out"
            style={{ transitionDuration: "2000ms" }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl font-bold text-white tabular-nums drop-shadow-lg">
            {count}%
          </span>
        </div>
      </div>

      <p className="mt-8 text-[#E0E0E0] font-medium text-center max-w-[220px] group-hover:text-white transition-colors leading-relaxed">
        {label}
      </p>
    </div>
  );
}