import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import TFH from '../assets/TFH.svg'
import TTA from '../assets/TTA.svg'
import TTC from '../assets/TTC.svg'

const KonzultaciaPage = () => {
  return (
    <>
      <Head>
        <title>Konzultácia | Own Your Cycle</title>
      </Head>
      <div className="bg-red-50 pt-12 px-2">
        <section className="container mx-auto">
          <h1 className="mt-12 text-6xl text-center font-semibold">Konzultácia</h1>
          <p className="mt-6 text-center text-2xl">Buď o krok bližšie k porozumeniu STM!</p>
          <p className="mt-6 text-center">Naplň svoj cieľ vďaka sympto-termálnej metóde.</p>

          <div className="flex justify-center mt-6">
            <Image src={TTA} alt="TTA" width={200} height={200} />
            <Image src={TTC} alt="TTC" width={200} height={200} />
            <Image src={TFH} alt="TFH" width={200} height={200} />
          </div>
          <div className="flex justify-center my-6">
            <Link href="#vyhodnotenie" passHref>
              <a className="btn-primary">Mám záujem</a>
            </Link>
          </div>
        </section>

        <section className="p-4 md:p-12 container mx-auto">
          <div className="bg-white p-12 shadow-md flex flex-wrap md:flex-nowrap">
            <div id="left-side mt-6 md:mt-12">
              <h2 className="text-4xl text-left font-semibold pr-4">Konzultácia záznamu</h2>
            </div>
            <div id="right-side mt-6 md:mt-12">
              <div className="prose mt-6 md:mt-0">
                <p>
                  <strong>Nie si si istá vlastným vyhodnotením cyklu?</strong> Vždy je dobré sa vo svojom zázname
                  uistiť, preto neváhaj využiť spoluprácu so mnou.
                </p>
                <p>
                  E-mailom ti vyhodnotím tvoj záznam (alebo opravím tvoje vyhodnotenie). Pošli mi ho v klasickej
                  záznamovej tabuľke pre STM (získaš ju odomňa ZDARMA) alebo exportovaný z aplikácie Read Your Body. Ak
                  máš k svojmu záznamu otázky, rada ti na ne odpoviem (nejde o zdravotnú konzultáciu).{' '}
                </p>
                <p>Záznam s odpoveďami na tvoje otázky ti vyhodnotím do 48 hod.</p>
              </div>
              <div className="mt-6">
                <Link href="#vyhodnotenie">
                  <a className="btn-primary">Chcem mať v cykle jasno</a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="p-4 md:p-12 container mx-auto">
          <div className="bg-white p-12 shadow-md flex flex-wrap md:flex-nowrap">
            <div id="left-side md:w-64 mt-6 md:mt-12">
              <h2 className="text-4xl text-left font-semibold pr-4">Ako to funguje?</h2>
            </div>
            <div id="right-side mt-6 md:mt-12">
              <div className="prose mt-6 md:mt-0">
                <ol>
                  <li>
                    <strong>Podpor ma</strong> jednoduchým spôsobom platby kartou.
                  </li>
                  <li>
                    <strong>Počkaj na inštrukcie</strong> na stránke po zaplatení.
                  </li>
                  <li>
                    <strong>Hneď si stiahni</strong> záznamovú tabuľku - cez stránku je možné ju otvoriť iba raz!
                  </li>
                  <li>
                    <strong>Priprav si záznam</strong> s údajmi na vyhodnotenie - buď v zázname, ktorý odomňa dostaneš,
                    alebo v zázname exportovanom z appky{' '}
                    <Link href="https://apps.apple.com/us/app/read-your-body/id1488117813">Read Your Body</Link>)
                    (nezabudni <strong>vyplniť pravú stranu</strong> klasického záznamu alebo tieto informácie dodať v
                    maili.
                  </li>
                  <li>
                    <strong>Pošli mi záznam s údajmi + tvoje otázky</strong> k záznamu na{' '}
                    <Link href="mailto:ownyourcycle@gmail.com">
                      <a>ownyourcycle@gmail.com</a>
                    </Link>
                    . Do predmetu mailu napíš &quot;KONZULTÁCIA&quot;.
                  </li>
                  <li>
                    <strong>Získaš podrobne vyhodnotený záznam</strong> aj s odpoveďami na tvoje otázky (do 48 hod.)
                  </li>
                </ol>
              </div>
              <div className="mt-6">
                <Link href="#vyhodnotenie">
                  <a className="btn-primary">Chcem konzultáciu záznamu</a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto">
          <div className="mt-12">
            <h2 className="text-4xl font-semibold text-center">Na čo nezabudnúť</h2>
            <div className="md:w-1/2 mx-auto mt-6 prose">
              <p>
                Na vyhodnotenie záznamu sú potrebné doplnkové informácie, prosím nezabudni mi ich dodať. V záznamovej
                tabuľke, ktorá ti odo mmňa zdarma príde, sa nachádzajú v pravej časti záznamu.
              </p>
              <p>
                Ak mi po zakúpení posielaš záznam z appky Read Your Body, napíš mi tieto informácie do e-mailu s tvojím
                záznamom:
              </p>
              <ul>
                <li>o koľký cyklus STM ide,</li>
                <li>miesto merania,</li>
                <li>najskorší deň vzostupu teploty za posledných 12 cyklov,</li>
                <li>najkratšia dĺžku cyklu za posledných 12 cyklov,</li>
                <li>špeciálna situácia (1. cyklus po vysadení HAK, po pôrode...).</li>
              </ul>
            </div>

            <div className="flex justify-center mt-6 ">
              <Link href="#vyhodnotenie">
                <a className="btn-primary">Pomôž mi s vyhodnotením</a>
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto" id="vyhodnotenie">
          <div className="p-8 md:p-24">
            <div className="flex flex-col md:mx-auto md:w-96 items-center bg-white p-12 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-center">Vyhodnotenie záznamu</h3>
              <div className="mt-6 text-red-500 text-lg font-semibold">Uvádzacia cena</div>
              <div className="my-6 text-4xl text-bold" id="price">
                10 €
              </div>

              <div className="prose mt-auto">
                <div className="text-center font-semibold border-b mb-3 pb-3">Získaš</div>
                <ul>
                  <li>podrobné vyhodnotenie záznamu</li>
                  <li>záznamová tabuľka zdarma</li>
                  <li>jednoduchá e-mailová komunikácia</li>
                  <li>rýchla platobná metóda</li>
                  <li>zodpovedanie otázok k záznamu</li>
                </ul>
              </div>
              <div className="mt-6">
                <Link href="https://www.buymeacoffee.com/ownyourcycle/extras">
                  <a className="btn-primary">Kúpiť</a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto">
          <div className="flex mt-6 p-12 pb-24">
            <h2 className="text-2xl font-bold p">Máš nejaké otázky?</h2>
            <div className="pl-12">
              <p className="pb-6">Je ti niečo nejasné? Neváhaj ma kontaktovať!</p>
              <Link href="/kontakt" passHref>
                <a className="btn-secondary">Kontaktuj ma!</a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default KonzultaciaPage
