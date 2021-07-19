import React from 'react'
import { Library } from '../definitions/interfaces'
import { Dialog } from './Dialog'
import { LibraryCardFooter } from './LibraryCardFooter'

interface Props extends Library {
  state: [boolean, (v: boolean) => void]
}

export function LibraryDialog(props: Props) {
  return (
    <Dialog description={props.description} state={props.state} title={props.name}>
      <LibraryCardFooter name={props.name} />
    </Dialog>
  )
}
