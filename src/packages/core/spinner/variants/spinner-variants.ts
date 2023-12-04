import { cva } from 'class-variance-authority'

import { sharedColorVariants } from '@/variants/shared/colors'

const spinnerVariants = cva(['inline-block'], {
  variants: {
    variant: {
      base: ['border-t-transparent'],
      half: ['border-t-transparent', 'border-r-transparent'],
      edge: ['border-r-[3px] border-t-[3px] border-transparent'],
      ring: [],
    },
    size: {
      base: [],
      auto: [],
      icon: [],
      xs: ['h-[0.75rem]', 'h-[0.75rem]'],
      sm: ['h-[1rem]', 'h-[1rem]'],
      md: ['h-[1.25rem]', 'w-[1.25rem]'],
      lg: ['h-[1.5rem]', 'w-[1.5rem]'],
      xl: ['h-[1.75rem]', 'w-[1.75rem]'],
    },
    color: sharedColorVariants,
    duration: {
      fast: [],
      base: [],
      medium: [],
      slower: [],
      slow: [],
    },
  },
  compoundVariants: [
    {
      size: ['base', 'auto', 'icon'],
      className: ['h-5', 'h-5'],
    },
    {
      variant: ['base', 'half', 'ring'],
      className: 'border-[3px]',
    },
    {
      variant: ['base', 'half', 'edge', 'ring'],
      className: 'rounded-full',
    },
    {
      variant: ['ring'],
      className: 'border-x-mode-accent border-b-mode-accent',
    },
    {
      color: 'mode',
      variant: ['base'],
      className: 'border-mode',
    },
    {
      color: 'mode-contrast',
      variant: ['base'],
      className: 'border-mode-contrast',
    },
    {
      color: 'mode-accent',
      variant: ['base'],
      className: 'border-mode-accent',
    },
    {
      color: 'mode-contrast-accent',
      variant: ['base'],
      className: 'border-mode-contrast-accent',
    },
    {
      color: 'primary',
      variant: ['base'],
      className: 'border-primary',
    },
    {
      color: 'secondary',
      variant: ['base'],
      className: 'border-secondary',
    },
    {
      color: 'destructive',
      variant: ['base'],
      className: 'border-destructive',
    },
    {
      color: 'success',
      variant: ['base'],
      className: 'border-success',
    },
    {
      color: 'warning',
      variant: ['base'],
      className: 'border-warning',
    },
    {
      color: 'info',
      variant: ['base'],
      className: 'border-info',
    },
    {
      color: 'help',
      variant: ['base'],
      className: 'border-help',
    },
    {
      color: 'brand',
      variant: ['base'],
      className: 'border-brand',
    },
    {
      color: 'mode',
      variant: ['half'],
      className: ['border-b-mode', 'border-L-mode'],
    },
    {
      color: 'mode-contrast',
      variant: ['half'],
      className: ['border-b-mode-contrast', 'border-L-mode-contrast'],
    },
    {
      color: 'mode-accent',
      variant: ['half'],
      className: ['border-b-mode-accent', 'border-L-mode-accent'],
    },
    {
      color: 'mode-contrast-accent',
      variant: ['half'],
      className: ['border-b-mode-contrast-accent', 'border-l-mode-contrast-accent'],
    },
    {
      color: 'primary',
      variant: ['half'],
      className: ['border-b-primary', 'border-l-primary'],
    },
    {
      color: 'secondary',
      variant: ['half'],
      className: ['border-b-secondary', 'border-l-secondary'],
    },
    {
      color: 'destructive',
      variant: ['half'],
      className: ['border-b-destructive', 'border-l-destructive'],
    },
    {
      color: 'success',
      variant: ['half'],
      className: ['border-b-success', 'border-l-success'],
    },
    {
      color: 'warning',
      variant: ['half'],
      className: ['border-b-warning', 'border-l-warning'],
    },
    {
      color: 'info',
      variant: ['half'],
      className: ['border-b-info', 'border-l-info'],
    },
    {
      color: 'help',
      variant: ['half'],
      className: ['border-b-help', 'border-l-help'],
    },
    {
      color: 'brand',
      variant: ['half'],
      className: ['border-b-brand', 'border-l-brand'],
    },
    {
      color: 'primary',
      variant: 'edge',
      className: 'border-t-primary',
    },
    {
      color: 'secondary',
      variant: 'edge',
      className: 'border-t-secondary',
    },
    {
      color: 'destructive',
      variant: 'edge',
      className: 'border-t-destructive',
    },
    {
      color: 'success',
      variant: 'edge',
      className: 'border-t-success',
    },
    {
      color: 'warning',
      variant: 'edge',
      className: 'border-t-warning',
    },
    {
      color: 'info',
      variant: 'edge',
      className: 'border-t-info',
    },
    {
      color: 'help',
      variant: 'edge',
      className: 'border-t-help',
    },
    {
      color: 'brand',
      variant: 'edge',
      className: 'border-t-brand',
    },
    {
      color: 'mode',
      variant: ['ring'],
      className: 'border-t-mode',
    },
    {
      color: 'mode-contrast',
      variant: ['ring'],
      className: 'border-t-mode-contrast',
    },
    {
      color: 'mode-accent',
      variant: ['ring'],
      className: 'border-t-mode-accent',
    },
    {
      color: 'mode-contrast-accent',
      variant: ['ring'],
      className: 'border-t-mode-contrast-accent',
    },
    {
      color: 'primary',
      variant: ['ring'],
      className: 'border-t-primary',
    },
    {
      color: 'secondary',
      variant: ['ring'],
      className: 'border-t-secondary',
    },
    {
      color: 'destructive',
      variant: ['ring'],
      className: 'border-t-destructive',
    },
    {
      color: 'success',
      variant: ['ring'],
      className: 'border-t-success',
    },
    {
      color: 'warning',
      variant: ['ring'],
      className: 'border-t-warning',
    },
    {
      color: 'info',
      variant: ['ring'],
      className: 'border-t-info',
    },
    {
      color: 'help',
      variant: ['ring'],
      className: 'border-t-help',
    },
    {
      color: 'brand',
      variant: ['ring'],
      className: 'border-t-brand',
    },
    {
      duration: 'fast',
      className: 'animate-[spin_500ms_linear_infinite]',
    },
    {
      duration: 'base',
      className: 'animate-[spin_750ms_linear_infinite]',
    },
    {
      duration: 'medium',
      className: 'animate-[spin_1000ms_linear_infinite]',
    },
    {
      duration: 'slower',
      className: 'animate-[spin_1250ms_linear_infinite]',
    },
    {
      duration: 'slow',
      className: 'animate-[spin_1500ms_linear_infinite]',
    },
  ],
  defaultVariants: {
    color: 'primary',
    variant: 'base',
    size: 'base',
    duration: 'base',
  },
})

export { spinnerVariants }
