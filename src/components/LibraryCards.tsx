import { AnimatePresence, AnimateSharedLayout, m } from 'framer-motion'
import React, { Fragment, useState } from 'react'
import { Backdrop } from '../../../react-core/dist'
import libraries from '../assets/libraries.json'
import { LibraryCard } from '../components/LibraryCard'
import { Library } from '../definitions/types'
import { Dummy } from '../modules/dummy'
import { LibraryModal } from './LibraryModal'
import { LibrarySharedCard } from './LibrarySharedCard'

export function LibraryCards() {
  const [selected, setSelected] = useState<Library>(Dummy.library)
  const modalState = useState<boolean>(false)

  const onClick = (library: Library) => {
    setSelected(library)
    modalState[1](true)
  }

  const onClickClose = () => {
    setSelected(Dummy.library)
    modalState[1](false)
  }

  if (window.innerWidth >= 640)
    return (
      <AnimateSharedLayout type='crossfade'>
        {libraries.map((v: Library, k: number) => (
          <m.div key={v.name} layoutId={v.name}>
            <m.div animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.5 }} transition={{ delay: k * 0.2 }}>
              <LibraryCard {...v} onClick={() => onClick(v)} />
            </m.div>
          </m.div>
        ))}
        <AnimatePresence>
          {selected.name && (
            <div className='fixed inset-0 flex justify-center items-center z-10'>
              <m.div animate={{ opacity: 1 }} className='absolute inset-0 z-10' exit={{ opacity: 0 }} initial={{ opacity: 0 }}>
                <Backdrop onClick={onClickClose} opacity={0.75} />
              </m.div>
              <m.div
                animate={{ opacity: 1 }}
                className='absolute z-20 m-8'
                layoutId={selected.name}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                transition={{ ease: 'linear' }}
              >
                <LibrarySharedCard {...selected} onClickClose={onClickClose} />
              </m.div>
            </div>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    )

  return (
    <Fragment>
      {libraries.map((v: Library, k: number) => (
        <LibraryCard {...v} key={v.name} onClick={() => onClick(v)} />
      ))}
      <LibraryModal {...selected} state={modalState} />
    </Fragment>
  )
}
