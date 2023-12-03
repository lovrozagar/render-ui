const immutableFactory = () => {
  const EMPTY_OBJECT: object = {}
  const EMPTY_ARRAY: unknown[] = []

  Object.freeze(EMPTY_OBJECT)
  Object.freeze(EMPTY_ARRAY)

  const emptyObject = <T extends object>() => EMPTY_OBJECT as T
  const emptyArray = <T extends Array<unknown>>() => EMPTY_ARRAY as T

  return { emptyObject, emptyArray }
}

const immutable = immutableFactory()

export { immutable }
