import { VariantProps } from 'class-variance-authority'
import React from 'react'

import { buttonVariants } from '@/packages/core/button/variants/button-variants'
import { OverridenAriaEvent, UseAriaHandlersProps } from '@/types/aria'
import { Primitive as primitive } from '@radix-ui/react-primitive'

type ButtonRef = HTMLButtonElement

type PrimitiveButtonProps = React.ComponentPropsWithoutRef<typeof primitive.button>
type PrimitiveButtonAriaHandlerProps = Omit<PrimitiveButtonProps, OverridenAriaEvent | 'color'> &
  UseAriaHandlersProps

type ButtonProps = PrimitiveButtonAriaHandlerProps &
  VariantProps<typeof buttonVariants> & {
    hasRipple?: boolean
    isLoading?: boolean
    spinner?: React.ReactNode
  }

export type { ButtonRef, ButtonProps }
