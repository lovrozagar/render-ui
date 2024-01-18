import { Primitive as primitive } from '@radix-ui/react-primitive'
import React from 'react'

import { GridChildProps, GridChildRef } from '@/packages/components/grid/types/grid-child'
import { gridChildVariants } from '@/packages/components/grid/variants/grid-child-variants'
import { cn } from '@/packages/utils/cn'

const GridChild = React.forwardRef<GridChildRef, GridChildProps>((props, ref) => {
  const { selfXY, selfX, selfY, rowSpan, colSpan, className, children, ...restProps } = props

  const variantClassName = gridChildVariants({ selfXY, selfX, selfY, rowSpan, colSpan })

  const mergedClassName = cn(variantClassName, className)

  return (
    <primitive.div ref={ref} className={mergedClassName} {...restProps}>
      {children}
    </primitive.div>
  )
})

GridChild.displayName = 'GridChild'

export { GridChild }
