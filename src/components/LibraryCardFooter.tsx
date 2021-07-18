import { ButtonType, Shape } from '@queelag/react-core'
import { IconGithub, IconLayers } from '@queelag/react-feather-icons'
import React from 'react'
import { Button } from './Button'

interface Props {
  name: string
}

export function LibraryCardFooter(props: Props) {
  return (
    <div className='flex justify-end gap-2 pt-4'>
      <a href={`https://github.com/queelag/${props.name}`} tabIndex={-1} target='_blank'>
        <Button className='sm:!hidden' icon={IconGithub} shape={Shape.SQUARE} type={ButtonType.OUTLINE} />
        <Button className='!hidden sm:!flex' icon={IconGithub} shape={Shape.RECTANGLE} title='explore the repo' type={ButtonType.OUTLINE} />
      </a>
      <a href={`https://queelag.github.io/${props.name}`} tabIndex={-1} target='_blank'>
        <Button icon={IconLayers} shape={Shape.RECTANGLE} title='read the docs' type={ButtonType.PRIMARY} />
      </a>
    </div>
  )
}
