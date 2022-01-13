import Link from 'next/link'
import Image from 'next/image'
import logoIcon from '../assets/logo.png'

export const Navigation = () => {
  return (
    <nav className="flex items-center justify-between bg-white p-4">
      <div className="flex items-center">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <Image src={logoIcon} alt="Own Your Cycle" width={50} height={50} />
            <span className="title-font font-medium text-gray-900 text-xl">ownyourcycle</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-row gap-4 items-center">
        {/* <Link href="/o-mne">
          <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">O mne</a>
        </Link> */}
        {/* <Link href="/o-projekte">
          <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">O projekte</a>
        </Link> */}
        <Link href="/konzultacie">
          <a className="text-gray-600 hover:text-gray-400">Konzultácie</a>
        </Link>
        <Link href="/kontakt">
          <a className="text-gray-600  hover:text-gray-400">Kontakt</a>
        </Link>
      </div>
    </nav>
  )
}
