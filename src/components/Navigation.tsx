import Link from 'next/link'
import Image from 'next/image'

export const Navigation = () => {
  return (
    <nav className="flex items-center justify-between bg-white p-4 md:px-8">
      <div className="flex items-center">
        <Link href="/" className="flex items-center cursor-pointer">
          <Image src="/images/logo.png" alt="Own Your Cycle" width={50} height={50} />
          <span className="title-font font-medium text-gray-900 text-xl">ownyourcycle</span>
        </Link>
      </div>
      <div className="flex flex-row gap-4 items-center">
        {/* <Link href="/o-mne">
          <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">O mne</a>
        </Link> */}
        {/* <Link href="/o-projekte">
          <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">O projekte</a>
        </Link> */}

        {/* This link as a button like */}
        <Link href="https://ownyourcycle.teachable.com" className="text-gradient font-bold">
          ✨ Kurz ✨
        </Link>
        <Link href="/konzultacia" className="text-gray-600 hover:text-gray-400">
          Konzultácia
        </Link>
        <Link href="/kontakt" className="text-gray-600  hover:text-gray-400">
          Kontakt
        </Link>
      </div>
    </nav>
  )
}
