'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SideBar from '@/components/ui/sideBar'

export default function Home (): React.JSX.Element {
  return (
    <>
      <main
        className='flex items-center justify-center container min-h-screen select-none'
        id='main-home'
      >
        <SideBar />
        <div className='flex items-left flex-col gap-12'>
          <div className='flex flex-row items-center'>
            <p className='text-indigo-100 text-2xl font-semibold'>
              hi, I&apos;m Anabe
            </p>
            <span className='animate-bounce text-2xl ml-2'>{'👋'}</span>
          </div>
          <div className='font-extrabold italic'>
            <p className='text-7xl text-indigo-400'>fullstack</p>
            <p className='text-8xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-700'>
              developer
            </p>
          </div>
          <p className='text-indigo-200 w-3/5 text-xl leading-8 font-semibold pt-3'>
            I&apos;m 18 years old and have been developing systems for 1 year
            working as a freelancer.
          </p>
          <div className='flex gap-6 transition ease-in-out delay-150'>
            <Link target='_blank' href='https://github.com/anabexd'>
              <Image
                className='hover:-translate-y-1 hover:scale-110 duration-300'
                src='/mdi_github.svg'
                width={40}
                height={40}
                alt=''
              ></Image>
            </Link>
            <Link target='_blank' href='https://linkedin.com/in/anabe-sc'>
              <Image
                className='hover:-translate-y-1 hover:scale-110 duration-300'
                src='/mdi_linkedin.svg'
                width={40}
                height={40}
                alt=''
              ></Image>
            </Link>
            <Link
              target='_blank'
              href='https://drive.google.com/file/d/18tVLLld8qB_2HfDr6YQDsj2zGgExbaxE/view?usp=sharing'
            >
              <Image
                className='hover:-translate-y-1 hover:scale-110 duration-300'
                src='/mdi_paper.svg'
                width={40}
                height={40}
                alt=''
              ></Image>
            </Link>
          </div>
        </div>
        <Image
          src='/profile2.svg'
          width={260}
          height={260}
          alt=''
          className='select-none pointer-events-none'
        ></Image>
      </main>
    </>
  )
}
