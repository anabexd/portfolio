'use client'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', href: '/', icon: '/home.svg' },
  { name: 'Projects', href: '/projects', icon: '/folder.svg' },
  { name: 'Contact', href: '/contact', icon: '/mail.svg' }
]

export const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className="flex flex-col fixed left-10 top-1/2 -translate-y-1/2 border border-indigo-300 divide-y divide-indigo-300/50 rounded-lg p-4">
      {navLinks.map((link) => {
        const isActive = pathname === link.href

        return (
          <Link key={link.name} href={link.href} className="group">
            <Image
              src={link.icon}
              width={25}
              height={25}
              className={clsx(
                isActive ? 'opactiy-100' : 'opacity-50',
                'py-3 group-hover:opacity-100'
              )}
              alt={link.name}
            />
          </Link>
        )
      })}
    </div>
  )
}
