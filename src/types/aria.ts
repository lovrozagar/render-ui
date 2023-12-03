import {
  AriaFocusRingProps,
  FocusProps,
  HoverEvents,
  HoverProps,
  LongPressProps,
  PressEvents,
  PressProps,
} from 'react-aria'

type OverridenAriaEvent =
  | 'onClick'
  | 'onKeyDown'
  | 'onKeyUp'
  | 'onMouseDown'
  | 'onPointerDown'
  | 'onPointerUp'
  | 'onBlur'
  | 'onFocus'
  | 'onPointerEnter'
  | 'onPointerLeave'

type AriaPress = PressEvents &
  Omit<PressProps, 'isDisabled'> & {
    isPressDisabled?: boolean | undefined
  }

type AriaLongPress = Omit<
  LongPressProps,
  'isDisabled' | 'threshold' | 'accessibilityDescription'
> & {
  isLongPressDisabled?: boolean | undefined
  longPressTreshold?: number | undefined
  longPressAccessibilityDescription?: string | undefined
}

type AriaFocus = Omit<FocusProps, 'isDisabled'> & {
  isFocusDisabled?: boolean | undefined
}

type AriaFocusRing = Omit<AriaFocusRingProps, 'autoFocus' | 'within'> & {
  isFocusWithin?: boolean | undefined
}

type AriaHover = HoverEvents &
  Omit<HoverProps, 'isDisabled'> & {
    isHoverDisabled?: boolean | undefined
  }

type UseAriaHandlersProps = AriaPress & AriaLongPress & AriaFocus & AriaFocusRing & AriaHover

export type { OverridenAriaEvent, UseAriaHandlersProps }
