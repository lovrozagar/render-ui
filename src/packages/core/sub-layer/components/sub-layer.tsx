'use client'

import React from 'react'

import { useSubLayer } from '@/packages/core/sub-layer/hooks/use-sub-layer'
import { SubLayerProps, SubLayerRef } from '@/packages/core/sub-layer/types/types'
import { Primitive as primitive } from '@radix-ui/react-primitive'

const SubLayer = React.forwardRef<SubLayerRef, SubLayerProps>((props, externalRef) => {
  const { children, ...otherProps } = props
  const subLayerProps = useSubLayer(otherProps, externalRef)

  return <primitive.span {...subLayerProps}>{children}</primitive.span>
})

SubLayer.displayName = 'SubLayer'

export { SubLayer }
