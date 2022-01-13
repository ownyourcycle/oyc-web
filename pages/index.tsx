import Head from 'next/head'
import Image from 'next/image'

const HomePage = () => {
  const headline = 'Own Your Cycle'
  const description = 'Menštruačný cyklus je zrkadlom tvojho zdravia'

  return (
    <>
      <Head>
        <title>Own Your Cycle</title>
      </Head>

      {/* Hero section */}
      <header className="h-full p-12 z-0 hero-gradient">
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold title-font text-black text-opacity-75">{headline}</h1>
          <p className="text-3xl text-gray-700 font-thin leading-relaxed mx-auto">{description}</p>
          <div className="flex mt-6 justify-center">
            <div className="w-32 h-1 rounded-full bg-pink-500 inline-flex"></div>
          </div>
        </div>
      </header>
    </>
  )
}

export default HomePage
