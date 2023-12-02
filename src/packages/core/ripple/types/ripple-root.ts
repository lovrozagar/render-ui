import { HTMLMotionProps } from 'framer-motion'

import { SubLayerProps } from '@/packages/core/sub-layer/types/types'

type RippleRootRef = HTMLSpanElement

type RippleRootProps = HTMLMotionProps<'span'> & {
  disabled?: boolean
  opacity?: number
  scale?: number
  duration?: number
  subLayerProps?: SubLayerProps
}

export type { RippleRootRef, RippleRootProps }
