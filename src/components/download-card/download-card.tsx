'use client';

import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';
import { CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedCard } from '../ui/animated-card';

interface Props {
  title: string;
  description: string;
  image: string;
  links?: { label: string; href: string }[];
  index: number;
}

export const DownloadCard = ({ description, image, links, title, index }: Props) => {
  return (
    <AnimatedCard
      initial="hidden"
      animate={'show'}
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 10, filter: `blur(10px)` },
        show: { opacity: 1, y: 0, filter: `blur(0px)`, transition: { type: 'spring', delay: index * 0.04 } },
      }}
      className="max-w-[350px] overflow-hidden"
    >
      <CardHeader className="p-0 text-left">
        <Image src={image} alt="ututo view" width="1280" height="720" />
        <div className="p-6">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="flex items-center justify-end space-x-4">
        {links?.map(({ label, href }) => (
          <Button key={label} size={'sm'} variant={'ringHover'} asChild>
            <a href={href} target="_blank">
              {label}
            </a>
          </Button>
        ))}
      </CardFooter>
    </AnimatedCard>
  );
};
