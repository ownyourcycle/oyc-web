import Head from 'next/head'
import Link from 'next/link'

const KontaktPage = () => {
  return (
    <>
      <Head>
        <title>Kontakt | Own Your Cycle</title>
      </Head>
      <div className="bg-red-50 pt-12 px-2 min-h-screen">
        <section className="container mx-auto">
          <h1 className="mt-12 text-6xl text-center font-semibold">Kontakt</h1>
          <p className="mt-6 text-center text-2xl">Kde ma nájdeš?</p>
        </section>

        <section className="container mx-auto">
          <div className="mt-6 bg-white p-12 shadow-sm mx-auto text-xl flex justify-center items-center">
            <div className="flex justify-center">
              <div className="mr-2">Email: </div>
              <div>
                <Link href="mailto:hello@ownyourcycle.com">
                  <a className="font-semibold border-b-2 hover:border-black transition-colors">
                    hello@ownyourcycle.com
                  </a>
                </Link>
              </div>
            </div>
            <div className="px-6 text-4xl text-gray-400 font-thin">|</div>
            <div className="flex justify-center">
              <div className="mr-2">Instagram: </div>
              <div>
                <Link href="https://instagram.com/ownyourcycle">
                  <a className="font-semibold border-b-2 hover:border-black transition-colors">@ownyourcycle</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default KontaktPage
