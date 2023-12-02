const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max)
}

const getRippleDuration = (rippleSize: number) => {
  return clamp(0.01 * rippleSize, 0.2, rippleSize > 100 ? 0.675 : 0.5)
}

export { getRippleDuration }
