'use client'

import React from 'react'

import { useButton } from '@/packages/core/button/hooks/use-button'
import { ButtonProps, ButtonRef } from '@/packages/core/button/types/types'
import { Ripple } from '@/packages/core/ripple'
import { Primitive as primitive } from '@radix-ui/react-primitive'

const Button = React.forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const { children, hasRipple = true, ...otherProps } = props

  const buttonProps = useButton(otherProps, ref)

  return (
    <primitive.button {...buttonProps}>
      {children}
      {hasRipple && <Ripple />}
    </primitive.button>
  )
})

Button.displayName = 'Button'

export { Button }
