function immutableFactory() {
  const EMPTY_OBJECT: object = {}
  const EMPTY_ARRAY: unknown[] = []

  Object.freeze(EMPTY_OBJECT)
  Object.freeze(EMPTY_ARRAY)

  const object = <T extends object>() => EMPTY_OBJECT as T
  const array = <T extends Array<unknown>>() => EMPTY_ARRAY as T

  return { object, array }
}

const immutable = immutableFactory()

export { immutable }
