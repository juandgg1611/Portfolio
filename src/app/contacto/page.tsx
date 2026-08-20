import type { Metadata } from 'next';
import ContactoClient from './ContactoClient';

export const metadata: Metadata = {
  title: 'Contacto — Juan Oberto',
  description:
    'Hablemos. Escríbeme por WhatsApp o agenda un café virtual. Sin formularios, sin esperas.',
};

export default function ContactoPage() {
  return <ContactoClient />;
}
