import React from 'react'
import {
  FocusProps,
  FocusRingProps,
  HoverProps,
  LongPressProps,
  PressHookProps,
  mergeProps,
  useFocus,
  useFocusRing,
  useHover,
  useLongPress,
  usePress,
} from 'react-aria'

import { UseAriaHandlersProps } from '@/types/aria'
import { OrUndefined } from '@/types/ts-utils'

const useAriaHandlers = <T extends HTMLElement>(
  props: OrUndefined<UseAriaHandlersProps>,
  ref: React.ForwardedRef<T | null> | undefined,
) => {
  const {
    // PRESS
    isPressDisabled,
    isPressed: isPressedControlled,
    preventFocusOnPress,
    allowTextSelectionOnPress,
    shouldCancelOnPointerExit,
    onPress,
    onPressStart,
    onPressEnd,
    onPressChange,
    onPressUp,
    // LONG PRESS
    isLongPressDisabled,
    longPressTreshold,
    longPressAccessibilityDescription,
    onLongPressStart,
    onLongPress,
    onLongPressEnd,
    // FOCUS
    isFocusDisabled,
    onFocus,
    onFocusChange,
    onBlur,
    // FOCUS WITHIN
    isTextInput,
    isFocusWithin,
    // HOVER
    isHoverDisabled,
    onHoverStart,
    onHoverChange,
    onHoverEnd,
  } = props

  // hooks propeties are asserted due to the decision to keep exactOptionalPropertyTypes: true - TS rule

  const [isKeyboardPressed, setIsKeyboardPressed] = React.useState(false)
  const { pressProps, isPressed } = usePress({
    ref: ref,
    isPressed: isPressedControlled,
    preventFocusOnPress,
    allowTextSelectionOnPress,
    shouldCancelOnPointerExit,
    isDisabled: isPressDisabled,
    onPress,
    onPressChange,
    onPressUp,
    onPressStart: (event) => {
      if (event.pointerType === 'keyboard') {
        setIsKeyboardPressed(true)
      }
      if (onPressStart) onPressStart(event)
    },
    onPressEnd: (event) => {
      if (event.pointerType === 'keyboard') {
        setIsKeyboardPressed(false)
      }
      if (onPressEnd) onPressEnd(event)
    },
  } as PressHookProps)

  const { longPressProps } = useLongPress({
    isDisabled: isLongPressDisabled,
    threshold: longPressTreshold,
    accessibilityDescription: longPressAccessibilityDescription,
    onLongPressStart,
    onLongPressEnd,
    onLongPress,
  } as LongPressProps)

  const { focusProps } = useFocus({
    isDisabled: isFocusDisabled,
    onFocus,
    onBlur,
    onFocusChange,
  } as FocusProps)

  const {
    focusProps: focusVisibleProps,
    isFocusVisible,
    isFocused,
  } = useFocusRing({
    isTextInput,
    within: isFocusWithin,
  } as FocusRingProps)

  const { hoverProps, isHovered } = useHover({
    isDisabled: isHoverDisabled,
    onHoverStart,
    onHoverChange,
    onHoverEnd,
  } as HoverProps)

  const ariaHandlerProps = React.useMemo(
    () => mergeProps(pressProps, longPressProps, focusProps, focusVisibleProps, hoverProps),
    [pressProps, longPressProps, focusProps, focusVisibleProps, hoverProps],
  )

  const ariaHandlerAriaProps = React.useMemo(
    () => ({
      'aria-pressed': isPressed,
    }),
    [isPressed],
  )

  const ariaHandlerDatasetProps = React.useMemo(
    () => ({
      'data-pressed': isPressed,
      'data-keyboard-pressed': isKeyboardPressed,
      'data-hover': isHovered,
      'data-focus': isFocused,
      'data-focus-visible': isFocusVisible,
    }),
    [isPressed, isKeyboardPressed, isHovered, isFocused, isFocusVisible],
  )

  const ariaProps = { ...ariaHandlerProps, ...ariaHandlerAriaProps, ...ariaHandlerDatasetProps }

  return ariaProps
}

export { useAriaHandlers }
