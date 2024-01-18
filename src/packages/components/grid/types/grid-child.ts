import { Primitive as primitive } from '@radix-ui/react-primitive'
import React from 'react'

import { gridChildVariants } from '@/packages/components/grid/variants/grid-child-variants'
import { RequiredCVAVariantProps } from '@/packages/utils/types/required-cva-variant-props'

type GridChildRef = React.ElementRef<typeof primitive.div>

type GridChildProps = React.ComponentPropsWithoutRef<typeof primitive.div> &
  RequiredCVAVariantProps<typeof gridChildVariants>

export type { GridChildProps, GridChildRef }
