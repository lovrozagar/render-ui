import React from 'react'

import { cn } from '@/packages/utils/cn'
import {
  NON_STATIC_POSITIONS,
  RELATIVE_POSITION,
  STATIC_POSITION,
} from '@/packages/utils/get-non-static-position-styles/constants/constants'

function hasNonStaticPosition(value: string) {
  return NON_STATIC_POSITIONS.some((position) => value.includes(position))
}

function getNonStaticPositionStyles(
  className: string | undefined,
  style: React.CSSProperties | undefined,
) {
  const getRelativeClassName = (classNameString: string) =>
    hasNonStaticPosition(classNameString)
      ? classNameString
      : cn(classNameString.replaceAll(STATIC_POSITION, ''), RELATIVE_POSITION)

  const nonStaticClassName = className ? getRelativeClassName(className) : RELATIVE_POSITION

  const getNonStaticStyle = () => {
    if (!className && style) {
      const isNonStatic = style.position && NON_STATIC_POSITIONS.includes(style.position)

      return isNonStatic
        ? style
        : ({ ...style, position: RELATIVE_POSITION } as React.CSSProperties)
    }

    return style
  }

  const nonStaticStyle = getNonStaticStyle()

  return { nonStaticClassName, nonStaticStyle }
}

export { getNonStaticPositionStyles }
