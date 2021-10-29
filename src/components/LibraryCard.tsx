import { ObjectUtils } from '@queelag/core'
import { Key } from '@queelag/react-aria'
import { HTMLDivProps, ReactUtils } from '@queelag/react-core'
import React, { KeyboardEvent } from 'react'
import { Library } from '../definitions/interfaces'
import { Card } from './Card'
import { Tag } from './Tag'

interface Props extends Library, Omit<HTMLDivProps, 'name'> {}

export function LibraryCard(props: Props) {
  const onKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case Key.ENTER:
      case Key.SPACE:
        event.preventDefault()

        // @ts-ignore
        event.currentTarget.click()
    }
  }

  return (
    <Card
      {...ObjectUtils.omit(props, ['description', 'name', 'tags'])}
      className={ReactUtils.joinClassNames(
        'cursor-pointer transition duration-200 active:scale-95 hover:border-gray-200 dark:hover:border-gray-700 focus:border-gray-200 dark:focus:border-gray-700',
        props.className
      )}
      onKeyDown={onKeyDown}
      tabIndex={0}
      title={props.name}
    >
      <span className='whitespace-pre-wrap text-gray-400 line-clamp-6'>{props.description}</span>
      <div className='flex justify-end gap-2'>
        {props.tags.map((v: string) => (
          <Tag key={v} text={v} />
        ))}
      </div>
    </Card>
  )
}
