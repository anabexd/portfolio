import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ana Beatriz',
  description: 'Ana Beatriz Martins Fullstack Developer Portfolio'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <>
    <head>
        <title>Ana Beatriz Martins</title>
        <meta name='description' content='Ana Beatriz Martins Fullstack Developer Portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
    </head>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </>
  )
}
