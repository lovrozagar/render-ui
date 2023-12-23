import { FIRST_INDEX, ONE } from '@/packages/constants/constants'
import { chain } from '@/packages/utils/chain'
import { cn } from '@/packages/utils/cn'
import {
  Props,
  PropsArgument,
  TupleTypes,
  UnionToIntersection,
} from '@/packages/utils/merge-props/types/types'
import { isClassNameProps, isEventProps } from '@/packages/utils/merge-props/utils/helpers'

function mergeProps<T extends PropsArgument[]>(...args: T): UnionToIntersection<TupleTypes<T>> {
  const result: Props = { ...args[FIRST_INDEX] }

  for (let index = ONE; index < args.length; index += ONE) {
    const props = args[index]

    for (const key in props) {
      if (Object.prototype.hasOwnProperty.call(props, key)) {
        const propA = result[key]
        const propB = props[key]

        if (isEventProps(propA, propB, key)) {
          result[key] = chain(propA, propB)
        } else if (isClassNameProps(propA, propB, key)) {
          result[key] = cn(propA as string, propB as string)
        } else {
          result[key] = propB === undefined ? propA : propB
        }
      }
    }
  }

  return result as UnionToIntersection<TupleTypes<T>>
}

export { mergeProps }
