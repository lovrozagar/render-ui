import React from 'react'

import { Ref } from '@/types/react'

type HandleRefProps<T extends Element> = {
  element: T | null
  ref: Ref<T> | undefined
}

type RefCallbackProps<T extends Element> = {
  element: T | null
  refs: Array<Ref<T> | undefined>
}

const handleRef = <T extends Element>(props: HandleRefProps<T>) => {
  const { element, ref } = props

  if (!element || !ref) return

  if (typeof ref === 'function') {
    ref(element)
    return
  }

  ref.current = element
}

const refCallback = <T extends Element>(props: RefCallbackProps<T>) => {
  const { element, refs } = props

  if (refs) refs.filter(Boolean).forEach((ref) => handleRef({ element, ref }))
}

const useRefCallback = <T extends Element>(refs: RefCallbackProps<T>['refs']) => {
  const callback = React.useCallback(
    (element: T) => {
      refCallback({ element, refs: refs })
    },
    [refs],
  )

  return callback
}

export { useRefCallback, refCallback }
export type { RefCallbackProps }
