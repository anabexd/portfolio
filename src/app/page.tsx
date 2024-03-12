'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SideBar from './ui/sideBar'

export default function Home (): React.JSX.Element {
  return (
    <>
    <main className='flex min-h-screen flex-row items-center justify-center w-100 select-none' id='main-home'>
    <SideBar />
      <div className='flex items-left flex-col gap-12'>
        <div className="flex flex-row items-center">
        <p className='text-indigo-100 text-2xl font-semibold'>hi, I&apos;m Anabe</p>
        <span className='animate-bounce text-2xl ml-2'>{'👋'}</span>
        </div>
        <div className='font-extrabold italic'>
          <p className='text-7xl text-indigo-400'>fullstack</p>
          <p className='text-8xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600'>developer</p>
        </div>
        <p className='text-indigo-300 w-3/5 text-xl leading-8 font-semibold pt-3'>
          I&apos;m 18 years old and have been developing systems for 1 year working
          as a freelancer.
        </p>
        <div className='flex gap-6 transition ease-in-out delay-150'>
          <Link target='_blank' href='https://github.com/anabexd'>
            <Image className='hover:-translate-y-1 hover:scale-110 duration-300' src='/mdi_github.svg' width={40} height={40} alt=''></Image>
            </Link>
          <Link target='_blank' href='https://linkedin.com/in/anabe-sc'>
          <Image className='hover:-translate-y-1 hover:scale-110 duration-300' src='/mdi_linkedin.svg' width={40} height={40} alt=''></Image>
          </Link>
          <Link target='_blank' href='https://drive.google.com/file/d/18tVLLld8qB_2HfDr6YQDsj2zGgExbaxE/view?usp=sharing'>
          <Image className='hover:-translate-y-1 hover:scale-110 duration-300' src='/mdi_paper.svg' width={40} height={40} alt=''></Image>
          </Link>
        </div>
      </div>
      <Image src='/profile2.svg' width={260} height={260} alt='' className='select-none pointer-events-none'></Image>
    </main>
    <main className='flex min-h-screen flex-row items-start justify-center w-100'>
      <div className="flex flex-col justify-center items-center">
      <p className='text-slate-200 text-4xl font-semibold py-20'>My projects</p>
      <div className="divide-x grid grid-cols-2"></div>
      <div className="flex flex-col items-center justify-center">
      <p className='text-indigo-300 text-3xl font-semibold pb-12 pt-12'>CantinaGO</p>
      <Image className='relative' src="/devices-01.png" width={400} height={400} alt=''></Image>
      <Image className='absolute -z-10 mt-20' src="/square-gradient.svg" width={300} height={400} alt=''></Image>
      </div>
      <div className="text-slate-300 w-4/6 text-center">
        <p className='py-20 text-xl'>Project designed to solve the problem of queues in school and institution canteens through a virtual menu.</p>
        <div className="flex flex-row items-center justify-center gap-6">
        <button className='h-12 px-6 rounded-md text-indigo-300 hover:opacity-90 flex items-center gap-3'>
          <img src="/web.svg" alt="" />deploy</button>
        <button className='h-12 px-6 rounded-md text-indigo-300 hover:opacity-90 flex items-center gap-3'>
        <img src="/code.svg" alt="" />code</button>
        </div>
      </div>
      </div>
    </main>
    </>
  )
}
