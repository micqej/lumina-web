import type { Metadata } from 'next'
import { Cormorant_Garamond, Plus_Jakarta_Sans, Space_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lumina Engine — Reprezentatívne firemné stránky',
  description: 'Nepredávam weby. Predávam dôveru zákazníkov — reprezentatívnu prezentáciu vašej firmy, ktorá vyzerá tak dobre, že ju budete chcieť hneď komusi poslať.',
  keywords: ['web dizajn', 'firemná stránka', 'Košice', 'Lumina Engine', 'webstránka pre firmu'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk" className={`${cormorant.variable} ${jakarta.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
