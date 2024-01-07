import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Subscribe } from '~/components/Subscribe'

export const metadata = {
  title: 'Own Your Cycle',
  description: 'Menštruačný cyklus je zrkadlom nášho zdravia',
}

const HomePage = () => {
  const headline = 'Own Your Cycle'
  const description = 'Menštruačný cyklus je zrkadlom nášho zdravia'

  return (
    <>
      {/* Hero section */}
      <header className="h-full p-12 z-0 hero-gradient min-h-screen">
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold title-font text-black text-opacity-75 mt-12">{headline}</h1>
          <p className="text-3xl text-gray-700 font-thin leading-relaxed mx-auto mt-6">{description}</p>
          <div className="flex mt-12 justify-center">
            <div className="w-32 h-1 rounded-full bg-pink-500 inline-flex"></div>
          </div>
          <div className="mt-12 flex justify-center">
            <Image src="/images/OYC.svg" alt="TTA" width={400} height={400} />
          </div>
          <div className="flex justify-center gap-2 mt-12">
            <Link href="https://ownyourcycle.teachable.com" className="btn-secondary">
              Kurz
            </Link>
            <Link href="/konzultacia" className="btn-secondary">
              Konzultácia
            </Link>
            <Link href="/blog" className="btn-secondary">
              Blog
            </Link>
            <Link href="/kontakt" className="btn-secondary">
              Kontakt
            </Link>
          </div>
          <div className="container mx-auto">
            <div className="bg-white p-6 shadow-md mt-12">
              <h2 className="text-4xl font-bold title-font text-black text-opacity-75 mt-12">
                Buď so mnou v kontakte!
              </h2>
              <div className="mt-6">
                Prihlás sa na odber newslettera pre informácie o aktuálnych & pripravovaných ponukách a novinkách od Own
                Your Cycle.
              </div>
              <div className="flex justify-center mt-6">
                <Subscribe />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default HomePage
