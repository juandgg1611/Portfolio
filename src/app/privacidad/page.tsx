'use client';

import React from 'react';
import Link from 'next/link';

export default function PrivacidadPage() {
  return (
    <main className="bg-ink min-h-screen text-light pt-32 pb-32 px-4 sm:px-6 md:px-10 lg:px-14 font-sans">
      <div className="max-w-[1200px] mx-auto">

        <Link href="/planes" className="inline-flex items-center text-neon hover:text-light transition-colors mb-10 font-mono text-sm uppercase tracking-widest">
          ← Volver a Planes
        </Link>

        <div className="mb-16">
          <span className="text-warm/50 font-mono text-sm uppercase tracking-[0.2em] block mb-4">Legal</span>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black tracking-tight leading-none uppercase mb-6 text-light">
            Política de<br /><span className="text-neon">Privacidad</span>
          </h1>
          <p className="text-warm/60 font-mono text-sm uppercase tracking-widest">
            Tratamiento de Datos Personales · Agosto 2026 · Marco normativo: Venezuela / GDPR / CCPA
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-white/70 text-xl sm:text-2xl leading-relaxed">
            La presente Política de Privacidad regula la recolección, uso, almacenamiento y protección de la información personal recopilada a través del sitio web y los proyectos desplegados por <strong className="text-neon">Juan Oberto</strong> (en adelante, el <strong className="text-neon">"Prestador"</strong>). El Prestador actúa como responsable de los datos obtenidos en sus plataformas digitales directas.
          </p>

          {/* Art. 1 */}
          <div className="mt-14 pb-10 border-b border-border-subtle">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-light mb-2 flex items-center gap-4">
              <span className="text-neon font-mono text-lg font-bold">Art. 1</span> Responsable del Tratamiento
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mt-4">
              El responsable del tratamiento de los datos personales recopilados es <strong className="text-neon">Juan Oberto</strong>, prestador de servicios de desarrollo web con domicilio en la ciudad de Maracaibo, Estado Zulia, República Bolivariana de Venezuela. Para consultas relacionadas con el tratamiento de tus datos, puedes contactarnos directamente a través del formulario de contacto disponible en el sitio web.
            </p>
          </div>

          {/* Art. 2 */}
          <div className="mt-10 pb-10 border-b border-border-subtle">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-light mb-2 flex items-center gap-4">
              <span className="text-neon font-mono text-lg font-bold">Art. 2</span> Información Recopilada
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mt-4">
              A través de las interacciones digitales se recopilan las siguientes categorías de datos:
            </p>
            <div className="mt-6 space-y-4">
              <div className="p-5 bg-elevated rounded-2xl border-l-4 border-l-neon border-y border-r border-border-subtle">
                <h4 className="text-light font-bold mb-2">Información de Contacto Directo</h4>
                <p className="text-warm/70 text-base m-0">Nombre, dirección de correo electrónico, número de teléfono/WhatsApp y datos de la empresa, proporcionados voluntariamente en formularios de contacto o cotización.</p>
              </div>
              <div className="p-5 bg-elevated rounded-2xl border-l-4 border-l-neon border-y border-r border-border-subtle">
                <h4 className="text-light font-bold mb-2">Datos de Navegación y Analítica</h4>
                <p className="text-warm/70 text-base m-0">Dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia y patrón de desplazamiento, recopilados de forma anónima a través de herramientas como Google Analytics 4 (GA4).</p>
              </div>
            </div>
          </div>

          {/* Art. 3 */}
          <div className="mt-10 pb-10 border-b border-border-subtle">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-light mb-2 flex items-center gap-4">
              <span className="text-neon font-mono text-lg font-bold">Art. 3</span> Finalidad del Tratamiento
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mt-4">
              Los datos recopilados se utilizan estrictamente para las siguientes finalidades:
            </p>
            <ul className="mt-4 space-y-3 list-none pl-0">
              <li className="flex items-start gap-3 text-white/70 text-lg">
                <span className="text-neon mt-1">—</span> Responder solicitudes de cotización, consultas comerciales y soporte técnico.
              </li>
              <li className="flex items-start gap-3 text-white/70 text-lg">
                <span className="text-neon mt-1">—</span> Gestión administrativa, facturación y seguimiento de proyectos contratados.
              </li>
              <li className="flex items-start gap-3 text-white/70 text-lg">
                <span className="text-neon mt-1">—</span> Análisis estadístico de tráfico web para optimizar la velocidad, la experiencia de usuario y el rendimiento del sitio.
              </li>
            </ul>
          </div>

          {/* Art. 4 */}
          <div className="mt-10 pb-10 border-b border-border-subtle">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-light mb-2 flex items-center gap-4">
              <span className="text-neon font-mono text-lg font-bold">Art. 4</span> Cookies y Tecnologías de Rastreo
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mt-4">
              El sitio web utiliza cookies técnicas y analíticas para garantizar el correcto funcionamiento de las animaciones interactivas, recordar preferencias de sesión y recopilar métricas de uso anónimas. El Usuario puede configurar o desactivar el uso de cookies en cualquier momento desde la configuración de su navegador web sin que esto afecte la navegación general del sitio.
            </p>
          </div>

          {/* Art. 5 */}
          <div className="mt-10 pb-10 border-b border-border-subtle">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-light mb-2 flex items-center gap-4">
              <span className="text-neon font-mono text-lg font-bold">Art. 5</span> Transferencia de Datos a Terceros
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mt-4">
              El Prestador <strong className="text-neon">no vende, alquila ni cede</strong> datos personales a terceros con fines comerciales. Los datos únicamente podrán ser compartidos con proveedores de servicios tecnológicos indispensables para la operación web (servidores de hosting, servicios de envío de correo o herramientas de analítica como Google), bajo estrictos estándares de confidencialidad.
            </p>
          </div>

          {/* Art. 6 */}
          <div className="mt-10 pb-10 border-b border-border-subtle">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-light mb-2 flex items-center gap-4">
              <span className="text-neon font-mono text-lg font-bold">Art. 6</span> Derechos del Usuario
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mt-4">
              En concordancia con los principios internacionales de protección de datos (GDPR) y el marco normativo nacional, todo Usuario tiene derecho a:
            </p>
            <ul className="mt-4 space-y-3 list-none pl-0">
              <li className="flex items-start gap-3 text-white/70 text-lg">
                <span className="text-neon mt-1">—</span> <strong className="text-neon">Acceso:</strong> Solicitar una copia de los datos personales que tenemos sobre ti.
              </li>
              <li className="flex items-start gap-3 text-white/70 text-lg">
                <span className="text-neon mt-1">—</span> <strong className="text-neon">Rectificación:</strong> Corregir información inexacta o incompleta.
              </li>
              <li className="flex items-start gap-3 text-white/70 text-lg">
                <span className="text-neon mt-1">—</span> <strong className="text-neon">Cancelación / Eliminación:</strong> Solicitar la eliminación definitiva de tus registros de nuestras bases de datos comerciales.
              </li>
            </ul>
            <p className="text-white/70 text-lg leading-relaxed mt-4">
              Todas estas solicitudes deben realizarse mediante correo electrónico formal o a través del formulario de contacto disponible en el sitio.
            </p>
          </div>

          {/* Art. 7 */}
          <div className="mt-10">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-light mb-2 flex items-center gap-4">
              <span className="text-neon font-mono text-lg font-bold">Art. 7</span> Modificaciones a las Políticas
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mt-4">
              El Prestador se reserva el derecho de actualizar la presente Política de Privacidad para adaptarla a novedades legislativas o prácticas operativas. Las modificaciones entrarán en vigencia inmediatamente tras su publicación en el sitio web. Se recomienda revisar este documento periódicamente.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
