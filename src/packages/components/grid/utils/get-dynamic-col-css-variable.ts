import { PIXELS_PER_REM } from '@/packages/constants/constants'

const getDynamicColCSSVariable = (dynamicColValue: string | undefined) => {
  if (!dynamicColValue) return ''

  if (dynamicColValue.endsWith('rem')) {
    const valueInRem = Number.parseFloat(dynamicColValue.replace('rem', ''))
    const valueInPx = valueInRem * PIXELS_PER_REM

    return `${valueInPx}px`
  }

  return `${dynamicColValue.replaceAll('px', '')}px`
}

export { getDynamicColCSSVariable }
