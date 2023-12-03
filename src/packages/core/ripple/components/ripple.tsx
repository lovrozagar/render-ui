'use client'

import { useReducedMotion } from 'framer-motion'
import React from 'react'

import { RippleRipples } from '@/packages/core/ripple/components/ripple-ripples'
import { RippleRootProps, RippleRootRef } from '@/packages/core/ripple/types/ripple-root'

const RippleRoot = React.forwardRef<RippleRootRef, RippleRootProps>((props, ref) => {
  const { disabled, ...otherProps } = props
  const isReducedMotion = useReducedMotion()

  return <>{disabled || isReducedMotion ? null : <RippleRipples ref={ref} {...otherProps} />}</>
})

RippleRoot.displayName = 'Ripple'

export { RippleRoot as Ripple }
