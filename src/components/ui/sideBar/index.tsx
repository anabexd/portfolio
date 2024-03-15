import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', href: '/home', img: 'home.svg' },
  { name: 'Projects', href: '/projects', img: 'folder.svg' },
  { name: 'Contact', href: '/contact', img: 'mail.svg' }
]

const SideBar = (): React.JSX.Element => {
  const pathname = usePathname()
  return (
     <div className="flex flex-col fixed left-0 ml-10 border border-indigo-300 divide-y divide-indigo-300 rounded-lg p-4">
    {navLinks.map((link) => {
      const isActive = pathname.startsWith(link.href)
      return (
        <Link href={link.href} key={link.name} className={isActive ? 'opacity-100' : 'opacity-50'}>
            <Image src={link.img} width={25} height={25} alt="" className="pt-3 pb-3 hover:cursor-pointer"></Image>
          </Link>
      )
    })}
    </div>
  )
}

export default SideBar
