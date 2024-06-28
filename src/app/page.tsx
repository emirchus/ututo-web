import { ArrowRight, Code } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';

import { Cat } from '@/components/cat';
import { FadeDown } from '@/components/fade-down';
import { FeaturesBento } from '@/components/features-bento/features-bento';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="relative flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full py-12 sm:py-24 md:py-32 lg:py-40 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <FadeDown />
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant={'expandIcon'} Icon={ArrowRight} iconPlacement="right" asChild>
                    <a target="_blank" referrerPolicy="no-referrer" href="https://forms.gle">
                      Unirse a la lista de espera
                    </a>
                  </Button>
                  <Button
                    variant={'ringHover'}
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:text-secondary-foreground/90"
                    asChild
                  >
                    <a target="_blank" referrerPolicy="no-referrer" href="https://forms.gle">
                      <Code className="mr-2 h-4 w-4" /> !Quiero colaborar!
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/image-hero.png"
                  width={1000}
                  height={500}
                  alt="ututo lapto"
                  className="h-auto w-full object-scale-down drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">¿Por qué UTUTO?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ututo es sinónimo de libertad tecnológica y privacidad indiscutible. Un sistema operativo libre para
                  modificar y compartir, que respeta tus datos y se adapta a cualquier hardware. Con Ututo, te unes a
                  una comunidad que promueve el apoyo mutuo y una seguridad digital firme. Elige Ututo y lidera tu
                  camino hacia la soberanía digital con cada uso.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
              <FeaturesBento />
            </div>
          </div>
        </section>
        <div className="pointer-events-none relative -z-[2] mx-auto my-[-18.8rem] h-[50rem] w-full overflow-hidden [--color:hsl(var(--primary))] [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_50%)] before:absolute before:inset-0 before:h-full before:w-full before:opacity-40 before:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[hsl(var(--border))] after:bg-background"></div>
        <section id="about" className="w-full">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">¿Como comenzó UTUTO?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  UTUTO surgió en el año 2000 como la primera distribución GNU/Linux reconocida por el Proyecto GNU,
                  gracias a su dedicación exclusiva al software libre. Creado por Diego Saravia en Argentina, se
                  popularizó por su accesibilidad y la novedad del CD vivo. A lo largo de los años, UTUTO ha
                  evolucionado con variantes como UTUTO-R y UTUTO XS, manteniendo siempre su espíritu original. Tras una
                  pausa, la comunidad se ha organizado para revivir y actualizar UTUTO para los usuarios actuales.
                  Conoce más sobre esta fascinante historia en la entrevista a Diego Saravia, alma y fundador de UTUTO
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={'/aboutus-image.png'}
                alt="about us image"
                width={1000}
                height={1000}
                className="drop-shadow-md"
              />
            </div>
          </div>
        </section>
        {/* <section id="download" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Download Ututo Linux</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get the latest version of Ututo Linux and start experiencing the power of secure, private, and
                  open-source computing.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Download Ututo
                </Link>
                <Link
                  href="/"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
      <div className="sticky bottom-0 isolate z-20 flex items-center gap-x-6 overflow-hidden bg-background/20 px-6 py-2.5 backdrop-blur sm:px-3.5 sm:before:flex-1">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-primary opacity-30"
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }}
          />
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-primary to-[#ff80b5] opacity-30"
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }}
          />
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-secondary-foreground">
            <strong className="font-semibold">
              Con
              <Cat />
              Por Emir
            </strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            Página hecha con el propósito de colaborar. No es oficial.
          </p>
          <a
            href="https://ututo.ar"
            className="flex-none rounded-full bg-primary/30 px-3.5 py-1 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 ease-in-out hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Original <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
