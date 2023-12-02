const lazyImportDomAnimation = async () => {
  const { domAnimation } = await import('@/lib/framer-motion/dom-animation')

  return domAnimation
}

const lazyImportDomMax = async () => {
  const { domMax } = await import('@/lib/framer-motion/dom-max')

  return domMax
}

export { lazyImportDomAnimation, lazyImportDomMax }
