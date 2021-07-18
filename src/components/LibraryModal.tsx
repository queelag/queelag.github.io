import React from 'react'
import { Library } from '../definitions/types'
import { LibraryCardFooter } from './LibraryCardFooter'
import { Modal } from './Modal'

interface Props extends Library {
  state: [boolean, (v: boolean) => void]
}

export function LibraryModal(props: Props) {
  return (
    <Modal description={props.description} state={props.state} title={props.name}>
      <LibraryCardFooter name={props.name} />
    </Modal>
  )
}
