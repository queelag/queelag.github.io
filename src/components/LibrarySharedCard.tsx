import { AriaFocusTrap, Key } from '@queelag/react-aria'
import { IconXSquare } from '@queelag/react-feather-icons'
import React, { KeyboardEvent } from 'react'
import { Library } from '../definitions/types'
import { LibraryCardFooter } from './LibraryCardFooter'

interface Props extends Library {
  onClickClose: () => any
}

export function LibrarySharedCard(props: Props) {
  const onKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case Key.ESCAPE:
        event.preventDefault()
        props.onClickClose()
    }
  }

  return (
    <AriaFocusTrap.Root onKeyDown={onKeyDown} autoFocus restoreFocus>
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
        <LibraryCardFooter name={props.name} />
      </div>
    </AriaFocusTrap.Root>
  )
}
