type AnyFunction<Argument = unknown, ReturnValue = unknown> = (...args: Argument[]) => ReturnValue

const isFunction = <T = AnyFunction>(value: unknown): value is T => typeof value === 'function'

function runIfFuction<MaybeReturnValue, FunctionArgs>(
  valueOrFunction: MaybeReturnValue | ((...functionArgs: FunctionArgs[]) => MaybeReturnValue),
  ...args: FunctionArgs[]
) {
  return isFunction<AnyFunction<FunctionArgs, MaybeReturnValue>>(valueOrFunction)
    ? valueOrFunction(...args)
    : (valueOrFunction as unknown as MaybeReturnValue)
}

export { runIfFuction }
