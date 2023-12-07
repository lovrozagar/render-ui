type SplitPropsReturnType<T> = [Partial<T>, Partial<T>];

const splitProps = <T extends object>(props: T, keys: (keyof T)[]) =>
  keys.reduce<SplitPropsReturnType<T>>(
    (previousValue, currentValue) => {
      const [target, source] = previousValue
      const key = currentValue

      if (source[key] !== undefined) {
        target[key] = source[key]
      }

      delete source[key]

      return [target, source]
    },
    [{}, { ...props }] as [Partial<T>, Partial<T>],
  )

export { splitProps }
