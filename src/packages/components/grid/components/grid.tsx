import { Primitive as primitive } from '@radix-ui/react-primitive'
import React from 'react'

import { GridProps, GridRef } from '@/packages/components/grid/types/grid'
import { getGridProps } from '@/packages/components/grid/utils/get-grid-props'

const Grid = React.forwardRef<GridRef, GridProps>((props, ref) => {
  const mergedProps = getGridProps(props)

  return <primitive.div ref={ref} {...mergedProps} />
})

Grid.displayName = 'Grid'

export { Grid }
