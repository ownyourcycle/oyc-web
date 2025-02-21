import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Konzultácia | Own Your Cycle',
  description: 'Menštruačný cyklus je zrkadlom nášho zdravia',
}

export default function KonzultaciaPage() {
  return (
    <div className="bg-red-50 py-8 px-4 h-full flex-grow">
      <section className="container mx-auto">
        <h1 className="mt-12 text-6xl text-center font-semibold">Konzultácia</h1>
        <p className="mt-6 text-center text-2xl">Buď o krok bližšie k porozumeniu svojich cyklov!</p>
        <p className="mt-6 text-center">Naplň svoj cieľ vďaka sympto-termálnej metóde.</p>

        <div className="flex justify-center flex-wrap mt-6">
          <Image src="images/TTA.svg" alt="TTA" width={200} height={200} />
          <Image src="images/TTC.svg" alt="TTC" width={200} height={200} />
          <Image src="images/TFH.svg" alt="TFH" width={200} height={200} />
        </div>
        <div className="flex justify-center my-6 gap-4 flex-wrap">
          <Link href="/konzultacia/email" className="btn-primary">
            Emailová konzultácia
          </Link>
          <Link href="https://calendly.com/ownyourcycle/videokonzultacia" target="_blank" className="btn-primary">
            Video konzultácia
          </Link>
          <Link href="http://steniclinic.sk/" target="_blank" className="btn-primary">
            Konzultácia na klinike
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold">Máš nejaké otázky?</h2>
          <div className="flex flex-col gap-4">
            <p className="">Je ti niečo nejasné? Neváhaj ma kontaktovať!</p>
            <Link href="/kontakt" className="btn-secondary">
              Kontaktuj ma!
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
