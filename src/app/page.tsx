'use client'

import { Dice } from '@/component/icon/icon-dice'
import { PatternDividerDesktop } from '@/component/icon/pattern-divider-desktop'
import { PatternDividerMobile } from '@/component/icon/pattern-divider-mobile'
import { useEffect, useState } from 'react'

interface Data {
  slip: Slip
}

interface Slip {
  id: number
  advice: string
}

export default function Home() {
  const [advice, setAdvice] = useState<string>('')

  const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data: Data = await res.json()
    setAdvice(data.slip.advice)
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  const handleClick = () => {
    fetchAdvice()
  }

  return (
    <main className='flex flex-col items-center justify-center min-h-screen'>
      <div className='relative bg-[#313A49] w-11/12 max-w-[550px] h-80 rounded-2xl p-5 flex flex-col justify-center items-center gap-7'>
        <h1 className='uppercase font-bold text-[#53FFA9] tracking-widest text-sm'>
          Advice #117
        </h1>
        <p className='text-2xl font-extrabold text-center md:text-3xl'>
          {advice}
        </p>
        <PatternDividerMobile className='md:hidden' />
        <PatternDividerDesktop className='hidden md:block' />
        <button
          className='bg-[#52FFA8] p-4 absolute -bottom-6 rounded-full group'
          onClick={handleClick}
        >
          <Dice className='group-hover:animate-spin' />
        </button>
      </div>
    </main>
  )
}
