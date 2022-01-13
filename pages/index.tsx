import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import OYC from '../assets/OYC.svg'

const HomePage = () => {
  const headline = 'Own Your Cycle'
  const description = 'Menštruačný cyklus je zrkadlom nášho zdravia'

  return (
    <>
      <Head>
        <title>Own Your Cycle</title>
      </Head>

      {/* Hero section */}
      <header className="h-full p-12 z-0 hero-gradient h-screen">
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold title-font text-black text-opacity-75 mt-12">{headline}</h1>
          <p className="text-3xl text-gray-700 font-thin leading-relaxed mx-auto mt-6">{description}</p>
          <div className="flex mt-12 justify-center">
            <div className="w-32 h-1 rounded-full bg-pink-500 inline-flex"></div>
          </div>
          <div className="mt-12">
            <Image src={OYC} alt="TTA" width={400} height={400} />
          </div>
          <div className="flex justify-center gap-2 mt-12">
            <Link href="/konzultacie">
              <a className="btn-primary">Konzultácie</a>
            </Link>
            <Link href="/kontakt">
              <a className="btn-secondary">Kontakt</a>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default HomePage
