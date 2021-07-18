import { HTMLDivProps } from '@queelag/react-core'
import React from 'react'
import { ObjectUtils, ReactUtils } from '../../../core/dist'
import { Library } from '../definitions/types'
import { Card } from './Card'
import { Tag } from './Tag'

interface Props extends Library, HTMLDivProps {}

export function LibraryCard(props: Props) {
  return (
    <Card
      {...ObjectUtils.omit(props, ['description', 'name', 'tags'])}
      className={ReactUtils.joinClassNames('cursor-pointer transition duration-200 hover:border-gray-700 active:scale-95', props.className)}
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
