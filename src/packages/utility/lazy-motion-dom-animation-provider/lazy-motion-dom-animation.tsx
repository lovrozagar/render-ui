import { LazyMotion } from 'framer-motion'
import React from 'react'

import { lazyImportDomAnimation } from '@/lib/framer-motion/lazy-features'

type LazyMotionDomAnimationProviderProps = {
  children: React.ReactNode
}

const LazyMotionDomAnimationProvider = ({ children }: LazyMotionDomAnimationProviderProps) => {
  return (
    <LazyMotion features={lazyImportDomAnimation} strict>
      {children}
    </LazyMotion>
  )
}

export { LazyMotionDomAnimationProvider }
