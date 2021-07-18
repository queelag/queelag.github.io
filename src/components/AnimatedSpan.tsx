import { HTMLSpanProps } from '@queelag/react-core'
import { m } from 'framer-motion'
import React from 'react'
import { ObjectUtils } from '../../../core/dist'

interface Props extends Omit<HTMLSpanProps, 'children'> {
  children: string
  delay?: number
}

export function AnimatedSpan(props: Props) {
  const delay: number = props.delay || 0.05

  return (
    <span {...ObjectUtils.omit(props, ['delay'])}>
      {props.children.split('').map((v: string, k: number) => (
        <m.span animate={{ opacity: 1 }} initial={{ opacity: 0 }} key={k} transition={{ delay: k * delay }}>
          {v}
        </m.span>
      ))}
    </span>
  )
}
