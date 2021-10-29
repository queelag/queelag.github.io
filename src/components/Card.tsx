import { ObjectUtils } from '@queelag/core'
import { CardProps, CARD_PROPS_KEYS, ReactUtils } from '@queelag/react-core'
import React from 'react'

export function Card(props: CardProps) {
  return (
    <div
      {...ObjectUtils.omit(props, CARD_PROPS_KEYS)}
      className={ReactUtils.joinClassNames(
        'flex flex-col p-6 space-y-4 border rounded-sm bg-gray-50 dark:bg-gray-900 border-gray-100 dark:border-gray-800',
        props.className
      )}
    >
      <span className='text-2xl dark:text-white'>{props.title}</span>
      {props.children}
    </div>
  )
}
