import { getEmptyObject } from '@/utils/data-types'

const SUB_LAYER_ACCESSIBILITY_PROPS = { 'aria-hidden': 'true', 'role': 'presentation' } as const

const SUB_LAYER_BASE_STYLE = {
  position: 'absolute',
  zIndex: '0',
  top: '0',
  left: '0',
  padding: 'inherit',
  borderRadius: 'inherit',
  overflow: 'hidden',
} as const

const SUB_LAYER_DEFAULT_STYLE = getEmptyObject<React.CSSProperties>()

export { SUB_LAYER_ACCESSIBILITY_PROPS, SUB_LAYER_BASE_STYLE, SUB_LAYER_DEFAULT_STYLE }
