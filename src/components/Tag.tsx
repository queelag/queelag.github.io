import { ObjectUtils } from '@queelag/core'
import { ReactUtils, TagProps, TagStore, TAG_PROPS_KEYS, TAG_STORE_KEYS, useComponentStore } from '@queelag/react-core'
import React from 'react'

export function Tag(props: TagProps) {
  const store = useComponentStore(TagStore, props, TAG_STORE_KEYS)

  return (
    <div
      {...ObjectUtils.omit(props, TAG_PROPS_KEYS)}
      className={ReactUtils.joinClassNames(
        'flex justify-center items-center px-2 h-6 border rounded-sm bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700',
        props.className
      )}
      id={store.id}
    >
      <span className='text-xs lowercase dark:text-white'>{props.text}</span>
    </div>
  )
}
