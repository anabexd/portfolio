import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import { Sidebar } from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ana Beatriz',
  description: 'Ana Beatriz Martins Fullstack Developer Portfolio'
}

const RootLayout = ({
  children
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <>
      <head>
        <title>Ana Beatriz Martins</title>
        <meta
          name="description"
          content="Ana Beatriz Martins Fullstack Developer Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <html lang="en">
        <body className={inter.className}>
          <Sidebar />
          {children}
        </body>
      </html>
    </>
  )
}

export default RootLayout
