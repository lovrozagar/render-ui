'use client'

import { AnimatePresence, m } from 'framer-motion'
import React from 'react'

import { useRipple } from '@/packages/core/ripple/hooks/use-ripple'
import { RippleRipplesProps, RippleRipplesRef } from '@/packages/core/ripple/types/ripple-ripples'
import { SubLayer } from '@/packages/core/sub-layer'
import { LazyMotionDomAnimationProvider } from '@/packages/utility/lazy-motion-dom-animation-provider/lazy-motion-dom-animation'

const RippleRipples = React.forwardRef<RippleRipplesRef, RippleRipplesProps>((props, ref) => {
  const { subLayerProps, ...otherProps } = props

  const { ripples, internalSubLayerRef, addRippleOnClick, getRippleRipplesProps } = useRipple(
    otherProps,
    ref,
  )

  return (
    <SubLayer ref={internalSubLayerRef} {...subLayerProps} onClick={addRippleOnClick}>
      {ripples.map((ripple) => (
        <LazyMotionDomAnimationProvider key={ripple.key}>
          <AnimatePresence mode='popLayout'>
            <m.span {...getRippleRipplesProps(ripple)} />
          </AnimatePresence>
        </LazyMotionDomAnimationProvider>
      ))}
    </SubLayer>
  )
})

RippleRipples.displayName = 'RippleRipples'

export { RippleRipples }
