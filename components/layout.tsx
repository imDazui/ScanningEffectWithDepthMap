'use client';

import NextLink from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

const tags = [
  {
    name: '#coming',
    href: 'https://pinla.app',
  },
];

const Link = ({
  href,
  target,
  className,
  children,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
}) => {
  return (
    <NextLink
      target={target}
      className={`pointer-events-auto hover:underline ${className}`}
      href={href}
    >
      {children}
    </NextLink>
  );
};

export const Layout = () => {
  const pathname = usePathname();

  return (
    <div
      data-layout
      className={
        'absolute inset-0 z-50 h-screen w-full pointer-events-none p-5 text-xs md:p-10 md:text-sm'
      }
    >
      <div className="grid h-full w-full grid-cols-6 grid-rows-6 uppercase">
        <div
          className="h-10 w-full"
          style={{
            gridColumn: '1/8',
          }}
        >
          <div className="flex items-center space-y-2 flex-col md:grid grid-cols-3">

            <div className="md:justify-items-end">
              <div className="flex space-x-4">
              </div>
            </div>
          </div>
        </div>

        <div
          className="text-xs w-full sm:w-96 opacity-65 frame"
          style={{
            gridRow: '6/7',
            gridColumn: '1/8',
          }}
        ></div>

        <div
          className="flex flex-col"
          style={{
            gridRow: '7/8',
            gridColumn: '1/4',
          }}
        >

          <div className="space-x-2">
            {tags.map((item, index) => {
              return (
                <Link href={item.href} target="_blank" key={index}>
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div
          className="flex flex-col justify-end"
          style={{
            gridRow: '7/8',
            gridColumn: '7/8',
          }}
        >
          <Link href={'https://10lab.in/'} target="_blank">
            Made by 10Lab
          </Link>
        </div>
      </div>
    </div>
  );
};
