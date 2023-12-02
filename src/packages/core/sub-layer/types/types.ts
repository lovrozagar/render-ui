import React from 'react'

import { Primitive as primitive } from '@radix-ui/react-primitive'

type SubLayerRef = HTMLSpanElement
type SubLayerProps = React.ComponentPropsWithoutRef<typeof primitive.span>

export type { SubLayerRef, SubLayerProps }
