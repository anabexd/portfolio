'use client'
import React from 'react'
import SideBar from '@/components/ui/sideBar'

export default function Home (): React.JSX.Element {
  return (
    <>
      <main className='flex items-center justify-center container select-none min-h-screen max-w-5xl mx-auto'>
        <SideBar />
          <p className='text-slate-300 text-4xl font-semibold py-20 mb-20'>
            Contact me
          </p>
      </main>
    </>
  )
}
