'use client';

import { motion } from 'framer-motion';

export function FadeDown() {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="space-y-2"
    >
      <motion.h1
        className="bg-gradient-to-br from-foreground to-foreground/20 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        UTUTO 11: Optimizado, innovador, histórico y Open-Source
      </motion.h1>
      <motion.p className="max-w-[600px] text-muted-foreground md:text-xl" variants={FADE_DOWN_ANIMATION_VARIANTS}>
        Descubre UTUTO 11, la evolución de GNU/Linux donde cada elemento es completamente libre. Originaria de Argentina
        y dedicada a usuarios que buscan transparencia y control total, UTUTO es tu puente hacia una computación ética.
        Con UTUTO 11, disfruta de una tecnología que respeta tu libertad y fomenta una comunidad comprometida con el
        avance del software libre. Emprende tu viaje hacia la soberanía digital ahora.
      </motion.p>
    </motion.div>
  );
}
