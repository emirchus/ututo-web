import { Fingerprint, Keyhole, LockOpen, Speedometer, TrendUp, UsersFour } from '@phosphor-icons/react/dist/ssr';

import { BentoCard, BentoGrid } from '../ui/bento-grid';

const features = [
  {
    Icon: UsersFour,
    name: 'Comunidad',
    description:
      'Apoyo y colaboración definen a nuestra comunidad. Con UTUTO, nunca estás solo en tu experiencia digital.',
    href: '/',
    cta: 'Leer más',
    className: 'col-span-3 lg:col-span-1',
    background: <div></div>,
  },
  {
    Icon: LockOpen,
    name: 'Libertad',
    description:
      'Apoyo y colaboración definen a nuestra comunidad. Con UTUTO, nunca estás solo en tu experiencia digital.F',
    href: '/',
    cta: 'Leer más',
    className: 'col-span-3 lg:col-span-2',
    background: <div></div>,
  },
  {
    Icon: Fingerprint,
    name: 'Seguridad',
    description:
      'Apoyo y colaboración definen a nuestra comunidad. Con UTUTO, nunca estás solo en tu experiencia digital.',
    href: '/',
    cta: 'Leer más',
    className: 'col-span-3 lg:col-span-2',
    background: <div></div>,
  },
  {
    Icon: Speedometer,
    name: 'Rendimiento',
    description:
      'Apoyo y colaboración definen a nuestra comunidad. Con UTUTO, nunca estás solo en tu experiencia digital.',
    className: 'col-span-3 lg:col-span-1',
    href: '/',
    cta: 'Leer más',
    background: <div></div>,
  },
  {
    Icon: Keyhole,
    name: 'Privacidad',
    description:
      'Apoyo y colaboración definen a nuestra comunidad. Con UTUTO, nunca estás solo en tu experiencia digital.',
    className: 'col-span-3 lg:col-span-1',
    href: '/',
    cta: 'Leer más',
    background: <div></div>,
  },
  {
    Icon: TrendUp,
    name: 'Crecimiento',
    description:
      'Apoyo y colaboración definen a nuestra comunidad. Con UTUTO, nunca estás solo en tu experiencia digital.',
    className: 'col-span-3 lg:col-span-2',
    href: '/',
    cta: 'Leer más',
    background: <div></div>,
  },
];

export function FeaturesBento() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
