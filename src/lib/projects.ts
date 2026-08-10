export interface Project {
  id: number;
  slug: string;
  title: string;
  year: string;
  tech: string[];
  description: string;
  myRole: string[];
  images: string[];
  hoverImage: string;
  github: string;
  liveUrl: string;
  accentColor?: string;
  isMobile?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    slug: 'motogonpaz',
    title: 'Moto Gonpaz',
    year: '2024',
    tech: ['HTML5', 'CSS3', 'JavaScript Vanilla'],
    description:
      'Una plataforma de comercio electrónico para una ferretería local en Maracaibo diseñada para optimizar su catálogo y establecer su presencia digital. Cuenta con una landing page premium, un catálogo general interactivo, una sección independiente para bebidas frías, y una página de contacto detallada con ubicación física, horarios y formulario.',
    myRole: [
      'Diseñé la identidad visual de la marca desde cero, creando el logotipo y definiendo la paleta de colores para su primera incursión en el mundo digital.',
      'Desarrollé la interfaz y experiencia de usuario construyendo toda la web desde cero utilizando HTML, CSS y JavaScript Vanilla (sin frameworks pesados).',
      'Implementé un sistema de generación de pedidos directamente conectado a WhatsApp, soportando tanto un carrito de compras global como compras rápidas desde el detalle de cada producto.',
    ],
    images: [
      '/Projects/motogonpaz/1.jpg',
      '/Projects/motogonpaz/2.jpg',
      '/Projects/motogonpaz/3.jpg',
      '/Projects/motogonpaz/4.jpg',
      '/Projects/motogonpaz/5.jpg',
      '/Projects/motogonpaz/6.jpg',
    ],
    hoverImage: '/Projects/motogonpaz/1.jpg',
    github: 'https://github.com/juandgg1611/MotoGonpaz-Ecommerce',
    liveUrl: 'https://motogonpaz.netlify.app/',
    accentColor: '#e63329',
  },
  {
    id: 2,
    slug: 'mitesis',
    title: 'Finanzas IA',
    year: '2026',
    tech: ['React 18', 'TypeScript', 'Tailwind CSS', 'Django', 'MySQL', 'Machine Learning'],
    description:
      'Aplicación web multidispositivo para la administración de finanzas personales empleando inteligencia artificial (Proyecto de Tesis). Cuenta con un dashboard analítico avanzado, gestión de transacciones y presupuestos, conversión de monedas en tiempo real conectada al BCV, y metas de ahorro con sugerencias generadas por modelos de Machine Learning (Prophet, scikit-learn). Presenta un diseño Dark Mode moderno con efectos de glassmorphism y una experiencia de usuario interactiva y fluida.',
    myRole: [
      'Lideré el desarrollo del Frontend utilizando React 18, TypeScript y Tailwind CSS, implementando un diseño oscuro moderno con efectos glassmorphism.',
      'Desarrollé módulos interactivos para la gestión de transacciones, presupuestos y metas de ahorro con gráficos dinámicos generados con Recharts.',
      'Diseñé e integré modelos de Machine Learning (Prophet, scikit-learn) para predicciones financieras y clasificación inteligente de datos.',
      'Implementé integraciones de APIs en tiempo real, como la tasa de cambio del Banco Central de Venezuela, y construí modales globales complejos mediante React Portals.',
    ],
    images: [
      '/Projects/mitesis/photo_1_2026-08-09_19-18-41.jpg',
      '/Projects/mitesis/photo_2_2026-08-09_19-18-41.jpg',
      '/Projects/mitesis/photo_3_2026-08-09_19-18-41.jpg',
      '/Projects/mitesis/photo_4_2026-08-09_19-18-41.jpg',
      '/Projects/mitesis/photo_5_2026-08-09_19-18-41.jpg',
      '/Projects/mitesis/photo_6_2026-08-09_19-18-41.jpg',
      '/Projects/mitesis/photo_7_2026-08-09_19-18-41.jpg',
      '/Projects/mitesis/photo_8_2026-08-09_19-18-41.jpg',
      '/Projects/mitesis/photo_9_2026-08-09_19-18-41.jpg',
      '/Projects/mitesis/photo_10_2026-08-09_19-18-41.jpg',
      '/Projects/mitesis/photo_11_2026-08-09_19-18-41.jpg',
      '/Projects/mitesis/photo_12_2026-08-09_19-18-41.jpg',
      '/Projects/mitesis/photo_13_2026-08-09_19-18-41.jpg',
    ],
    hoverImage: '/Projects/mitesis/photo_1_2026-08-09_19-18-41.jpg',
    github: 'https://github.com/juandgg1611/React-Interactive-Dashboard',
    liveUrl: 'https://tesis-dash.netlify.app/',
    accentColor: '#1A4D2E',
  },
  {
    id: 3,
    slug: 'conversor-divisas',
    title: 'Conversor BCV & USDT',
    year: '2026',
    tech: ['React Native', 'Expo', 'UX/UI Design', 'Push Notifications'],
    description:
      'Conversor de divisas en tiempo real para Android (APK). Incluye Dólar Americano, Euro y USDT (Tether), junto con un historial interactivo de las tasas del BCV. La app cuenta con notificaciones push para informar sobre la actualización de tasas y variaciones del USDT en el mercado. Incluye una calculadora de pago mixto con referencias en tiempo real y permite guardar o compartir los resultados de las conversiones en formato JPG o PDF.',
    myRole: [
      'Diseñé el logotipo, la identidad visual y definí la paleta de colores de la aplicación.',
      'Diseñé toda la interfaz y experiencia de usuario (UI/UX) enfocada en la facilidad de uso rápido.',
      'Desarrollé la aplicación móvil completa utilizando React Native y Expo Go.',
      'Implementé todas las funcionalidades lógicas: consumo de API de tasas, notificaciones push, calculadora de pago mixto y generación de PDFs/JPGs.',
    ],
    images: [
      '/Projects/conversor/photo_2_2026-08-09_22-08-52.jpg',
      '/Projects/conversor/photo_1_2026-08-09_22-08-52.jpg',
      '/Projects/conversor/photo_3_2026-08-09_22-08-52.jpg',
    ],
    hoverImage: '/Projects/conversor/photo_2_2026-08-09_22-08-52.jpg',
    github: 'https://github.com/juandgg1611/Venezuelan-Currency-Converter-Mobile-app',
    liveUrl: '/Projects/conversor/Conversor.apk',
    accentColor: '#1A4D2E',
    isMobile: true,
  },
  {
    id: 4,
    slug: 'silueta',
    title: 'Silueta Store App',
    year: '2026',
    tech: ['React Native', 'Expo', 'Supabase', 'API Rest', 'Biometría'],
    description:
      'Aplicación móvil (APK) que funciona como catálogo para una tienda de ropa femenina. Toda la información (tallas, colores, imágenes y métodos de pago) se gestiona de forma remota utilizando Supabase. Consume la API del BCV para calcular precios en bolívares en tiempo real. Los usuarios pueden guardar favoritos, buscar productos, usar la calculadora de pago mixto en el carrito, y completar su pedido directamente mediante un mensaje autogenerado en WhatsApp. Cuenta además con un panel de administrador integrado protegido por acceso biométrico (huella/FaceID) para gestionar el inventario (CRUD, marcar como agotado) y dar seguimiento a los estados de los pedidos.',
    myRole: [
      'Creación completa de la identidad de marca: logotipo, paleta de colores y lineamientos de diseño UI/UX.',
      'Desarrollé la aplicación móvil con React Native y Expo, integrando Supabase como base de datos en tiempo real.',
      'Implementé un sistema de carrito con calculadora de pago mixto e integración de checkout directo a WhatsApp con pedidos precargados.',
      'Construí el panel administrativo protegido por biometría para la gestión total del inventario y control de estados de pedidos (Pendiente, En viaje, Finalizado).',
      'Aporté e implementé soluciones creativas y de negocio a lo largo de todo el proceso de desarrollo.',
    ],
    images: [
      '/Projects/silueta/photo_1_2026-08-09_22-03-36.jpg',
      '/Projects/silueta/photo_2_2026-08-09_22-03-36.jpg',
      '/Projects/silueta/photo_3_2026-08-09_22-03-36.jpg',
      '/Projects/silueta/photo_4_2026-08-09_22-03-36.jpg',
      '/Projects/silueta/photo_5_2026-08-09_22-03-36.jpg',
    ],
    hoverImage: '/Projects/silueta/photo_1_2026-08-09_22-03-36.jpg',
    github: 'https://github.com/juandgg1611/Silueta-Store-App',
    liveUrl: '/Projects/silueta/Silueta.apk',
    accentColor: '#F5E642',
    isMobile: true,
  },
  {
    id: 5,
    slug: 'pabliculares',
    title: 'Pabliculares',
    year: '2026',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'shadcn/ui'],
    description:
      'Pabliculares es un e-commerce de audífonos de gama alta diseñado para un emprendimiento emergente. La plataforma cuenta con un catálogo de productos optimizado, una sección de contacto para la generación de leads y una sección "Nosotros" que fortalece la propuesta de valor de la marca. Construido con las últimas tecnologías web para garantizar una experiencia rápida, interactiva y totalmente responsiva.',
    myRole: [
      'Desarrollé la plataforma web desde cero utilizando el framework Next.js y React, garantizando tiempos de carga ultrarrápidos y excelente SEO.',
      'Implementé una interfaz de usuario moderna y premium utilizando Tailwind CSS combinado con la biblioteca de componentes shadcn/ui.',
      'Construí el catálogo interactivo de audífonos enfocado en maximizar la conversión y la experiencia del usuario final.',
      'Optimicé el rendimiento general aplicando las mejores prácticas de Next.js, incluyendo carga optimizada de fuentes y assets.',
    ],
    images: [
      '/Projects/pabliculares/1.jpg',
      '/Projects/pabliculares/2.jpg',
      '/Projects/pabliculares/3.jpg',
      '/Projects/pabliculares/4.jpg',
      '/Projects/pabliculares/5.jpg',
    ],
    hoverImage: '/Projects/pabliculares/1.jpg',
    github: 'https://github.com/juandgg1611/Responsive-Next.js-Headphones-Homepage',
    liveUrl: 'https://pabliculares.netlify.app/',
    accentColor: '#FF9900',
  },
];
export function getAllProjects(): Project[] {
  return projects;
}
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

