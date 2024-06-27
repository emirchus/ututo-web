import { GithubLogo, InstagramLogo, LinkedinLogo, XLogo } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 px-4 py-6 md:px-6">
      <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-6">
        <div className="col-span-2 flex flex-col gap-2">
          <h6 className="text-lg font-semibold">Ututo Linux</h6>
          <p className="text-sm">Ututo es una distribución de Linux Argentina, hecha por la comunidad.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-lg font-semibold">Sobre Nosotros</h6>
          <ul className="flex flex-col gap-1">
            <li>
              <a
                href="https://es.wikipedia.org/wiki/Ututo"
                referrerPolicy="no-referrer"
                className="text-sm hover:underline"
              >
                Wikipedia
              </a>
            </li>
            <li>
              <a href="https://ututo.org/" referrerPolicy="no-referrer" className="text-sm hover:underline">
                Legacy
              </a>
            </li>
            <li>
              <a href="https://ututo.ar/" referrerPolicy="no-referrer" className="text-sm hover:underline">
                Ututo 11
              </a>
            </li>
            <li>
              <a
                href="https://jpromanonet.notion.site/Roadmap-d57a3af2154347d7b11016f74881a68d"
                referrerPolicy="no-referrer"
                className="text-sm hover:underline"
              >
                Roadmap
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-lg font-semibold">Comunidad</h6>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="https://ututo.org" className="text-sm hover:underline">
                Tienda
              </a>
            </li>
            <li>
              <a href="https://discord.com/invite/ASEuyrfpFy" className="text-sm hover:underline">
                Discord
              </a>
            </li>
            <li>
              <a href="https://linktr.ee/ututolinux" className="text-sm hover:underline">
                Linktree
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@ututolinux" className="text-sm hover:underline">
                Youtube
              </a>
            </li>
            <li>
              <a href="https://open.spotify.com/show/6E6Vk5F5XN3DsT4EWLux6I" className="text-sm hover:underline">
                Spotify
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-lg font-semibold">Ayuda</h6>
          <ul className="flex flex-col gap-1">
            <li>
              <Link href="/faq" className="text-sm hover:underline">
                Preguntas Frecuentes
              </Link>
            </li>
            <li>
              <Link href="/guides" className="text-sm hover:underline">
                Guía de uso
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-lg font-semibold">Contacto</h6>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="mailto:contacto@ututo.com.ar" className="text-sm hover:underline">
                contacto@ututo.com.ar
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 flex w-full flex-col items-center justify-between gap-4 border-t border-border p-2 md:flex-row">
        <div className="flex flex-col items-center gap-2 space-x-2 md:items-start">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ututo Linux. Todos los derechos reservados.
          </p>
          <div className="flex gap-2">
            <a href="https://ututo.org" className="text-sm hover:underline">
              Términos de servicio
            </a>
            <a href="https://ututo.org" className="text-sm hover:underline">
              Política de privacidad
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 md:items-end">
          <a href="https://github.com/ututolinux">
            <GithubLogo className="h-5 w-5" />
          </a>
          <a href="https://x.com/ututolinux">
            <XLogo className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/company/ututo/">
            <LinkedinLogo className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com/ututolinux">
            <InstagramLogo className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
