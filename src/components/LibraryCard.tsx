import { ObjectUtils, ReactUtils } from '@queelag/core'
import { Key } from '@queelag/react-aria'
import { HTMLButtonProps } from '@queelag/react-core'
import React, { KeyboardEvent } from 'react'
import { Library } from '../definitions/interfaces'
import { Card } from './Card'
import { Tag } from './Tag'

interface Props extends Library, Omit<HTMLButtonProps, 'name'> {}

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
        'cursor-pointer transition duration-200 hover:border-gray-700 focus:border-gray-700 active:scale-95',
        props.className
      )}
      onKeyDown={onKeyDown}
      tabIndex={0}
      title={props.name}
    >
      <span className='whitespace-pre-wrap text-gray-500 line-clamp-6'>{props.description}</span>
      <div className='flex justify-end gap-2'>
        {props.tags.map((v: string) => (
          <Tag key={v} text={v} />
        ))}
      </div>
    </Card>
  )
}
