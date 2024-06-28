import { ComputerTower, Heart, Sidebar } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ModeToggle } from '../mode-toggle';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';

export const Header = () => {
  return (
    <header className="h-18 sticky top-0 z-10 flex items-center border-b border-border/20 bg-background/20 px-4 py-2 backdrop-blur lg:px-6">
      <Image
        width={50}
        height={50}
        src={'/logo-header.png'}
        alt="logo"
        className="mr-2 h-full w-auto object-scale-down"
      />
      <nav className="hidden flex-1 gap-4 sm:gap-6 md:flex">
        <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
          Inicio
        </Link>
        <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
          Ventajas
        </Link>
        <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
          Nosotros
        </Link>
        <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
          Comunidad
        </Link>
        <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
          Blog
        </Link>
        <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
          Ayuda
        </Link>
      </nav>
      <Button variant={'secondary'} className="hidden md:block">
        <Heart className="mr-2 hidden h-4 w-4" />
        Colaborar
      </Button>
      <Button variant={'shine'} className="ml-2 mr-2 hidden items-center justify-center md:flex">
        <ComputerTower className="mr-2 h-4 w-4" />
        Ututo Legacy
      </Button>
      <ModeToggle />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={'outline'} size={'icon'} className="ml-auto md:hidden">
            <Sidebar className="h-4 w-4" weight="duotone" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Image
                width={50}
                height={50}
                src={'/logo-header.png'}
                alt="logo"
                className="mr-2 h-full w-auto object-scale-down"
              />
            </SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
              Inicio
            </Link>
            <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
              Ventajas
            </Link>
            <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
              Nosotros
            </Link>
            <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
              Comunidad
            </Link>
            <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
              Blog
            </Link>
            <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
              Ayuda
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
