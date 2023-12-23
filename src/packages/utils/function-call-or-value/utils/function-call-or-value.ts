import { isFunction } from '@/packages/utils/is-function/utils/is-function'

function functionCallOrValue<T, A extends unknown[]>(
  valueOrFunction: T | ((...functionArgs: A) => T),
  ...args: A
): T {
  if (!isFunction(valueOrFunction)) {
    return valueOrFunction as T
  }

  return (valueOrFunction as (...functionArgs: A) => T)(...args)
}

export { functionCallOrValue }
