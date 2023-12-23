import {
  ASCII_UPPERCASE_END,
  ASCII_UPPERCASE_START,
  FIRST_INDEX,
  SECOND_INDEX,
  TWO,
  ZERO,
} from '@/packages/constants/constants'

function isEventProps(propA: unknown, propB: unknown, key: string) {
  return (
    typeof propA === 'function' &&
    typeof propB === 'function' &&
    key[FIRST_INDEX] === 'o' &&
    key[SECOND_INDEX] === 'n' &&
    (key.codePointAt(TWO) ?? ZERO) >= ASCII_UPPERCASE_START &&
    (key.codePointAt(TWO) ?? ZERO) <= ASCII_UPPERCASE_END
  )
}

function isClassNameProps(propA: unknown, propB: unknown, key: string) {
  return key === 'className' && typeof propA === 'string' && typeof propB === 'string'
}

export { isClassNameProps, isEventProps }
