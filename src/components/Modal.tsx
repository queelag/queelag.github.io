import { ObjectUtils, ReactUtils } from '@queelag/core'
import { Backdrop, ModalProps, MODAL_PROPS_KEYS } from '@queelag/react-core'
import { IconXSquare } from '@queelag/react-feather-icons'
import { AnimatePresence, m } from 'framer-motion'
import React, { Fragment } from 'react'

interface Props extends Partial<ModalProps> {
  state: [boolean, (v: boolean) => void]
}

export function Modal(props: Props) {
  const onClickClose = () => {
    props.state[1](false)
  }

  return (
    <AnimatePresence>
      {props.state[0] && (
        <Fragment>
          <div
            {...ObjectUtils.omit(props, MODAL_PROPS_KEYS)}
            className={ReactUtils.joinClassNames('fixed inset-0 z-10 flex justify-center items-center', props.className)}
          >
            <m.div animate={{ opacity: 1 }} className='absolute inset-0 z-10' exit={{ opacity: 0 }} initial={{ opacity: 0 }}>
              <Backdrop onClick={onClickClose} opacity={0.75} />
            </m.div>
            <m.div
              animate={{ opacity: 1, scale: 1 }}
              className='absolute z-20 max-w-lg flex flex-col backdrop-filter backdrop-blur-sm m-8 p-8 space-y-4 border border-gray-800 rounded-sm'
              exit={{ opacity: 0 }}
              initial={{ opacity: 0, scale: 0.5 }}
            >
              <div className='flex justify-between items-center gap-4'>
                <span className='text-2xl text-white'>{props.title}</span>
                <IconXSquare
                  className='transition duration-200 transform hover:rotate-90 active:-rotate-90 text-white cursor-pointer'
                  onClick={onClickClose}
                  size={16}
                  thickness={2}
                />
              </div>
              {props.children}
            </m.div>
          </div>
        </Fragment>
      )}
    </AnimatePresence>
  )
}
