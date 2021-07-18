import React from 'react'
import { ButtonType, Shape } from '../../../react-core/dist'
import { IconGithub, IconLayers, IconXSquare } from '../../../react-feather-icons/dist'
import { Library } from '../definitions/types'
import { Button } from './Button'

interface Props extends Library {
  onClickClose: () => any
}

export function LibrarySharedCard(props: Props) {
  return (
    <div className='max-w-lg flex flex-col backdrop-filter backdrop-blur-sm p-8 space-y-4 border border-gray-800 rounded-sm'>
      <div className='flex justify-between items-center gap-4'>
        <span className='text-2xl text-white'>{props.name}</span>
        <IconXSquare
          className='transition duration-200 transform hover:rotate-90 active:-rotate-90 text-white cursor-pointer'
          onClick={props.onClickClose}
          size={16}
          thickness={2}
        />
      </div>
      <span className='text-gray-400 whitespace-pre-wrap'>{props.description}</span>
      <div className='flex justify-end gap-2 pt-4'>
        <a href={`https://github.com/queelag/${props.name}`} target='_blank'>
          <Button className='sm:!hidden' icon={IconGithub} shape={Shape.SQUARE} type={ButtonType.OUTLINE} />
          <Button className='!hidden sm:!flex' icon={IconGithub} shape={Shape.RECTANGLE} title='explore the repo' type={ButtonType.OUTLINE} />
        </a>
        <a href={`https://queelag.github.io/${props.name}`} target='_blank'>
          <Button icon={IconLayers} shape={Shape.RECTANGLE} title='read the docs' type={ButtonType.PRIMARY} />
        </a>
      </div>
    </div>
  )
}
