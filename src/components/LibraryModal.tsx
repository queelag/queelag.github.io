import { ButtonType, Shape } from '@queelag/react-core'
import { IconGithub, IconLayers } from '@queelag/react-feather-icons'
import React from 'react'
import { Library } from '../definitions/types'
import { Button } from './Button'
import { Modal } from './Modal'

interface Props extends Library {
  state: [boolean, (v: boolean) => void]
}

export function LibraryModal(props: Props) {
  return (
    <Modal state={props.state} title={props.name}>
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
    </Modal>
  )
}
