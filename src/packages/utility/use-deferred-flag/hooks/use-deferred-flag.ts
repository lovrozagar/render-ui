import React from 'react'

const useDeferredFlag = () => {
  const flag = React.useRef(false)
  const hasBeenDeffered = React.useRef(false)

  const raise = React.useCallback(() => {
    if (hasBeenDeffered.current) {
      flag.current = true
    } else {
      hasBeenDeffered.current = true
    }
  }, [])

  const reset = React.useCallback(() => {
    flag.current = false
    hasBeenDeffered.current = false
  }, [])

  return { value: flag.current, hasBeenDeffered, raise, reset }
}

export { useDeferredFlag }
