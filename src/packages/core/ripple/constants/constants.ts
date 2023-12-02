const RIPPLE_ANIMATION_END_OPACITY = 0
const RIPPLE_ANIMATION_START_SCALE = 0
const RIPPLE_ANIMATION_END_DEFAULT_SCALE = 2

const RIPPLE_DEFAULT_OPACITY = 0.35
const RIPPLE_DEFAULT_DURATION_MULTIPLIER = 1
const RIPPLE_DEFAULT_SCALE_MULTIPLIER = 1

const RIPPLE_RIPPLE_BASE_STYLE = {
  backgroundColor: 'current',
  position: 'absolute',
  borderRadius: '100%',
  transformOrigin: 'center',
  pointerEvents: 'none',
  zIndex: '0',
} as const

export {
  RIPPLE_ANIMATION_END_OPACITY,
  RIPPLE_ANIMATION_START_SCALE,
  RIPPLE_ANIMATION_END_DEFAULT_SCALE,
  RIPPLE_DEFAULT_OPACITY,
  RIPPLE_DEFAULT_DURATION_MULTIPLIER,
  RIPPLE_DEFAULT_SCALE_MULTIPLIER,
  RIPPLE_RIPPLE_BASE_STYLE,
}
