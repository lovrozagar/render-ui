import { cva } from 'class-variance-authority'

import { sharedColorVariants } from '@/variants/shared/colors'

const buttonVariants = cva([], {
  variants: {
    variant: {
      base: [],
      ghost: [],
      blink: [],
      solid: [],
      shadow: [],
      border: [],
      fill: [],
      fade: [],
      mute: [],
      light: [],
      twilight: [],
    },
    color: sharedColorVariants,
    shadow: {
      none: [],
      sm: [],
      base: [],
      md: [],
      lg: [],
      xl: [],
      inner: [],
    },
    size: {
      xs: ['py-1', 'px-2', 'text-xs', 'font-medium'],
      sm: ['py-1.5', 'px-3', 'text-xs', 'font-medium'],
      base: ['py-1.5', 'px-4', 'text-sm', 'font-medium'],
      md: ['py-1.5', 'px-5', 'text-base', 'font-medium'],
      lg: ['py-1.5', 'px-8', 'text-lg', 'font-semibold'],
      xl: ['py-2', 'px-10', 'text-xl', 'font-semibold'],
      icon: ['p-0.5', 'min-w-[1.5rem]', 'h-fit', 'aspect-square', 'font-medium'],
      auto: ['h-auto', 'w-auto', 'p-0', 'font-medium'],
    },
    shape: {
      'inline-flex': ['inline-flex', 'items-center', 'justify-center'],
      'block': ['block h-full w-full'],
    },
    hasDefaultStyles: {
      false: [],
      true: [],
    },
    hasRingOnAnyFocus: {
      false: [],
      true: [],
    },
    hasHoverStyles: {
      false: [],
      true: [],
    },
    hasPressedStyles: {
      false: [],
      true: [],
    },
    hasFocusStyles: {
      false: [],
      true: [],
    },
    hasKeyboardFocusStyles: {
      false: [],
      true: [],
    },
  },
  compoundVariants: [
    // Defaults
    {
      hasDefaultStyles: true,
      className: [
        'group',
        'relative',
        'shadow',
        'overflow-hidden',
        'rounded',
        'transition-all',
        'duration-fast',
        'outline-none',
        'appearance-none',
        'select-none',
        'whitespace-nowrap',
        'ring-ring-color',
        'ring-offset-background',
        'subpixel-antialiased',
        'disabled:opacity-40',
        'disabled:cursor-not-allowed',
        'motion-reduce:transition-none',
        'data-[pressed=true]:scale-active-pressed-scale',
        'data-[focus-visible=true]:ring-ring-width',
        'data-[focus-visible=true]:ring-offset-offset',
      ],
    },
    {
      hasDefaultStyles: true,
      variant: ['solid', 'light', 'twilight'],
      className: 'shadow',
    },
    {
      hasDefaultStyles: true,
      variant: ['border', 'fill', 'fade'],
      className: ['border', 'shadow-sm'],
    },
    {
      hasDefaultStyles: true,
      variant: ['shadow'],
      className: 'shadow-lg',
    },
    {
      variant: ['base', 'ghost', 'blink', 'mute'],
      className: ['shadow-none'],
    },
    // Shadow prop
    {
      shadow: ['none'],
      className: 'shadow-none',
    },
    {
      shadow: ['sm'],
      className: 'shadow-sm',
    },
    {
      shadow: ['base'],
      className: 'shadow',
    },
    {
      shadow: ['md'],
      className: 'shadow-md',
    },
    {
      shadow: ['lg'],
      className: 'shadow-lg',
    },
    {
      shadow: ['xl'],
      className: 'shadow-xl',
    },
    {
      shadow: ['inner'],
      className: 'shadow-inner',
    },
    // Variant shared
    {
      variant: ['base', 'ghost', 'blink', 'border', 'fade'],
      className: 'bg-transparent',
    },
    {
      color: 'primary',
      variant: 'fade',
      className: ['shadow-neutral/10'],
    },
    // Mode variants
    {
      color: 'mode',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-mode/10'],
    },
    {
      color: 'mode',
      variant: ['shadow'],
      className: ['shadow-mode/30'],
    },
    {
      color: 'mode',
      variant: ['border', 'fill'],
      className: 'border-mode',
    },
    {
      color: 'mode',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-mode',
    },
    {
      color: 'mode',
      variant: ['solid', 'shadow'],
      className: 'text-mode-foreground',
    },
    {
      color: 'mode',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-mode/20'],
    },
    {
      color: 'mode',
      variant: 'blink',
      className: ['data-[hover=true]:bg-mode', 'data-[hover=true]:text-mode-foreground'],
    },
    {
      color: 'mode',
      variant: ['solid', 'shadow'],
      className: ['bg-mode', 'text-mode-foreground', 'data-[hover=true]:bg-mode/[85%]'],
    },
    {
      color: 'mode',
      variant: 'border',
      className: ['data-[hover=true]:bg-mode/10'],
    },
    {
      color: 'mode',
      variant: 'fill',
      className: ['data-[hover=true]:text-mode-foreground', 'data-[hover=true]:bg-mode'],
    },
    {
      color: 'mode',
      variant: 'fade',
      className: [
        'bg-mode-accent/50',
        'border-neutral/50',
        'data-[hover=true]:text-mode/[75%]',
        'data-[hover=true]:bg-mode-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'mode',
      variant: 'mute',
      className: [
        'bg-mode-accent/50',
        'data-[hover=true]:text-mode/[75%]',
        'data-[hover=true]:bg-mode-accent/[45%]',
      ],
    },
    {
      color: 'mode',
      variant: 'light',
      className: ['bg-mode/20', 'data-[hover=true]:bg-mode/30'],
    },
    {
      color: 'mode',
      variant: 'twilight',
      className: [
        'bg-mode/20',
        'data-[hover=true]:text-mode-foreground',
        'data-[hover=true]:bg-mode',
      ],
    },

    // Mode variants
    {
      color: 'mode-contrast',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-mode-contrast/10'],
    },
    {
      color: 'mode-contrast',
      variant: ['shadow'],
      className: ['shadow-mode-contrast/30'],
    },
    {
      color: 'mode-contrast',
      variant: ['border', 'fill'],
      className: 'border-mode-contrast',
    },
    {
      color: 'mode-contrast',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-mode-contrast',
    },
    {
      color: 'mode-contrast',
      variant: ['solid', 'shadow'],
      className: 'text-mode-contrast-foreground',
    },
    {
      color: 'mode-contrast',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-mode-contrast/20'],
    },
    {
      color: 'mode-contrast',
      variant: 'blink',
      className: [
        'data-[hover=true]:bg-mode-contrast',
        'data-[hover=true]:text-mode-contrast-foreground',
      ],
    },
    {
      color: 'mode-contrast',
      variant: ['solid', 'shadow'],
      className: [
        'bg-mode-contrast',
        'text-mode-contrast-foreground',
        'data-[hover=true]:bg-mode-contrast/[85%]',
      ],
    },
    {
      color: 'mode-contrast',
      variant: 'border',
      className: ['data-[hover=true]:bg-mode-contrast/10'],
    },
    {
      color: 'mode-contrast',
      variant: 'fill',
      className: [
        'data-[hover=true]:text-mode-contrast-foreground',
        'data-[hover=true]:bg-mode-contrast',
      ],
    },
    {
      color: 'mode-contrast',
      variant: 'fade',
      className: [
        'bg-mode-contrast-accent/50',
        'border-neutral/50',
        'data-[hover=true]:text-mode-contrast/[75%]',
        'data-[hover=true]:bg-mode-contrast-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'mode-contrast',
      variant: 'mute',
      className: [
        'bg-mode-contrast-accent/50',
        'data-[hover=true]:text-mode-contrast/[75%]',
        'data-[hover=true]:bg-mode-contrast-accent/[45%]',
      ],
    },
    {
      color: 'mode-contrast',
      variant: 'light',
      className: ['bg-mode-contrast/20', 'data-[hover=true]:bg-mode-contrast/30'],
    },
    {
      color: 'mode-contrast',
      variant: 'twilight',
      className: [
        'bg-mode-contrast/20',
        'data-[hover=true]:text-mode-contrast-foreground',
        'data-[hover=true]:bg-mode-contrast',
      ],
    },

    // Mode accent variants
    {
      color: 'mode-accent',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-mode-accent/10'],
    },
    {
      color: 'mode-accent',
      variant: ['shadow'],
      className: ['shadow-mode-accent/30'],
    },
    {
      color: 'mode-accent',
      variant: ['border', 'fill'],
      className: 'border-mode-accent',
    },
    {
      color: 'mode-accent',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-mode-accent',
    },
    {
      color: 'mode-accent',
      variant: ['solid', 'shadow'],
      className: 'text-mode-accent-foreground',
    },
    {
      color: 'mode-accent',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-mode-accent/20'],
    },
    {
      color: 'mode-accent',
      variant: 'blink',
      className: [
        'data-[hover=true]:bg-mode-accent',
        'data-[hover=true]:text-mode-accent-foreground',
      ],
    },
    {
      color: 'mode-accent',
      variant: ['solid', 'shadow'],
      className: [
        'bg-mode-accent',
        'text-mode-accent-foreground',
        'data-[hover=true]:bg-mode-accent/[85%]',
      ],
    },
    {
      color: 'mode-accent',
      variant: 'border',
      className: ['data-[hover=true]:bg-mode-accent/10'],
    },
    {
      color: 'mode-accent',
      variant: 'fill',
      className: [
        'data-[hover=true]:text-mode-accent-foreground',
        'data-[hover=true]:bg-mode-accent',
      ],
    },
    {
      color: 'mode-accent',
      variant: 'fade',
      className: [
        'bg-mode-accent/50',
        'border-neutral/50',
        'data-[hover=true]:text-mode-accent/[75%]',
        'data-[hover=true]:bg-mode-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'mode-accent',
      variant: 'mute',
      className: [
        'bg-mode-accent/50',
        'data-[hover=true]:text-mode-accent/[75%]',
        'data-[hover=true]:bg-mode-accent/[45%]',
      ],
    },
    {
      color: 'mode-accent',
      variant: 'light',
      className: ['bg-mode-accent/20', 'data-[hover=true]:bg-mode-accent/30'],
    },
    {
      color: 'mode-accent',
      variant: 'twilight',
      className: [
        'bg-mode-accent/20',
        'data-[hover=true]:text-mode-accent-foreground',
        'data-[hover=true]:bg-mode-accent',
      ],
    },

    // Mode contrast accent variants
    {
      color: 'mode-contrast-accent',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-mode-contrast-accent/10'],
    },
    {
      color: 'mode-contrast-accent',
      variant: ['shadow'],
      className: ['shadow-mode-contrast-accent/30'],
    },
    {
      color: 'mode-contrast-accent',
      variant: ['border', 'fill'],
      className: 'border-mode-contrast-accent',
    },
    {
      color: 'mode-contrast-accent',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-mode-contrast-accent',
    },
    {
      color: 'mode-contrast-accent',
      variant: ['solid', 'shadow'],
      className: 'text-mode-contrast-accent-foreground',
    },
    {
      color: 'mode-contrast-accent',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-mode-contrast-accent/20'],
    },
    {
      color: 'mode-contrast-accent',
      variant: 'blink',
      className: [
        'data-[hover=true]:bg-mode-contrast-accent',
        'data-[hover=true]:text-mode-contrast-accent-foreground',
      ],
    },
    {
      color: 'mode-contrast-accent',
      variant: ['solid', 'shadow'],
      className: [
        'bg-mode-contrast-accent',
        'text-mode-contrast-accent-foreground',
        'data-[hover=true]:bg-mode-contrast-accent/[85%]',
      ],
    },
    {
      color: 'mode-contrast-accent',
      variant: 'border',
      className: ['data-[hover=true]:bg-mode-contrast-accent/10'],
    },
    {
      color: 'mode-contrast-accent',
      variant: 'fill',
      className: [
        'data-[hover=true]:text-mode-contrast-accent-foreground',
        'data-[hover=true]:bg-mode-contrast-accent',
      ],
    },
    {
      color: 'mode-contrast-accent',
      variant: 'fade',
      className: [
        'bg-mode-contrast-accent/50',
        'border-neutral/50',
        'data-[hover=true]:text-mode-contrast-accent/[75%]',
        'data-[hover=true]:bg-mode-contrast-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'mode-contrast-accent',
      variant: 'mute',
      className: [
        'bg-mode-contrast-accent/50',
        'data-[hover=true]:text-mode-contrast-accent/[75%]',
        'data-[hover=true]:bg-mode-contrast-accent/[45%]',
      ],
    },
    {
      color: 'mode-contrast-accent',
      variant: 'light',
      className: ['bg-mode-contrast-accent/20', 'data-[hover=true]:bg-mode-contrast-accent/30'],
    },
    {
      color: 'mode-contrast-accent',
      variant: 'twilight',
      className: [
        'bg-mode-contrast-accent/20',
        'data-[hover=true]:text-mode-contrast-accent-foreground',
        'data-[hover=true]:bg-mode-contrast-accent',
      ],
    },
    // Neutral variants
    {
      color: 'neutral',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-neutral/10'],
    },
    {
      color: 'neutral',
      variant: ['shadow'],
      className: ['shadow-neutral/30'],
    },
    {
      color: 'neutral',
      variant: ['border', 'fill'],
      className: 'border-neutral',
    },
    {
      color: 'neutral',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-neutral',
    },
    {
      color: 'neutral',
      variant: ['solid', 'shadow'],
      className: 'text-neutral-foreground',
    },
    {
      color: 'neutral',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-neutral/20'],
    },
    {
      color: 'neutral',
      variant: 'blink',
      className: ['data-[hover=true]:bg-neutral', 'data-[hover=true]:text-neutral-foreground'],
    },
    {
      color: 'neutral',
      variant: ['solid', 'shadow'],
      className: ['bg-neutral', 'text-neutral-foreground', 'data-[hover=true]:bg-neutral/[85%]'],
    },
    {
      color: 'neutral',
      variant: 'border',
      className: ['data-[hover=true]:bg-neutral/10'],
    },
    {
      color: 'neutral',
      variant: 'fill',
      className: ['data-[hover=true]:text-neutral-foreground', 'data-[hover=true]:bg-neutral'],
    },
    {
      color: 'neutral',
      variant: 'fade',
      className: [
        'bg-neutral-accent/50',
        'border-neutral/50',
        'data-[hover=true]:text-neutral/[75%]',
        'data-[hover=true]:bg-neutral-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'neutral',
      variant: 'mute',
      className: [
        'bg-neutral-accent/50',
        'data-[hover=true]:text-neutral/[75%]',
        'data-[hover=true]:bg-neutral-accent/[45%]',
      ],
    },
    {
      color: 'neutral',
      variant: 'light',
      className: ['bg-neutral/20', 'data-[hover=true]:bg-neutral/30'],
    },
    {
      color: 'neutral',
      variant: 'twilight',
      className: [
        'bg-neutral/20',
        'data-[hover=true]:text-neutral-foreground',
        'data-[hover=true]:bg-neutral',
      ],
    },
    // Primary variants
    {
      color: 'primary',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-primary/10'],
    },
    {
      color: 'primary',
      variant: ['shadow'],
      className: ['shadow-primary/30'],
    },
    {
      color: 'primary',
      variant: ['border', 'fill'],
      className: 'border-primary',
    },
    {
      color: 'primary',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-primary',
    },
    {
      color: 'primary',
      variant: ['solid', 'shadow'],
      className: 'text-primary-foreground',
    },
    {
      color: 'primary',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-primary/20'],
    },
    {
      color: 'primary',
      variant: 'blink',
      className: ['data-[hover=true]:bg-primary', 'data-[hover=true]:text-primary-foreground'],
    },
    {
      color: 'primary',
      variant: ['solid', 'shadow'],
      className: ['bg-primary', 'text-primary-foreground', 'data-[hover=true]:bg-primary/[85%]'],
    },
    {
      color: 'primary',
      variant: 'border',
      className: ['data-[hover=true]:bg-primary/10'],
    },
    {
      color: 'primary',
      variant: 'fill',
      className: ['data-[hover=true]:text-primary-foreground', 'data-[hover=true]:bg-primary'],
    },
    {
      color: 'primary',
      variant: 'fade',
      className: [
        'bg-mode-accent/50',
        'border-neutral/50',
        'data-[hover=true]:text-primary/[75%]',
        'data-[hover=true]:bg-mode-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'primary',
      variant: 'mute',
      className: [
        'bg-mode-accent/50',
        'data-[hover=true]:text-primary/[75%]',
        'data-[hover=true]:bg-mode-accent/[45%]',
      ],
    },
    {
      color: 'primary',
      variant: 'light',
      className: ['bg-primary/20', 'data-[hover=true]:bg-primary/30'],
    },
    {
      color: 'primary',
      variant: 'twilight',
      className: [
        'bg-primary/20',
        'data-[hover=true]:text-primary-foreground',
        'data-[hover=true]:bg-primary',
      ],
    },
    // Secondary variants
    {
      color: 'secondary',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-secondary/10'],
    },
    {
      color: 'secondary',
      variant: ['shadow'],
      className: ['shadow-secondary/30'],
    },
    {
      color: 'secondary',
      variant: ['border', 'fill'],
      className: 'border-secondary',
    },
    {
      color: 'secondary',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-secondary',
    },
    {
      color: 'secondary',
      variant: ['solid', 'shadow'],
      className: 'text-secondary-foreground',
    },
    {
      color: 'secondary',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-secondary/20'],
    },
    {
      color: 'secondary',
      variant: 'blink',
      className: ['data-[hover=true]:bg-secondary', 'data-[hover=true]:text-secondary-foreground'],
    },
    {
      color: 'secondary',
      variant: ['solid', 'shadow'],
      className: [
        'bg-secondary',
        'text-secondary-foreground',
        'data-[hover=true]:bg-secondary/[85%]',
      ],
    },
    {
      color: 'secondary',
      variant: 'border',
      className: ['data-[hover=true]:bg-secondary/10'],
    },
    {
      color: 'secondary',
      variant: 'fill',
      className: ['data-[hover=true]:text-secondary-foreground', 'data-[hover=true]:bg-secondary'],
    },
    {
      color: 'secondary',
      variant: 'fade',
      className: [
        'bg-mode-accent/50',
        'border-neutral/50',
        'data-[hover=true]:text-secondary/[75%]',
        'data-[hover=true]:bg-mode-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'secondary',
      variant: 'mute',
      className: [
        'bg-mode-accent/50',
        'data-[hover=true]:text-secondary/[75%]',
        'data-[hover=true]:bg-mode-accent/[45%]',
      ],
    },
    {
      color: 'secondary',
      variant: 'light',
      className: ['bg-secondary/20', 'data-[hover=true]:bg-secondary/30'],
    },
    {
      color: 'secondary',
      variant: 'twilight',
      className: [
        'bg-secondary/20',
        'data-[hover=true]:text-secondary-foreground',
        'data-[hover=true]:bg-secondary',
      ],
    },
    // Destructive variants
    {
      color: 'destructive',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-destructive/10'],
    },
    {
      color: 'destructive',
      variant: ['shadow'],
      className: ['shadow-destructive/30'],
    },
    {
      color: 'destructive',
      variant: ['border', 'fill'],
      className: 'border-destructive',
    },
    {
      color: 'destructive',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-destructive',
    },
    {
      color: 'destructive',
      variant: ['solid', 'shadow'],
      className: 'text-destructive-foreground',
    },
    {
      color: 'destructive',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-destructive/20'],
    },
    {
      color: 'destructive',
      variant: 'blink',
      className: [
        'data-[hover=true]:bg-destructive',
        'data-[hover=true]:text-destructive-foreground',
      ],
    },
    {
      color: 'destructive',
      variant: ['solid', 'shadow'],
      className: [
        'bg-destructive',
        'text-destructive-foreground',
        'data-[hover=true]:bg-destructive/[85%]',
      ],
    },
    {
      color: 'destructive',
      variant: 'border',
      className: ['data-[hover=true]:bg-destructive/10'],
    },
    {
      color: 'destructive',
      variant: 'fill',
      className: [
        'data-[hover=true]:text-destructive-foreground',
        'data-[hover=true]:bg-destructive',
      ],
    },
    {
      color: 'destructive',
      variant: 'fade',
      className: [
        'bg-mode-accent/50',
        'border-neutral/50',
        'data-[hover=true]:text-destructive/[75%]',
        'data-[hover=true]:bg-mode-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'destructive',
      variant: 'mute',
      className: [
        'bg-mode-accent/50',
        'data-[hover=true]:text-destructive/[75%]',
        'data-[hover=true]:bg-mode-accent/[45%]',
      ],
    },
    {
      color: 'destructive',
      variant: 'light',
      className: ['bg-destructive/20', 'data-[hover=true]:bg-destructive/30'],
    },
    {
      color: 'destructive',
      variant: 'twilight',
      className: [
        'bg-destructive/20',
        'data-[hover=true]:text-destructive-foreground',
        'data-[hover=true]:bg-destructive',
      ],
    },
    // Success variants
    {
      color: 'success',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-success/10'],
    },
    {
      color: 'success',
      variant: ['shadow'],
      className: ['shadow-success/30'],
    },
    {
      color: 'success',
      variant: ['border', 'fill'],
      className: 'border-success',
    },
    {
      color: 'success',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-success',
    },
    {
      color: 'success',
      variant: ['solid', 'shadow'],
      className: 'text-success-foreground',
    },
    {
      color: 'success',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-success/20'],
    },
    {
      color: 'success',
      variant: 'blink',
      className: ['data-[hover=true]:bg-success', 'data-[hover=true]:text-success-foreground'],
    },
    {
      color: 'success',
      variant: ['solid', 'shadow'],
      className: ['bg-success', 'text-success-foreground', 'data-[hover=true]:bg-success/[85%]'],
    },
    {
      color: 'success',
      variant: 'border',
      className: ['data-[hover=true]:bg-success/10'],
    },
    {
      color: 'success',
      variant: 'fill',
      className: ['data-[hover=true]:text-success-foreground', 'data-[hover=true]:bg-success'],
    },
    {
      color: 'success',
      variant: 'fade',
      className: [
        'bg-mode-accent/50',
        'border-neutral/50',
        'data-[hover=true]:text-success/[75%]',
        'data-[hover=true]:bg-mode-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'success',
      variant: 'mute',
      className: [
        'bg-mode-accent/50',
        'data-[hover=true]:text-success/[75%]',
        'data-[hover=true]:bg-mode-accent/[45%]',
      ],
    },
    {
      color: 'success',
      variant: 'light',
      className: ['bg-success/20', 'data-[hover=true]:bg-success/30'],
    },
    {
      color: 'success',
      variant: 'twilight',
      className: [
        'bg-success/20',
        'data-[hover=true]:text-success-foreground',
        'data-[hover=true]:bg-success',
      ],
    },
    // Warning variants
    {
      color: 'warning',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-warning/10'],
    },
    {
      color: 'warning',
      variant: ['shadow'],
      className: ['shadow-warning/30'],
    },
    {
      color: 'warning',
      variant: ['border', 'fill'],
      className: 'border-warning',
    },
    {
      color: 'warning',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-warning',
    },
    {
      color: 'warning',
      variant: ['solid', 'shadow'],
      className: 'text-warning-foreground',
    },
    {
      color: 'warning',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-warning/20'],
    },
    {
      color: 'warning',
      variant: 'blink',
      className: ['data-[hover=true]:bg-warning', 'data-[hover=true]:text-warning-foreground'],
    },
    {
      color: 'warning',
      variant: ['solid', 'shadow'],
      className: ['bg-warning', 'text-warning-foreground', 'data-[hover=true]:bg-warning/[85%]'],
    },
    {
      color: 'warning',
      variant: 'border',
      className: ['data-[hover=true]:bg-warning/10'],
    },
    {
      color: 'warning',
      variant: 'fill',
      className: ['data-[hover=true]:text-warning-foreground', 'data-[hover=true]:bg-warning'],
    },
    {
      color: 'warning',
      variant: 'fade',
      className: [
        'bg-mode-accent/50',
        'border-neutral/50',
        'data-[hover=true]:text-warning/[75%]',
        'data-[hover=true]:bg-mode-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'warning',
      variant: 'mute',
      className: [
        'bg-mode-accent/50',
        'data-[hover=true]:text-warning/[75%]',
        'data-[hover=true]:bg-mode-accent/[45%]',
      ],
    },
    {
      color: 'warning',
      variant: 'light',
      className: ['bg-warning/20', 'data-[hover=true]:bg-warning/30'],
    },
    {
      color: 'warning',
      variant: 'twilight',
      className: [
        'bg-warning/20',
        'data-[hover=true]:text-warning-foreground',
        'data-[hover=true]:bg-warning',
      ],
    },
    // Info variants
    {
      color: 'info',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-info/10'],
    },
    {
      color: 'info',
      variant: ['shadow'],
      className: ['shadow-info/30'],
    },
    {
      color: 'info',
      variant: ['border', 'fill'],
      className: 'border-info',
    },
    {
      color: 'info',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-info',
    },
    {
      color: 'info',
      variant: ['solid', 'shadow'],
      className: 'text-info-foreground',
    },
    {
      color: 'info',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-info/20'],
    },
    {
      color: 'info',
      variant: 'blink',
      className: ['data-[hover=true]:bg-info', 'data-[hover=true]:text-info-foreground'],
    },
    {
      color: 'info',
      variant: ['solid', 'shadow'],
      className: ['bg-info', 'text-info-foreground', 'data-[hover=true]:bg-info/[85%]'],
    },
    {
      color: 'info',
      variant: 'border',
      className: ['data-[hover=true]:bg-info/10'],
    },
    {
      color: 'info',
      variant: 'fill',
      className: ['data-[hover=true]:text-info-foreground', 'data-[hover=true]:bg-info'],
    },
    {
      color: 'info',
      variant: 'fade',
      className: [
        'bg-mode-accent/50',
        'border-neutral/50',
        'data-[hover=true]:text-info/[75%]',
        'data-[hover=true]:bg-mode-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'info',
      variant: 'mute',
      className: [
        'bg-mode-accent/50',
        'data-[hover=true]:text-info/[75%]',
        'data-[hover=true]:bg-mode-accent/[45%]',
      ],
    },
    {
      color: 'info',
      variant: 'light',
      className: ['bg-info/20', 'data-[hover=true]:bg-info/30'],
    },
    {
      color: 'info',
      variant: 'twilight',
      className: [
        'bg-info/20',
        'data-[hover=true]:text-info-foreground',
        'data-[hover=true]:bg-info',
      ],
    },
    // Help variants
    {
      color: 'help',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-help/10'],
    },
    {
      color: 'help',
      variant: ['shadow'],
      className: ['shadow-help/30'],
    },
    {
      color: 'help',
      variant: ['border', 'fill'],
      className: 'border-help',
    },
    {
      color: 'help',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-help',
    },
    {
      color: 'help',
      variant: ['solid', 'shadow'],
      className: 'text-help-foreground',
    },
    {
      color: 'help',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-help/20'],
    },
    {
      color: 'help',
      variant: 'blink',
      className: ['data-[hover=true]:bg-help', 'data-[hover=true]:text-help-foreground'],
    },
    {
      color: 'help',
      variant: ['solid', 'shadow'],
      className: ['bg-help', 'text-help-foreground', 'data-[hover=true]:bg-help/[85%]'],
    },
    {
      color: 'help',
      variant: 'border',
      className: ['data-[hover=true]:bg-help/10'],
    },
    {
      color: 'help',
      variant: 'fill',
      className: ['data-[hover=true]:text-help-foreground', 'data-[hover=true]:bg-help'],
    },
    {
      color: 'help',
      variant: 'fade',
      className: [
        'bg-mode-accent/50',
        'border-neutral/50',
        'data-[hover=true]:text-help/[75%]',
        'data-[hover=true]:bg-mode-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'help',
      variant: 'mute',
      className: [
        'bg-mode-accent/50',
        'data-[hover=true]:text-help/[75%]',
        'data-[hover=true]:bg-mode-accent/[45%]',
      ],
    },
    {
      color: 'help',
      variant: 'light',
      className: ['bg-help/20', 'data-[hover=true]:bg-help/30'],
    },
    {
      color: 'help',
      variant: 'twilight',
      className: [
        'bg-help/20',
        'data-[hover=true]:text-help-foreground',
        'data-[hover=true]:bg-help',
      ],
    },
    // Brand variants
    {
      color: 'brand',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-brand/10'],
    },
    {
      color: 'brand',
      variant: ['shadow'],
      className: ['shadow-brand/30'],
    },
    {
      color: 'brand',
      variant: ['border', 'fill'],
      className: 'border-brand',
    },
    {
      color: 'brand',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-brand',
    },
    {
      color: 'brand',
      variant: ['solid', 'shadow'],
      className: 'text-brand-foreground',
    },
    {
      color: 'brand',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-brand/20'],
    },
    {
      color: 'brand',
      variant: 'blink',
      className: ['data-[hover=true]:bg-brand', 'data-[hover=true]:text-brand-foreground'],
    },
    {
      color: 'brand',
      variant: ['solid', 'shadow'],
      className: ['bg-brand', 'text-brand-foreground', 'data-[hover=true]:bg-brand/[85%]'],
    },
    {
      color: 'brand',
      variant: 'border',
      className: ['data-[hover=true]:bg-brand/10'],
    },
    {
      color: 'brand',
      variant: 'fill',
      className: ['data-[hover=true]:text-brand-foreground', 'data-[hover=true]:bg-brand'],
    },
    {
      color: 'brand',
      variant: 'fade',
      className: [
        'bg-mode-accent/50',
        'border-neutral/50',
        'data-[hover=true]:text-brand/[75%]',
        'data-[hover=true]:bg-mode-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'brand',
      variant: 'mute',
      className: [
        'bg-mode-accent/50',
        'data-[hover=true]:text-brand/[75%]',
        'data-[hover=true]:bg-mode-accent/[45%]',
      ],
    },
    {
      color: 'brand',
      variant: 'light',
      className: ['bg-brand/20', 'data-[hover=true]:bg-brand/30'],
    },
    {
      color: 'brand',
      variant: 'twilight',
      className: [
        'bg-brand/20',
        'data-[hover=true]:text-brand-foreground',
        'data-[hover=true]:bg-brand',
      ],
    },
    {
      hasPressedStyles: false,
      className: [
        'data-[pressed=true]:bg-effect-off',
        'data-[pressed=true]:text-effect-off',
        'data-[pressed=true]:transform-effect-off',
        'data-[pressed=true]:translate-effect-off',
        'data-[pressed=true]:scale-effect-off',
        'data-[pressed=true]:ring-effect-off',
      ],
    },
    {
      hasHoverStyles: false,
      className: [
        'data-[hover=true]:bg-effect-off',
        'data-[hover=true]:text-effect-off',
        'data-[hover=true]:transform-effect-off',
        'data-[hover=true]:translate-effect-off',
        'data-[hover=true]:scale-effect-off',
        'data-[hover=true]:ring-effect-off',
      ],
    },
    {
      hasFocusStyles: false,
      className: [
        'data-[focus=true]:bg-effect-off',
        'data-[focus=true]:text-effect-off',
        'data-[focus=true]:transform-effect-off',
        'data-[focus=true]:translate-effect-off',
        'data-[focus=true]:scale-effect-off',
        'data-[focus=true]:ring-effect-off',
      ],
    },
    {
      hasKeyboardFocusStyles: false,
      className: [
        'data-[focus-visible=true]:bg-effect-off',
        'data-[focus-visible=true]:text-effect-off',
        'data-[focus-visible=true]:transform-effect-off',
        'data-[focus-visible=true]:translate-effect-off',
        'data-[focus-visible=true]:scale-effect-off',
        'data-[focus-visible=true]:ring-effect-off',
      ],
    },
    {
      hasRingOnAnyFocus: true,
      className: ['data-[focus=true]:ring-ring-width', 'data-[focus=true]:ring-offset-offset'],
    },
  ],
  defaultVariants: {
    color: 'mode',
    variant: 'solid',
    shape: 'inline-flex',
    size: 'base',
    hasDefaultStyles: true,
    hasPressedStyles: true,
    hasFocusStyles: true,
    hasHoverStyles: true,
    hasKeyboardFocusStyles: true,
    hasRingOnAnyFocus: false,
  },
})

export { buttonVariants }
