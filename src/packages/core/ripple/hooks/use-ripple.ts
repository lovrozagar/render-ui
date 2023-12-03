'use client'

import { AnimationDefinition, HTMLMotionProps } from 'framer-motion'
import React from 'react'

import {
  RIPPLE_ANIMATION_END_DEFAULT_SCALE,
  RIPPLE_ANIMATION_END_OPACITY,
  RIPPLE_ANIMATION_START_SCALE,
  RIPPLE_DEFAULT_OPACITY,
  RIPPLE_RIPPLE_BASE_STYLE,
} from '@/packages/core/ripple/constants/constants'
import {
  RippleRipple,
  RippleRipplesProps,
  RippleRipplesRef,
} from '@/packages/core/ripple/types/ripple-ripples'
import { getRippleDuration } from '@/packages/core/ripple/utils/utils'
import { cn } from '@/packages/utility/cn'

const useRipple = (
  props: Omit<RippleRipplesProps, 'subLayerProps'>,
  ref: React.ForwardedRef<RippleRipplesRef>,
) => {
  const {
    duration: durationProp,
    scale: scaleProp,
    transition: transitionProp,
    initial: initialProp,
    animate: animateProp,
    exit: exitProp,
    style: styleProp,
    className: classNameProp,
    onAnimationComplete: onAnimationCompleteProp,
    ...otherProps
  } = props

  const [ripples, setRipples] = React.useState<RippleRipple[]>([])

  const addRipple = React.useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const trigger = event.currentTarget
    const size = Math.max(trigger.clientWidth, trigger.clientHeight)
    const rect = trigger.getBoundingClientRect()
    // @TODO, make a id util compatible with server components
    const rippleKey = crypto.randomUUID()

    setRipples((previousRipples) => [
      ...previousRipples,
      {
        key: rippleKey,
        size,
        x: event.clientX - rect.x - size / 2,
        y: event.clientY - rect.y - size / 2,
      },
    ])

    return rippleKey
  }, [])

  const clearRipple = React.useCallback((key: React.Key) => {
    setRipples((previousState) => previousState.filter((ripple) => ripple.key !== key))
  }, [])

  const onAnimationComplete = React.useCallback(
    (ripple: RippleRipple, definition: AnimationDefinition) => {
      clearRipple(ripple.key)
      if (onAnimationCompleteProp) onAnimationCompleteProp(definition)
    },
    [clearRipple, onAnimationCompleteProp],
  )

  const getRippleRipplesProps = React.useCallback(
    (ripple: RippleRipple) => {
      const duration = durationProp ?? getRippleDuration(ripple.size)
      const scale = scaleProp ?? RIPPLE_ANIMATION_END_DEFAULT_SCALE

      const initial = initialProp ?? {
        transform: `scale(${RIPPLE_ANIMATION_START_SCALE})`,
        opacity: RIPPLE_DEFAULT_OPACITY,
      }

      const animate = animateProp ?? {
        transform: `scale(${scale})`,
        opacity: RIPPLE_ANIMATION_END_OPACITY,
      }

      const exit = exitProp ?? { opacity: RIPPLE_ANIMATION_END_OPACITY }

      const transition = { duration, ...transitionProp }

      const style = {
        ...RIPPLE_RIPPLE_BASE_STYLE,
        top: ripple.y,
        left: ripple.x,
        width: `${ripple.size}px`,
        height: `${ripple.size}px`,
        ...styleProp,
      }

      const className = cn('bg-current', classNameProp)

      const props: HTMLMotionProps<'span'> & { ref: React.ForwardedRef<HTMLSpanElement> } = {
        ref,
        initial,
        animate,
        exit,
        transition,
        style,
        className,
        onAnimationComplete: (definition: AnimationDefinition) =>
          onAnimationComplete(ripple, definition),
        ...otherProps,
      }

      return props
    },
    [
      ref,
      animateProp,
      durationProp,
      exitProp,
      initialProp,
      otherProps,
      scaleProp,
      styleProp,
      classNameProp,
      transitionProp,
      onAnimationComplete,
    ],
  )

  return { ripples, addRipple, clearRipple, getRippleRipplesProps }
}

export { useRipple }