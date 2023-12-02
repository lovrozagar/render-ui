import { LazyMotion } from 'framer-motion'
import React from 'react'

import { lazyImportDomMax } from '@/lib/framer-motion/lazy-features'

type LazyMotionDomMaxProviderProps = {
  children: React.ReactNode
}

const LazyMotionDomMaxProvider = ({ children }: LazyMotionDomMaxProviderProps) => {
  return (
    <LazyMotion features={lazyImportDomMax} strict>
      {children}
    </LazyMotion>
  )
}

export { LazyMotionDomMaxProvider }
