import { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'background': 'hsl(var(--background))',
        'foreground': 'hsl(var(--foreground))',
        'ring-color': 'hsl(var(--ring-color))',
        'mode': {
          DEFAULT: 'hsl(var(--mode))',
          foreground: 'hsl(var(--mode-foreground))',
        },
        'mode-contrast': {
          DEFAULT: 'hsl(var(--mode-contrast))',
          foreground: 'hsl(var(--mode-contrast-foreground))',
        },
        'mode-accent': {
          DEFAULT: 'hsl(var(--mode-accent))',
          foreground: 'hsl(var(--mode-accent-foreground))',
        },
        'mode-contrast-accent': {
          DEFAULT: 'hsl(var(--mode-contrast-accent))',
          foreground: 'hsl(var(--mode-contrast-accent-foreground))',
        },
        'neutral': {
          DEFAULT: 'hsl(var(--neutral))',
          foreground: 'hsl(var(--neutral-foreground))',
        },
        'primary': {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        'secondary': {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        'destructive': {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        'success': {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        'warning': {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        'info': {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))',
        },
        'help': {
          DEFAULT: 'hsl(var(--help))',
          foreground: 'hsl(var(--help-foreground))',
        },
        'brand': {
          DEFAULT: 'hsl(var(--brand))',
          foreground: 'hsl(var(--brand-foreground))',
        },
        'muted': {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        'accent': {
          DEFAULT: 'hsl(var(--accent))',
          high: 'hsl(var(--accent-high))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        'popover': {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        'card': {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderWidth: {
        DEFAULT: 'var(--border-width)',
      },
      borderRadius: {
        'largest': 'calc(var(--radius) * 1.8)',
        'extra-large': 'calc(var(--radius) * 1.6)',
        'large': 'calc(var(--radius) * 1.4)',
        'larger': 'calc(var(--radius) * 1.2)',
        'DEFAULT': 'var(--radius)',
        'smaller': 'calc(var(--radius) * 0.8)',
        'small': 'calc(var(--radius) * 0.6)',
        'extra-small': 'calc(var(--radius) * 0.4)',
        'smallest': 'calc(var(--radius) * 0.25)',
      },
      boxShadow: {
        'button-medium-primary':
          '0px 2px 20px -2px hsla(var(--primary)), 0px 0px 10px -4px hsla(var(--primary))',
        'button-medium-destructive':
          '0px 2px 20px -2px hsla(var(--destructive)), 0px 0px 10px -4px hsla(var(--destructive))',
        'button-small-primary':
          '0px 2px 10px -2px hsla(var(--primary)), 0px 0px 5px -4px hsla(var(--primary))',
        'button-extra-small-destructive':
          '0px 1px 5px -2px hsla(var(--destructive)), 0px 0px 2px -4px hsla(var(--destructive))',
      },
      ringWidth: {
        'ring-width': 'var(--ring-width)',
      },
      ringOffsetWidth: {
        DEFAULT: 'var(--ring-offset)',
        offset: 'var(--ring-offset)',
      },
      scale: {
        'active-pressed-scale': 'var(--active-pressed-scale)',
      },
      transitionProperty: {
        sizing: 'height, width, transform',
      },
      transitionDuration: {
        fast: 'var(--transition-duration-fast)',
        medium: 'var(--transition-duration-medium)',
        slow: 'var(--transition-duration-slow)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'ripple-animation': {
          from: {
            transform: 'scale(0)',
          },
          to: {
            transform: 'scale(1)',
            opacity: '0',
          },
        },
        'ripple-fill-and-hold-animation': {
          to: {
            transform: 'scale(4)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'ripple-animation': 'ripple-animation 0.5s linear forwards',
        'ripple-fill-and-hold-animation': 'ripple-fill-and-hold-animation 0.5s linear forwards',
      },
    },
  },
}

export default config
