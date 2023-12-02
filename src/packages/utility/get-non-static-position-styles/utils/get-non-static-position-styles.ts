import React from 'react'

import { cn } from '@/packages/utility/cn'
import {
  NON_STATIC_POSITIONS,
  RELATIVE_POSITION,
  STATIC_POSITION,
} from '@/packages/utility/get-non-static-position-styles/constants/constants'

const getNonStaticPositionStyles = (
  className: string | undefined,
  style: React.CSSProperties | undefined,
) => {
  let nonStaticClassName = className
  let nonStaticStyle = style

  if (!className && !style) {
    return { nonStaticClassName: RELATIVE_POSITION, nonStaticStyle }
  }

  if (className) {
    nonStaticClassName = getRelativeClassName(className)
  }

  if (!className && style) {
    const isNonStatic = style.position && NON_STATIC_POSITIONS.includes(style.position)
    nonStaticStyle = isNonStatic ? style : { ...style, position: RELATIVE_POSITION }
  }

  return { nonStaticClassName, nonStaticStyle }
}

const hasNonStaticPosition = (value: string) =>
  NON_STATIC_POSITIONS.some((position) => value.includes(position))

const getRelativeClassName = (className: string) => {
  let nonStaticClassName = className

  const isNonStaticPosition = hasNonStaticPosition(className)

  if (!isNonStaticPosition) {
    nonStaticClassName.replaceAll(STATIC_POSITION, '')
    nonStaticClassName = cn(nonStaticClassName, RELATIVE_POSITION)
  }

  return nonStaticClassName
}

export { getNonStaticPositionStyles }
