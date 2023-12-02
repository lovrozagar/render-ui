import React from 'react'

import { SUB_LAYER_DEFAULT_STYLE } from '@/packages/core/sub-layer/constants/constants'
import { SubLayerProps, SubLayerRef } from '@/packages/core/sub-layer/types/types'
import { getSubLayerStyle } from '@/packages/core/sub-layer/utils/utils'
import { useRefCallback } from '@/packages/utility/use-ref-callback'

const useSubLayer = (
  props: Omit<SubLayerProps, 'children'>,
  externalRef: React.ForwardedRef<SubLayerRef>,
) => {
  const { style: styleProp, ...otherProps } = props

  const internalRef = React.useRef<HTMLSpanElement>(null)
  const memoizedRefs = React.useMemo(() => [internalRef, externalRef], [externalRef])
  const refCallback = useRefCallback(memoizedRefs)

  const [style, setStyle] = React.useState<React.CSSProperties>(
    styleProp ?? SUB_LAYER_DEFAULT_STYLE,
  )

  React.useEffect(() => {
    const parentElement = internalRef?.current?.parentElement
    if (!parentElement) return

    const computedStyle = getComputedStyle(parentElement)
    const { borderWidth } = computedStyle
    const calculatedStyle = getSubLayerStyle(borderWidth, styleProp)

    setStyle(calculatedStyle)
  }, [styleProp, internalRef])

  const subLayerProps: Omit<SubLayerProps, 'children'> & {
    ref: (element: HTMLSpanElement) => void
  } = {
    ref: refCallback,
    style: style,
    ...otherProps,
  }

  return subLayerProps
}

export { useSubLayer }
