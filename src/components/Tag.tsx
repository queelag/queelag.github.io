import { TagProps, TagStore, TAG_PROPS_KEYS, useForceUpdate } from '@queelag/react-core'
import React, { useMemo } from 'react'
import { ObjectUtils, ReactUtils } from '../../../core/dist'

export function Tag(props: TagProps) {
  const update = useForceUpdate()
  const store = useMemo(() => new TagStore({ ...props, update }), [])

  return (
    <div
      {...ObjectUtils.omit(props, TAG_PROPS_KEYS)}
      className={ReactUtils.joinClassNames('flex justify-center items-center px-2 h-6 border border-gray-700 bg-gray-800 rounded-sm', props.className)}
      id={store.id}
    >
      <span className='text-xs lowercase text-white'>{props.text}</span>
    </div>
  )
}
