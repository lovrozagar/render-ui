import { UseAriaHandlersProps } from '@/types/aria'

type AriaHandlerPropsSelectorProps<T extends object> = T & UseAriaHandlersProps

const ariaHandlerPropsSelector = <T extends object>(props: AriaHandlerPropsSelectorProps<T>) => {
  const {
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
    isLongPressDisabled = true,
    longPressTreshold,
    longPressAccessibilityDescription,
    onLongPressStart,
    onLongPress,
    onLongPressEnd,
    isFocusDisabled,
    onFocus,
    onFocusChange,
    onBlur,
    isTextInput,
    isFocusWithin,
    isHoverDisabled,
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    ...otherProps
  } = props

  const ariaHandlerProps = {
    isPressDisabled,
    isPressedControlled,
    preventFocusOnPress,
    allowTextSelectionOnPress,
    shouldCancelOnPointerExit,
    onPress,
    onPressStart,
    onPressEnd,
    onPressChange,
    onPressUp,
    isLongPressDisabled,
    longPressTreshold,
    longPressAccessibilityDescription,
    onLongPressStart,
    onLongPress,
    onLongPressEnd,
    isFocusDisabled,
    onFocus,
    onFocusChange,
    onBlur,
    isTextInput,
    isFocusWithin,
    isHoverDisabled,
    onHoverStart,
    onHoverChange,
    onHoverEnd,
  }

  return {
    ariaHandlerHookProps: ariaHandlerProps,
    otherNonAriaHandlerProps: otherProps,
  }
}

export { ariaHandlerPropsSelector }
