import Head from 'next/head'
import Link from 'next/link'

const KonzultaciePage = () => {
  return (
    <>
      <Head>
        <title>Konzultácie | Own Your Cycle</title>
      </Head>
      <div className="bg-red-100 pt-12 px-2">
        <section className="container mx-auto">
          <h1 className="mt-12 text-6xl text-center font-semibold">Konzultácie</h1>
          <p className="mt-6 text-center text-2xl">Buď o krok bližšie k porozumeniu STM!</p>
          <p className="mt-6 text-center">Naplň svoj cieľ vďaka sympto-termálnej metóde.</p>
        </section>

        <section className="container mx-auto">
          <div className="flex justify-center my-6">
            <Link href="/" passHref>
              {/* <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Mám záujem o konzultáciu
            </a> */}

              <a className="bg-red-300 text-white font-bold uppercase px-5 py-3 inline-flex items-center justify-center  border border-transparent text-base ">
                Mám záujem
              </a>
            </Link>
          </div>
        </section>

        <section className="p-12 container mx-auto">
          <div className="bg-white p-12 shadow-md">
            <h2 className="mt-12 text-4xl text-left font-semibold">Konzultácia záznamu</h2>
            <div className="mt-6 w-2/3 prose">
              <p>
                <strong>Nie si si istá vlastným vyhodnotením cyklu?</strong> Ak si chceš byť istá v tom, čo sa deje v
                tvojom cykle, neváhaj využiť spoluprácu so mnou.
              </p>
              <p>
                E-mailom ti vyhodnotím tvoj záznam (alebo opravím tvoje vyhodnotenie). Pošli mi ho v klasickej
                papierovej tabuľke pre STM (získaš ju odomňa zdarma) alebo exportovaný z aplikácie Read Your Body. Ak
                máš k svojmu záznamu otázky, rada ti na ne odpoviem.{' '}
              </p>
              <p>Záznam s odpoveďami na tvoje otázky k nemu ti vyhodnotím do 48 hod.</p>
            </div>
            <div className="mt-6">
              <Link href="/">
                <a className="bg-red-300 text-white font-bold uppercase px-5 py-3 inline-flex items-center justify-center  border border-transparent text-base ">
                  Chcem mať v cykle jasno
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section className="p-12 container mx-auto">
          <div className="bg-white p-12 shadow-md flex flex-wrap md:flex-nowrap">
            <div id="left-side">
              <h2 className="text-4xl text-left font-semibold">Ako to funguje?</h2>
            </div>
            <div id="right-side">
              <p className="w-2/3 prose">
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
                    <strong>Priprav si záznam</strong> s údajmi na vyhodnotenie buď v zázname, ktorý odomňa dostaneš
                    alebo v zázname exportovanom z appky Read Your Body (nezabudni <strong>vyplniť pravú stranu</strong>{' '}
                    záznamu alebo tieto informácie dodať v maili, ak mi posielaš záznam z appky{' '}
                    <Link href="https://apps.apple.com/us/app/read-your-body/id1488117813">Read Your Body</Link>)
                  </li>
                  <li>
                    <strong>Pošli mi záznam s údajmi + otázky</strong> k záznamu, ak nejaké máš na hello@ownyourcycle.sk
                  </li>
                  <li>
                    <strong>Získaš podrobne vyhodnotený záznam</strong> aj s odpoveďami na tvoje otázky (do 48 hod.)
                  </li>
                </ol>
              </p>
              <div className="mt-6">
                <Link href="/">
                  <a className="bg-red-300 text-white font-bold uppercase px-5 py-3 inline-flex items-center justify-center  border border-transparent text-base ">
                    Chcem konzultáciu záznamu
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto">
          <div className="mt-12">
            <h2 className="text-4xl font-semibold text-center">Na čo nezabudnúť</h2>
            <p className="md:w-1/2 text-center mx-auto mt-6">
              Na vyhodnotenie záznamu sú potrebné doplnkové informácie, prosím nezabudni mi ich dodať. V prijatej
              záznamovej tabuľke sa nachádzajú v pravej časti záznamu. Ak posielaš záznam z appky Read Your Body, napíš
              mi tieto informácie do odosielaného e-mailu.
            </p>

            <div className="flex flex-col md:flex-row gap-6 mt-6">
              <div className="flex-1 bg-red-50 shadow-sm text-center flex items-center justify-center p-6">
                O koľký cyklus STM ide
              </div>
              <div className="flex-1 bg-red-50 shadow-sm text-center flex items-center justify-center p-6">
                Miesto merania
              </div>
              <div className="flex-1 bg-red-50 shadow-sm text-center flex items-center justify-center p-6">
                Najskorší deň vzostupu teploty za posledných 12 cyklov
              </div>
              <div className="flex-1 bg-red-50 shadow-sm text-center flex items-center justify-center p-6">
                Najkratšia dĺžku cyklu za posledných 12 cyklov
              </div>
              <div className="flex-1 bg-red-50 shadow-sm text-center flex items-center justify-center p-6">
                Špeciálna situácia (1. cyklus po vysadení HAK, po pôrode...)
              </div>
            </div>

            <div className="flex justify-center mt-6 ">
              <Link href="/">
                <a className="bg-red-300 text-white font-bold uppercase px-5 py-3 inline-flex items-center justify-center  border border-transparent text-base ">
                  Pomôž mi s vyhodnotením
                </a>
              </Link>
            </div>
          </div>

          <div className="p-8 md:p-24">
            <div className="flex flex-col md:mx-auto md:w-96 items-center bg-white p-12 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-center">Vyhodnotenie záznamu</h3>
              <div className="mt-6 text-red-500 text-lg">Uvádzacia cena</div>
              <div className="my-6 text-4xl text-bold" id="price">
                10 €
              </div>

              <div className="prose mt-auto">
                <div className="text-center font-semibold border-b mb-3 pb-3">Získaš</div>
                <ul>
                  <li>podrobné vyhodnotenie cyklu</li>
                  <li>záznamová tabuľka zdarma</li>
                  <li>jednoduchá e-mailová komunikácia</li>
                  <li>rýchla platobná metóda</li>
                  <li>zodpovedanie otázok k záznamu</li>
                </ul>
              </div>
              <div className="mt-6">
                <Link href="/">
                  <a className="bg-red-300 hover:bg-red-400 transition-colors text-white font-bold uppercase px-5 py-3 inline-flex items-center justify-center  border border-transparent text-base ">
                    Kúpiť
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto">
          <div className="flex mt-6 p-12">
            <h2 className="text-2xl font-bold p">Máš nejaké otázky?</h2>
            <div className="pl-12">
              <p className="pb-6">Je ti niečo nejasné? Neváhaj ma kontaktovať!</p>
              <Link href="/">
                <a className="bg-red-300 text-white font-bold uppercase px-5 py-3 inline-flex items-center justify-center  border border-transparent text-base ">
                  Kontaktuj ma!
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default KonzultaciePage
