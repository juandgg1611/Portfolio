'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { mes: 'Ene', sinWeb: 12, conWeb: 14 },
  { mes: 'Feb', sinWeb: 11, conWeb: 22 },
  { mes: 'Mar', sinWeb: 13, conWeb: 38 },
  { mes: 'Abr', sinWeb: 10, conWeb: 55 },
  { mes: 'May', sinWeb: 12, conWeb: 74 },
  { mes: 'Jun', sinWeb: 11, conWeb: 92 },
  { mes: 'Jul', sinWeb: 13, conWeb: 115 },
  { mes: 'Ago', sinWeb: 12, conWeb: 140 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: 'rgba(8,8,7,0.92)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '12px',
          padding: '14px 18px',
          backdropFilter: 'blur(8px)',
          minWidth: '180px',
        }}
      >
        <p style={{ color: '#9a9a90', fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
          {label}
        </p>
        {payload.map((entry: any) => (
          <div key={entry.name} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: entry.color, flexShrink: 0 }} />
            <span style={{ color: '#b0ada8', fontFamily: 'sans-serif', fontSize: '13px' }}>{entry.name}:</span>
            <span style={{ color: '#e8e8e3', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700 }}>
              {entry.value} clientes/mes
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function ImpactChart() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: '#0d0d0c', padding: '100px 0 80px', overflow: 'hidden', position: 'relative' }}
    >
      {/* Subtle top divider */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: '56px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c8ff00', display: 'block' }}>
            El impacto real
          </span>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px' }}>
            <h2 style={{
              fontFamily: 'var(--font-display, sans-serif)',
              fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: '#e8e8e3',
              margin: 0,
            }}>
              Tu negocio,<br />
              <span style={{ color: '#c8ff00' }}>antes y después.</span>
            </h2>

            <p style={{
              fontFamily: 'sans-serif',
              fontSize: 'clamp(14px, 1.5vw, 18px)',
              color: '#6b645c',
              lineHeight: 1.7,
              maxWidth: '380px',
              margin: 0,
            }}>
              Negocios locales sin presencia web captan en promedio <strong style={{ color: '#b0ada8' }}>12 clientes/mes</strong>. Con un sitio web profesional, ese número escala de forma sostenida.
            </p>
          </div>
        </div>

        {/* Chart */}
        <div
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '20px',
            padding: '32px 16px 16px',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
          }}
        >
          <ResponsiveContainer width="100%" height={380}>
            <AreaChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="gradSin" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4a4a48" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#4a4a48" stopOpacity={0.02} />
                </linearGradient>
                <linearGradient id="gradCon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#c8ff00" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#c8ff00" stopOpacity={0.02} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />

              <XAxis
                dataKey="mes"
                tick={{ fontFamily: 'monospace', fontSize: 12, fill: '#4a4a48', letterSpacing: '0.1em' }}
                axisLine={false}
                tickLine={false}
                dy={12}
              />
              <YAxis
                tick={{ fontFamily: 'monospace', fontSize: 11, fill: '#4a4a48' }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `${v}`}
                dx={-8}
              />

              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.08)', strokeWidth: 1 }} />

              <Legend
                verticalAlign="top"
                align="right"
                iconType="circle"
                iconSize={8}
                formatter={(value) => (
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b645c' }}>
                    {value}
                  </span>
                )}
              />

              <Area
                type="monotone"
                dataKey="sinWeb"
                name="Sin sitio web"
                stroke="#4a4a48"
                strokeWidth={2}
                fill="url(#gradSin)"
                dot={false}
                activeDot={{ r: 5, fill: '#4a4a48', strokeWidth: 0 }}
                animationBegin={visible ? 0 : 99999}
                animationDuration={1800}
                animationEasing="ease-out"
              />
              <Area
                type="monotone"
                dataKey="conWeb"
                name="Con Juan Oberto"
                stroke="#c8ff00"
                strokeWidth={2.5}
                fill="url(#gradCon)"
                dot={false}
                activeDot={{ r: 6, fill: '#c8ff00', strokeWidth: 0 }}
                animationBegin={visible ? 200 : 99999}
                animationDuration={1800}
                animationEasing="ease-out"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Bottom callout */}
        <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {[
            { label: '↑ 10x', desc: 'Más visibilidad en Google' },
            { label: '↑ 8x', desc: 'Clientes nuevos por mes' },
            { label: '↑ 5x', desc: 'Ventas en línea' },
          ].map(({ label, desc }) => (
            <div
              key={label}
              style={{
                border: '1px solid rgba(200,255,0,0.2)',
                borderRadius: '12px',
                padding: '16px 28px',
                background: 'rgba(200,255,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                minWidth: '160px',
              }}
            >
              <span style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: '2rem', fontWeight: 900, color: '#c8ff00', lineHeight: 1 }}>
                {label}
              </span>
              <span style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4a4a48' }}>
                {desc}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Subtle bottom divider */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />
    </section>
  );
}
