import React from 'react'

import { ButtonProps, ButtonRef } from '@/packages/core/button/types/types'
import { buttonVariants } from '@/packages/core/button/variants/button-variants'
import { getNonStaticPositionStyles } from '@/packages/utility/get-non-static-position-styles'
import { ariaHandlerPropsSelector, useAriaHandlers } from '@/packages/utility/use-aria-handlers'

const useButton = (
  props: Omit<ButtonProps, 'children' | 'hasRipple'>,
  ref: React.ForwardedRef<ButtonRef>,
) => {
  const { ariaHandlerHookProps, otherNonAriaHandlerProps } = ariaHandlerPropsSelector(props)
  const ariaProps = useAriaHandlers(ariaHandlerHookProps, ref)

  const {
    className,
    style,
    variant,
    size,
    shadow,
    shape,
    color,
    hasDefaultStyles,
    hasFocusStyles,
    hasHoverStyles,
    hasKeyboardFocusStyles,
    hasPressedStyles,
    hasRingOnAnyFocus,
  } = otherNonAriaHandlerProps

  const variantClassName = buttonVariants({
    variant,
    color,
    size,
    shadow,
    shape,
    hasDefaultStyles,
    hasFocusStyles,
    hasHoverStyles,
    hasKeyboardFocusStyles,
    hasPressedStyles,
    hasRingOnAnyFocus,
    className,
  })

  const { nonStaticClassName, nonStaticStyle } = getNonStaticPositionStyles(variantClassName, style)

  const buttonProps = {
    className: nonStaticClassName,
    style: nonStaticStyle,
    ...ariaProps,
    ...otherNonAriaHandlerProps,
  }

  return buttonProps
}

export { useButton }
