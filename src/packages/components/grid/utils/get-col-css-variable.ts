import { toInt } from '@/packages/utils/to-int'

const getColCSSVariable = (colValue: string | undefined) => {
  if (!colValue) return undefined

  const parsedValue = toInt(colValue)

  if (!Number.isNaN(parsedValue)) {
    return Array.from({ length: parsedValue }).fill('1fr').join(' ')
  }

  return colValue
}

export { getColCSSVariable }
