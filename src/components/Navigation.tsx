import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Burger, Button, Menu } from '@mantine/core'
import { MobileNavigation } from './MobileNavigation'

export const Navigation = () => {
  // const pathname = usePathname()
  // const isActive = (path: string) => {
  //   return pathname === path ? 'text-gradient font-bold' : 'text-gray-600 hover:text-gray-400'
  // }

  return (
    <nav className="flex items-center justify-between bg-white p-4 md:px-8">
      <div className="flex items-center">
        <Link href="/" className="flex items-center cursor-pointer">
          <Image src="/images/logo.png" alt="Own Your Cycle" width={50} height={50} />
          <span className="title-font font-medium text-gray-900 text-xl">ownyourcycle</span>
        </Link>
      </div>

      {/* desktop menu */}
      <div className="flex-row gap-4 items-center hidden md:flex">
        {/* This link as a button like */}
        <Link href="https://ownyourcycle.teachable.com" className="text-gradient font-bold">
          ✨ Kurz ✨
        </Link>
        {/* <Link href="/seminar-zilina" className="text-gray-600 hover:text-gray-400">
          SEMINÁR 23. 3. V ŽILINE
        </Link> */}
        <Link href="/konzultacie" className="text-gray-600 hover:text-gray-400">
          Konzultácie
        </Link>
        <Link href="/blog" className="text-gray-600 hover:text-gray-400">
          Blog
        </Link>
        <Link href="/kontakt" className="text-gray-600  hover:text-gray-400">
          Kontakt
        </Link>
      </div>
      {/* mobile menu */}
      <div className="flex justify-end md:hidden">
        <MobileNavigation />
        {/* <ul>
          <Link href="https://ownyourcycle.teachable.com" className="text-gradient font-bold">
            ✨ Kurz ✨
          </Link>
          <Link href="/konzultacia" className="text-gray-600 hover:text-gray-400">
            Konzultácia
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-400">
            Blog
          </Link>
          <Link href="/kontakt" className="text-gray-600  hover:text-gray-400">
            Kontakt
          </Link>
        </ul> */}
      </div>
    </nav>
  )
}
