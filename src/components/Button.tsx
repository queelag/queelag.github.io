import { ObjectUtils } from '@queelag/core'
import { ButtonProps, ButtonStore, BUTTON_PROPS_KEYS, BUTTON_STORE_KEYS, ReactUtils, ShapeUtils, useComponentStore } from '@queelag/react-core'
import React from 'react'

export function Button(props: ButtonProps) {
  const store = useComponentStore(ButtonStore, props, BUTTON_STORE_KEYS, 'button')

  return (
    <button
      {...ObjectUtils.omit(props, BUTTON_PROPS_KEYS)}
      className={ReactUtils.joinClassNames(
        'flex justify-center items-center gap-2 rounded-sm transition duration-200',
        props.className,
        store.isShapeRectangle && 'px-6 h-10',
        store.isShapeSquare && 'w-10 h-10',
        store.isShapeSquircle && 'w-10 h-10',
        store.isVariantOutline &&
          'border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-700 dark:text-white',
        store.isVariantSecondary && 'bg-black text-white hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-700',
        store.isVariantPrimary && 'bg-fuchsia-500 hover:bg-fuchsia-600 focus:bg-fuchsia-600 active:bg-fuchsia-400 text-white'
      )}
      onClick={store.onClick}
      style={{ ...props.style, ...ShapeUtils.findStyle(store.shape, 40) }}
    >
      {props.icon && <props.icon size={store.isShapeRectangle ? 12 : 16} thickness={2} />}
      {props.title && <span className='uppercase text-sm'>{props.title}</span>}
    </button>
  )
}
