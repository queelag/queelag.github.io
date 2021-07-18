import { ObjectUtils, ReactUtils, StoreUtils } from '@queelag/core'
import { ButtonProps, ButtonStore, BUTTON_PROPS_KEYS, BUTTON_STORE_KEYS, ShapeUtils, useForceUpdate } from '@queelag/react-core'
import React, { useEffect, useMemo } from 'react'

export function Button(props: ButtonProps) {
  const update = useForceUpdate()
  const store = useMemo(() => new ButtonStore({ ...props, update }), [])

  useEffect(() => StoreUtils.updateKeys(store, props, BUTTON_STORE_KEYS), ObjectUtils.pickToArray(props, BUTTON_STORE_KEYS))

  return (
    <button
      {...ObjectUtils.omit(props, BUTTON_PROPS_KEYS)}
      className={ReactUtils.joinClassNames(
        'flex justify-center items-center gap-2 rounded-sm transition duration-200',
        props.className,
        store.isShapeRectangle && 'px-6 h-10',
        store.isShapeSquare && 'w-10 h-10',
        store.isShapeSquircle && 'w-10 h-10',
        store.isTypeOutline && 'border border-gray-800 hover:bg-gray-900 active:bg-gray-800 text-white',
        store.isTypeSecondary && 'bg-black text-white hover:bg-gray-800 active:bg-gray-700',
        store.isTypePrimary && 'bg-fuchsia-500 hover:bg-fuchsia-600 active:bg-fuchsia-400 text-white'
      )}
      onClick={store.onClick}
      style={{ ...props.style, ...ShapeUtils.findStyle(store.shape, 40) }}
    >
      {props.icon && <props.icon size={store.isShapeRectangle ? 12 : 16} thickness={2} />}
      {props.title && <span className='uppercase text-sm font-bold'>{props.title}</span>}
    </button>
  )
}
