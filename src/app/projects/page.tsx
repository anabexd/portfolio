'use client'
import React from 'react'
import Image from 'next/image'
import SideBar from '@/components/ui/sideBar'

export default function Home (): React.JSX.Element {
  return (
    <>
      <main className='flex items-center justify-center flex-col container min-h-screen select-none max-w-5xl mx-auto'>
        <SideBar />
          <p className='text-slate-300 text-4xl text-center font-semibold mb-40'>
            My projects
          </p>
          {/* <div className='divide-x grid grid-cols-2 items-center justify-center w-3/4 px-10'>
            <div className='flex flex-col items-center justify-center'>
              <p className='text-indigo-300 text-3xl font-semibold pb-12 pt-12'>CantinaGO</p>
              <Image className='absolute mt-20' src='/devices-01.png' width={400} height={400} alt=''></Image>
              <Image className='relative -z-10 -mt-20' src='/square-gradient.svg' width={300} height={400} alt=''></Image>
            </div>
            <div className='px-12 text-slate-300 w-3/4 flex flex-col items-start gap-7'>
              <p className='text-indigo-300 text-xl font-semibold'>jul - dez/2023</p>
              <p className='text-xl'>
                Project designed to solve the problem of queues in school and
                institution canteens through a virtual menu.
              </p>
              <div className='flex flex-row items-center justify-center gap-6'>
                <button className='h-12 px-6 rounded-md text-indigo-300 hover:opacity-90 flex items-center gap-3'>
                  <img src='/web.svg' alt='' />
                  deploy
                </button>
                <button className='h-12 px-6 rounded-md text-indigo-300 hover:opacity-90 flex items-center gap-3'>
                  <img src='/code.svg' alt='' />
                  code
                </button>
              </div>
                <img src="https://skillicons.dev/icons?i=figma,react,typescript,vite,postgresql,spring" />
            </div>
          </div> */}
          <div className="divide-x divide-indigo-300 grid lg:grid-cols-2 gap-20">
            <div className='flex flex-col items-center justify-center'>
              <p className='text-indigo-300 text-3xl font-semibold'>CantinaGO</p>
              <div className="bg-[url(/square-gradient.svg)] bg-cover -z-10 rounded-lg h-full w-full p-5 flex flex-col items-center">
                <Image className='mb-10 size-fit hover:scale-110 duration-300' src='/devices-01.png' width={400} height={400} alt='' />
              </div>
              {/* <Image className='relative -z-10' src='/square-gradient.svg' width={300} height={400} alt='' /> */}
            </div>
            <div className='flex flex-col items-start justify-center px-10 gap-10'>
              <p className="text-indigo-300 text-xl font-semibold">jul - dez/2023</p>
              <p className="text-xl text-slate-300">
                Project designed to solve the problem of queues in school and
                institution canteens through a virtual menu.
              </p>
            </div>
          </div>
      </main>
    </>
  )
}
