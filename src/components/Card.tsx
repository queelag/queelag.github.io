import { ObjectUtils, ReactUtils } from '@queelag/core'
import { CardProps, CARD_PROPS_KEYS } from '@queelag/react-core'
import React from 'react'

export function Card(props: CardProps) {
  return (
    <div
      {...ObjectUtils.omit(props, CARD_PROPS_KEYS)}
      className={ReactUtils.joinClassNames('flex flex-col p-6 space-y-4 bg-gray-900 border border-gray-800 rounded-sm', props.className)}
    >
      <span className='text-2xl text-white'>{props.title}</span>
      {props.children}
    </div>
  )
}
