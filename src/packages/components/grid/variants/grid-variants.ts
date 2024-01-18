import { cva } from 'class-variance-authority'

import { sharedGapVariants } from '@/variants/shared/gap'
import { sharedGapXVariants } from '@/variants/shared/gap-x'
import { sharedGapYVariants } from '@/variants/shared/gap-y'

const gridVariants = cva(['render-ui-grid'], {
  variants: {
    rows: {
      '1': ['grid-rows-1'],
      '2': ['grid-rows-2'],
      '3': ['grid-rows-3'],
      '4': ['grid-rows-4'],
      '5': ['grid-rows-5'],
      '6': ['grid-rows-6'],
      'none': ['grid-rows-none'],
    },
    autoRows: {
      auto: ['auto-rows-auto'],
      min: ['auto-rows-min'],
      max: ['auto-rows-max'],
      fr: ['auto-rows-fr'],
    },
    autoCols: {
      auto: ['auto-cols-auto'],
      min: ['auto-cols-min'],
      max: ['auto-cols-max'],
      fr: ['auto-cols-fr'],
    },

    // add grid specific stretch
    contentXY: {
      start: ['place-content-start'],
      center: ['place-content-center'],
      end: ['place-content-end'],
      between: ['place-content-between'],
      evenly: ['place-content-evenly'],
      around: ['place-content-around'],
      baseline: ['place-content-baseline'],
      stretch: ['place-content-stretch'],
    },
    contentX: {
      start: ['justify-start'],
      center: ['justify-center'],
      end: ['justify-end'],
      between: ['justify-between'],
      evenly: ['justify-evenly'],
      around: ['justify-around'],
      normal: ['justify-normal'],
    },
    contentY: {
      start: ['content-start'],
      center: ['content-center'],
      end: ['content-end'],
      between: ['content-between'],
      evenly: ['content-evenly'],
      around: ['content-around'],
      normal: ['content-normal'],
      baseline: ['content-normal'],
      stretch: ['content-stretch'],
    },
    inlineXY: {
      start: ['place-items-start'],
      center: ['place-items-center'],
      end: ['place-items-end'],
      baseline: ['place-items-baseline'],
      stretch: ['place-items-stretch'],
    },
    inlineX: {
      start: ['justify-items-start'],
      center: ['justify-items-center'],
      end: ['justify-items-end'],
      stretch: ['justify-items-stretch'],
    },
    inlineY: {
      start: ['items-start'],
      center: ['items-center'],
      end: ['items-end'],
      baseline: ['items-baseline'],
      stretch: ['items-stretch'],
    },
    gap: sharedGapVariants,
    gapX: sharedGapXVariants,
    gapY: sharedGapYVariants,
  },
  compoundVariants: [{ className: 'grid' }],
})

export { gridVariants }
