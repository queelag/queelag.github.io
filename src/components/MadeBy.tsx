import { m } from 'framer-motion'
import React from 'react'

export function MadeBy() {
  return (
    <m.span animate={{ opacity: 1 }} className='text-xs dark:text-white' initial={{ opacity: 0 }}>
      Made with pixels by
      <a className='mx-1 hover:underline focus:underline transition duration-200' href='https://github.com/Alchemicas' target='_blank'>
        Dario Sechi
      </a>
    </m.span>
  )
}
