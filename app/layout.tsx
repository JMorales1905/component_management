import type { Metadata } from 'next'
import { Lugrasimo } from 'next/font/google'
import { Great_Vibes } from 'next/font/google'
import './globals.css'

const lugrasimo = Lugrasimo({ weight: ['400'], style: ['normal'], subsets: ['latin'] })
const vibes = Great_Vibes({ weight: ['400'], style: ['normal'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IkigaiJAM',
  description: 'Personal Website Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='bg-Void' lang="en">
      <body className={lugrasimo.className}>{children}</body>
    </html>
  )
}
