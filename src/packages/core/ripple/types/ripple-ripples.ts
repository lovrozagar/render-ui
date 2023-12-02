import { RippleRootProps } from '@/packages/core/ripple/types/ripple-root'

type RippleRipplesRef = HTMLSpanElement

type RippleRipplesProps = Omit<RippleRootProps, 'disabled'>

type RippleRipple = {
  key: React.Key
  x: number
  y: number
  size: number
}

export type { RippleRipplesRef, RippleRipplesProps, RippleRipple }
