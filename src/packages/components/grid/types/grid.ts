import { Primitive as primitive } from '@radix-ui/react-primitive'

import { gridVariants } from '@/packages/components/grid/variants/grid-variants'
import { RequiredCVAVariantProps } from '@/packages/types/required-cva-variant-props'
import { Simplify } from '@/packages/types/simplify'

type GridPrimitive = typeof primitive.div

type GridRef = React.ElementRef<GridPrimitive>

type GridPrimitiveProps = React.ComponentPropsWithoutRef<GridPrimitive>

type GridRenderUIProps = RequiredCVAVariantProps<typeof gridVariants> & {
  cols?: string
  colsAutoFit?: string
  colsAutoFill?: string
  xsCols?: string
  xsColsAutoFit?: string
  xsColsAutoFill?: string
  smCols?: string
  smColsAutoFit?: string
  smColsAutoFill?: string
  mdCols?: string
  mdColsAutoFit?: string
  mdColsAutoFill?: string
  lgCols?: string
  lgColsAutoFit?: string
  lgColsAutoFill?: string
  xlCols?: string
  xlColsAutoFit?: string
  xlColsAutoFill?: string
  xxlCols?: string
  xxlColsAutoFit?: string
  xxlColsAutoFill?: string
}

type GridProps = Simplify<GridPrimitiveProps & GridRenderUIProps>

export type { GridProps, GridRef }
