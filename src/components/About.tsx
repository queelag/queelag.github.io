import { Image, Shape } from '@queelag/react-core'
import { m } from 'framer-motion'
import React from 'react'
import { AnimatedSpan } from '../components/AnimatedSpan'
import { MadeBy } from './MadeBy'

export default function About() {
  return (
    <div className='h-full flex flex-col justify-between space-y-8'>
      <div className='flex flex-col space-y-8'>
        <div className='flex items-center gap-4'>
          <m.div animate={{ opacity: 1, rotate: 0, scale: 1 }} initial={{ opacity: 0, rotate: -90, scale: 0.5 }}>
            <Image alt='logo' className='bg-lime-800' shape={Shape.SQUIRCLE} size={48} source={require('../assets/logo.jpg')} />
          </m.div>
          <AnimatedSpan className='text-2xl text-white'>Queelag</AnimatedSpan>
        </div>
        <div>
          <m.span animate={{ opacity: 1 }} className='text-gray-400' initial={{ opacity: 0 }}>
            This is a personal organization where bleeding edge tools are developed daily for typescript.
            <br />
            <br />
            All of these libraries follow a strict style of coding that makes it easier and faster to write safe code.
            <br />
            <br />
            Typescript is not used loosely but it's strictly enforced to make everything more predictable.
          </m.span>
        </div>
      </div>
      <div className='hidden sm:flex justify-end'>
        <MadeBy />
      </div>
    </div>
  )
}
