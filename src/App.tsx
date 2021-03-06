import { Appearance, Theme } from '@queelag/react-core'
import { LazyMotion } from 'framer-motion'
import React, { lazy, Suspense } from 'react'
import { MadeBy } from './components/MadeBy'

const About = lazy(() => import('./components/About'))
const LibraryCards = lazy(() => import('./components/LibraryCards'))

Appearance.onChangeTheme = (theme: Theme) => {
  document.querySelector('html').className = theme.toLowerCase()
}
Appearance.initialize().then(() => {
  console.log(Appearance)
  // Appearance.setTheme(Theme.LIGHT)
})

export function App() {
  return (
    <LazyMotion features={() => import('./motion/features').then((v: any) => v.default)} strict>
      <div className='min-h-screen dark:bg-black flex justify-center items-center p-8'>
        <div className='max-w-screen-lg grid sm:grid-cols-3 gap-8'>
          <div className='sm:col-span-1'>
            <Suspense fallback={null}>
              <About />
            </Suspense>
          </div>
          <div className='sm:col-span-2 grid sm:grid-cols-2 gap-4 items-start'>
            <Suspense fallback={null}>
              <LibraryCards />
            </Suspense>
          </div>
          <div className='flex justify-center p-8 sm:hidden'>
            <MadeBy />
          </div>
        </div>
      </div>
    </LazyMotion>
  )
}
