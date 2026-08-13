'use client';

import React from 'react';
import Link from 'next/link';

export default function TerminosPage() {
  return (
    <main className="bg-ink min-h-screen text-light pt-32 pb-32 px-4 sm:px-6 md:px-10 lg:px-14 font-sans">
      <div className="max-w-[1200px] mx-auto">

        <Link href="/planes" className="inline-flex items-center text-neon hover:text-light transition-colors mb-10 font-mono text-sm uppercase tracking-widest">
          ← Volver a Planes
        </Link>

        <div className="mb-16">
          <span className="text-warm/50 font-mono text-sm uppercase tracking-[0.2em] block mb-4">Legal</span>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black tracking-tight leading-none uppercase mb-6 text-light">
            Bases Legales y<br /><span className="text-neon">Términos de Servicio</span>
          </h1>
          <p className="text-warm/60 font-mono text-sm uppercase tracking-widest">
            Jurisdicción: República Bolivariana de Venezuela (Maracaibo, Zulia) · Agosto 2026 · Normativa: Código de Comercio / Código Civil / GDPR
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-white/70 text-xl sm:text-2xl leading-relaxed">
            El presente documento establece el marco regulatorio integral que rige las relaciones comerciales, la prestación de servicios tecnológicos, los términos y condiciones de contratación operadas por el Prestador (Juan Oberto, en adelante el <strong className="text-neon">"Prestador"</strong>) hacia sus clientes y usuarios web (en adelante, el <strong className="text-neon">"Cliente"</strong> o <strong className="text-neon">"Usuario"</strong>).
          </p>

          {/* Artículo 1 */}
          <div className="mt-14 pb-10 border-b border-border-subtle">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-light mb-2 flex items-center gap-4">
              <span className="text-neon font-mono text-lg font-bold">Art. 1</span> Marco Legal e Identificación de las Partes
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mt-4">
              Los presentes Términos y Condiciones se rigen por la legislación vigente en la República Bolivariana de Venezuela, en especial el <strong className="text-neon">Código de Comercio</strong> y el <strong className="text-neon">Código Civil Venezolano</strong>. A los efectos contractuales, el Prestador opera como Firma Personal / Persona Natural Comerciante, domiciliado en la ciudad de Maracaibo, Estado Zulia, prestando servicios de desarrollo de software, diseño web, alojamiento de servidores y optimización digital.
            </p>
          </div>

          {/* Artículo 2 */}
          <div className="mt-10 pb-10 border-b border-border-subtle">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-light mb-2 flex items-center gap-4">
              <span className="text-neon font-mono text-lg font-bold">Art. 2</span> Objeto del Servicio y Alcance Contractual
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mt-4">
              El Prestador compromete la ejecución de proyectos de desarrollo web, optimización UI/UX, animaciones interactivas, integración de herramientas de análisis y configuraciones de seguridad de acuerdo con el paquete o propuesta comercial previamente aceptada por el Cliente por escrito o vía electrónica.
            </p>
            <div className="mt-4 p-5 bg-elevated rounded-2xl border-l-4 border-l-neon border-y border-r border-border-subtle">
              <p className="text-warm/70 text-base m-0">
                <strong className="text-neon">Limitación de Alcance:</strong> Todo requerimiento, funcionalidad, sección o integración adicional que no se encuentre expresamente detallada en la propuesta inicial será cotizada por separado como un anexo contractual.
              </p>
            </div>
          </div>

          {/* Artículo 3 */}
          <div className="mt-10 pb-10 border-b border-border-subtle">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-light mb-2 flex items-center gap-4">
              <span className="text-neon font-mono text-lg font-bold">Art. 3</span> Obligaciones y Tiempos de Entrega del Cliente
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mt-4">
              Para la ejecución oportuna del proyecto, el Cliente se compromete a suministrar la totalidad de los insumos requeridos (logotipos en alta resolución, textos descriptivos, imágenes corporativas y accesos necesarios) en un plazo no mayor a <strong className="text-neon">diez (10) días continuos</strong> a partir de la firma de la propuesta.
            </p>
            <ul className="mt-4 space-y-3 list-none pl-0">
              <li className="flex items-start gap-3 text-white/70 text-lg">
                <span className="text-neon mt-1">—</span> En caso de retraso en la entrega de insumos, el cronograma final se desplazará automáticamente por un período proporcional al retraso acumulado.
              </li>
              <li className="flex items-start gap-3 text-white/70 text-lg">
                <span className="text-neon mt-1">—</span> Si el retraso supera los <strong className="text-neon">30 días continuos</strong> sin justificación, el proyecto podrá ser pausado y sujeto a una tarifa de reactivación.
              </li>
            </ul>
          </div>

          {/* Artículo 4 */}
          <div className="mt-10 pb-10 border-b border-border-subtle">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-light mb-2 flex items-center gap-4">
              <span className="text-neon font-mono text-lg font-bold">Art. 4</span> Propiedad Intelectual y Licencias de Uso
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mt-4">
              La propiedad intelectual de la estructura web, código personalizado y diseño final será transferida plenamente al Cliente únicamente tras la cancelación del <strong className="text-neon">cien por cien (100%)</strong> del monto total acordado en la propuesta comercial.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mt-3">
              El Prestador se reserva el derecho de exhibir el proyecto finalizado en su portafolio profesional y canales digitales promocionales, salvo pacto expreso de confidencialidad (NDA) entre las partes.
            </p>
          </div>

          {/* Artículo 5 */}
          <div className="mt-10 pb-10 border-b border-border-subtle">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-light mb-2 flex items-center gap-4">
              <span className="text-neon font-mono text-lg font-bold">Art. 5</span> Esquema de Pagos, Moneda y Retrasos
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mt-4">
              Los servicios se estructuran bajo un esquema habitual de <strong className="text-neon">50% de anticipo</strong> para el inicio de los trabajos y <strong className="text-neon">50% restante</strong> contra entrega funcional e instalación en servidor de producción.
            </p>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-elevated rounded-2xl border-l-4 border-l-neon border-y border-r border-border-subtle">
                <h4 className="text-light font-bold mb-2">Moneda de Pago</h4>
                <p className="text-warm/70 text-base">Los precios se fijan en USD/EUR como referencia, con posibilidad de liquidación en Bolívares (BCV del día) o mediante Zelle, Binance/USDT y Transferencias internacionales.</p>
              </div>
              <div className="p-5 bg-elevated rounded-2xl border-l-4 border-l-neon border-y border-r border-border-subtle">
                <h4 className="text-light font-bold mb-2">Incumplimiento de Pago</h4>
                <p className="text-warm/70 text-base">Un retraso mayor a 10 días continuos en cuotas o saldo final facultará al Prestador a suspender temporalmente el servicio web o el alojamiento.</p>
              </div>
            </div>
          </div>

          {/* Artículo 6 */}
          <div className="mt-10 pb-10 border-b border-border-subtle">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-light mb-2 flex items-center gap-4">
              <span className="text-neon font-mono text-lg font-bold">Art. 6</span> Garantía Técnica y Soporte Post-Lanzamiento
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mt-4">
              El Prestador otorga una garantía limitada de <strong className="text-neon">treinta (30) días continuos</strong> a partir del lanzamiento del sitio web para la corrección sin costo adicional de fallas técnicas, hipervínculos rotos o errores propios del desarrollo original.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mt-3">
              La garantía no cubre fallas derivadas de manipulaciones por terceros no autorizados, modificaciones en el código fuente realizadas por el Cliente, o incompatibilidades por actualizaciones externas no contempladas.
            </p>
          </div>

          {/* Artículo 7 */}
          <div className="mt-10">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-light mb-2 flex items-center gap-4">
              <span className="text-neon font-mono text-lg font-bold">Art. 7</span> Servicios de Alojamiento y Mantenimiento Recurrente
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mt-4">
              En el caso de contratar el servicio de Hosting Gestionado y Mantenimiento:
            </p>
            <ul className="mt-4 space-y-3 list-none pl-0">
              <li className="flex items-start gap-3 text-white/70 text-lg">
                <span className="text-neon mt-1">—</span> El Prestador garantiza un nivel de disponibilidad del servidor (Uptime) del <strong className="text-neon">99.5% anual</strong>.
              </li>
              <li className="flex items-start gap-3 text-white/70 text-lg">
                <span className="text-neon mt-1">—</span> El mantenimiento incluye renovaciones de certificados SSL, monitoreo anti-malware y respaldos periódicos de base de datos.
              </li>
              <li className="flex items-start gap-3 text-white/70 text-lg">
                <span className="text-neon mt-1">—</span> El Prestador queda exonerado de responsabilidad por interrupciones causadas por fallas de la infraestructura nacional de telecomunicaciones, electricidad o proveedores globales de centros de datos.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
}
