import { LazyMotion } from 'framer-motion'
import React from 'react'
import { About } from './components/About'
import { LibraryCards } from './components/LibraryCards'
import { MadeBy } from './components/MadeBy'

export function App() {
  return (
    <LazyMotion features={() => import('./motion/features').then((v: any) => v.default)}>
      <div className='min-h-screen bg-black flex justify-center items-center p-8'>
        <div className='max-w-screen-lg grid sm:grid-cols-3 gap-8'>
          <div className='sm:col-span-1'>
            <About />
          </div>
          <div className='sm:col-span-2 grid sm:grid-cols-2 gap-4 items-start'>
            <LibraryCards />
          </div>
          <div className='flex justify-center p-8 sm:hidden'>
            <MadeBy />
          </div>
        </div>
      </div>
    </LazyMotion>
  )
}
