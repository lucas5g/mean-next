'use client'

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"


const links = [
  {
    name: 'Words',
    href: '/'
  },
  {
    name: 'Books',
    href: '/books'
  }
]

export function Navbar() {

  const pathname = usePathname()

  return (
    <nav className="bg-gray-700 text-white">
      <ul className="flex justify-end ">

        {links.map(link => {
          return (
            <Link
              key={link.name}
              href={link.href}
            >
              <li
                key={link.href}
                className={clsx('h-16 w-24  hover:bg-gray-600 font-bold items-center justify-center flex', {
                  'bg-gray-500': pathname === link.href
                })}
                // className=""
              >

                {link.name}
              </li>
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}