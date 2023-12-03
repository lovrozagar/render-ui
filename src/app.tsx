'use client'

import React from 'react'

import { Button } from '@/packages/core/button'

const App = () => {
  const [variant, setVariant] = React.useState('solid')

  return (
    <div className='grid h-screen w-full place-content-center items-center justify-center gap-3'>
      <Button color='primary' variant={variant} hasRipple>
        Button
      </Button>
      <Button color='secondary' variant={variant} hasRipple>
        Button
      </Button>
      <Button color='brand' variant={variant} hasRipple>
        Button
      </Button>
      <Button color='help' variant={variant} hasRipple>
        Button
      </Button>
      <Button color='destructive' variant={variant} hasRipple>
        Button
      </Button>
      <Button color='warning' variant={variant} hasRipple>
        Button
      </Button>
      <Button color='success' variant={variant} hasRipple>
        Button
      </Button>
      <Button color='info' variant={variant} hasRipple>
        Button
      </Button>
      <Button color='neutral' variant={variant} hasRipple>
        Button
      </Button>
      <Button color='mode' variant={variant} hasRipple>
        Button
      </Button>
      <Button color='mode-contrast' variant={variant} hasRipple>
        Button
      </Button>
      <Button color='mode-accent' variant={variant} hasRipple>
        Button
      </Button>
      <Button color='mode-contrast-accent' variant={variant} hasRipple>
        Button
      </Button>
    </div>
  )
}

export { App }
