import { Figtree, Space_Mono } from 'next/font/google';

export const figtree_init = Figtree({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '700'],
  variable: '--font-figtree'
});

export const space_mono_init = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-space-mono'
});

export const figtree = figtree_init.variable;
export const space_mono = space_mono_init.variable;
