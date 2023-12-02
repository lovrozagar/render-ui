import {
  SUB_LAYER_BASE_STYLE,
  SUB_LAYER_DEFAULT_STYLE,
} from '@/packages/core/sub-layer/constants/constants'

const getSubLayerStyle = (borderWidth: string, styleProps: React.CSSProperties | undefined) => {
  const style: React.CSSProperties = {
    height: `calc(100% + ${borderWidth} * 2)`,
    width: `calc(100% + ${borderWidth} * 2)`,
    margin: `-${borderWidth}`,
    ...SUB_LAYER_BASE_STYLE,
    ...(styleProps ?? SUB_LAYER_DEFAULT_STYLE),
  }

  return style
}

export { getSubLayerStyle }
