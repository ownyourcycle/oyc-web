'use client'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

export const Subscribe = () => {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputElfname = useRef<any>(null)
  const inputElemail = useRef<any>(null)

  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('')

  // Verify agreement with personal data processing
  const [agree, setAgree] = useState(false)

  const subscribe = async (e: any) => {
    e.preventDefault()

    if (!agree) {
      setMessage('Pre odber newslettera je potrebný súhlas so Zásadami ochrany osobných údajov.')
      return
    }

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        fname: inputElfname.current.value,
        email: inputElemail.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage('Nastala chyba. Pravdepodobne ste už prihlásený/á alebo ste zadali nesprávny e-mail.')
      console.error(error)
      return
    }

    // 5. Clear the input value and show a success message.
    inputElfname.current.value = ''
    inputElemail.current.value = ''

    setMessage('Hurááá! 🎉 Odber prebehol úspešne.')
  }

  return (
    <form onSubmit={subscribe} className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        {/* <label htmlFor="name-input" className="font">
          Meno
        </label> */}
        <input
          id="name-input"
          name="name"
          placeholder="Krstné meno"
          ref={inputElfname}
          required
          type="text"
          className="px-2 py-2 border"
        />
      </div>
      <div className="flex items-center gap-2">
        {/* <label htmlFor="email-input" className="font">
          E-mail
        </label> */}
        <input
          id="email-input"
          name="email"
          ref={inputElemail}
          required
          type="email"
          placeholder="E-mailová adresa"
          className="px-2 py-2 border"
        />
      </div>
      <div className="mt-4 flex gap-2 items-center prose">
        <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} />
        Súhlasím so <Link href="ochrana-osobnych-udajov">Zásadami ochrany súkromia.</Link>
      </div>
      <div className="mt-4 flex flex-start">
        <button className="btn-gray" type="submit">
          Odoberať 💌
        </button>
      </div>

      <div className="mt-4 max-w-2xl">
        {message
          ? message
          : `Odoslaním formulára súhlasite s tým, že Vám môžem zasielať newsletter a za týmto účelom spracovávať Vašu e-mailovú adresu po dobu 5 rokov. Svoj súhlas môžete kedykoľvek vziať späť a odhlásiť sa pomocou odkazu na konci ktoréhokoľvek e-mailu.`}
      </div>
    </form>
  )
}
