import type { ContactLink } from '../types';

export const contactInfo = {
  email: 'yanweiporteroguzman@gmail.com',
  phone: '(+593) 099 534 024',
  location: 'Guayaquil, Ecuador',
  linkedin: 'https://www.linkedin.com/in/ypguzman19',
  github: 'https://github.com/YEYE2e'
};

export const contactLinks: ContactLink[] = [
  {
    label: 'Correo',
    value: 'yanweiporteroguzman@gmail.com',
    href: 'mailto:yanweiporteroguzman@gmail.com',
    external: false
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ypguzman19',
    href: 'https://www.linkedin.com/in/ypguzman19',
    external: true
  },
  {
    label: 'GitHub',
    value: 'github.com/YEYE2e',
    href: 'https://github.com/YEYE2e',
    external: true
  },
  {
    label: 'WhatsApp / Tel',
    value: '(+593) 099 534 024',
    href: 'https://wa.me/593995348024',
    external: true
  },
  {
    label: 'Ubicación',
    value: 'Guayaquil, Ecuador',
    href: 'https://maps.google.com/?q=Guayaquil,Ecuador',
    external: true
  }
];
