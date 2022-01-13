import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 body-font">
      <div className="container px-5 py-8 mx-auto flex justify-center">
        <p className="text-center">
          <strong className="font-bold p-2">UPOZORNENIE:</strong>
          Informácie z kurzu a s ním súvisiacimi materiálmi slúžia iba na informačné účely. Ich účelom nie je
          diagnostikovať, liečiť alebo nahradiť lekársku pomoc. Autorka projektu na seba neberie medicínsku a právnu
          zodpovednosť za používanie metód a odporúčaní uvedených v obsahu tohto kurzu a s ním súvisiacimi materiálmi.
        </p>
      </div>
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/" passHref>
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">ownyourcycle</span>
          </div>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} Own Your Cycle —
          <a
            href="https://www.instagram.com/ownyourcycle/"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @ownyourcycle
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="https://www.instagram.com/ownyourcycle/">Instagram</Link>
        </span>
      </div>
    </footer>
  )
}
