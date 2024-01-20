'use client'

import { Primitive as primitive } from '@radix-ui/react-primitive'
import React from 'react'

import { FormEvent, FormProps, FormRef } from '@/packages/components/form/types/form'
import { cn } from '@/packages/utils/cn'

const Form = React.forwardRef<FormRef, FormProps>((props, ref) => {
  const { className, onSubmit, ...restProps } = props

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    let defaultPrevented = true

    // Create a proxy event without the preventDefault method, manually handle default prevented flag
    const proxyEvent = {
      ...event,
      preventDefault: undefined,
      defaultPrevented,
      isDefaultPrevented: () => defaultPrevented,
      allowDefault: () => {
        defaultPrevented = false
      },
    } as FormEvent

    // call external onSubmit function
    if (onSubmit) onSubmit(proxyEvent)

    // executed within the same synchronous execution context of the event handling cycle, before the browser starts the default action.
    if (defaultPrevented) {
      event.preventDefault()
    }
  }

  return (
    <primitive.form
      ref={ref}
      className={cn('render-ui-form', className)}
      onSubmit={handleSubmit}
      {...restProps}
    />
  )
})

Form.displayName = 'Form'

export { Form }
