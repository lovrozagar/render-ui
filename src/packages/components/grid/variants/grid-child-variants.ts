import { cva } from 'class-variance-authority'

import { sharedAllignSelfVariants } from '@/variants/shared/align-self'
import { sharedJustifySelfVariants } from '@/variants/shared/justify-self'
import { sharedOrderVariants } from '@/variants/shared/order'

const gridChildVariants = cva(['render-ui-grid-child'], {
  variants: {
    selfXY: {
      start: ['place-self-start'],
      center: ['place-self-center'],
      end: ['place-self-end'],
      stretch: ['place-self-stretch'],
      auto: ['place-self-auto'],
    },
    selfX: sharedJustifySelfVariants,
    selfY: sharedAllignSelfVariants,
    rowSpan: {
      'auto': ['row-auto'],
      'full': ['row-span-full'],
      '1/1': ['row-[span_1_/_span_1]'],
      '1/2': ['row-[span_1_/_span_2]'],
      '1/3': ['row-[span_1_/_span_3]'],
      '1/4': ['row-[span_1_/_span_4]'],
      '1/5': ['row-[span_1_/_span_5]'],
      '1/6': ['row-[span_1_/_span_6]'],
      '2/1': ['row-[span_2_/_span_1]'],
      '2/2': ['row-[span_2_/_span_2]'],
      '2/3': ['row-[span_2_/_span_3]'],
      '2/4': ['row-[span_2_/_span_4]'],
      '2/5': ['row-[span_2_/_span_5]'],
      '2/6': ['row-[span_2_/_span_6]'],
      '3/1': ['row-[span_3_/_span_1]'],
      '3/2': ['row-[span_3_/_span_2]'],
      '3/3': ['row-[span_3_/_span_3]'],
      '3/4': ['row-[span_3_/_span_4]'],
      '3/5': ['row-[span_3_/_span_5]'],
      '3/6': ['row-[span_3_/_span_6]'],
      '4/1': ['row-[span_4_/_span_1]'],
      '4/2': ['row-[span_4_/_span_2]'],
      '4/3': ['row-[span_4_/_span_3]'],
      '4/4': ['row-[span_4_/_span_4]'],
      '4/5': ['row-[span_4_/_span_5]'],
      '4/6': ['row-[span_4_/_span_6]'],
      '5/1': ['row-[span_5_/_span_1]'],
      '5/2': ['row-[span_5_/_span_2]'],
      '5/3': ['row-[span_5_/_span_3]'],
      '5/4': ['row-[span_5_/_span_4]'],
      '5/5': ['row-[span_5_/_span_5]'],
      '5/6': ['row-[span_5_/_span_6]'],
      '6/1': ['row-[span_6_/_span_1]'],
      '6/2': ['row-[span_6_/_span_2]'],
      '6/3': ['row-[span_6_/_span_3]'],
      '6/4': ['row-[span_6_/_span_4]'],
      '6/5': ['row-[span_6_/_span_5]'],
      '6/6': ['row-[span_6_/_span_6]'],
    },
    colSpan: {
      'auto': ['col-auto'],
      'full': ['col-span-full'],
      '1/1': ['col-[1_/_span_1]'],
      '1/2': ['col-[1_/_span_2]'],
      '1/3': ['col-[1_/_span_3]'],
      '1/4': ['col-[1_/_span_4]'],
      '1/5': ['col-[1_/_span_5]'],
      '1/6': ['col-[1_/_span_6]'],
      '2/1': ['col-[2_/_span_1]'],
      '2/2': ['col-[2_/_span_2]'],
      '2/3': ['col-[2_/_span_3]'],
      '2/4': ['col-[2_/_span_4]'],
      '2/5': ['col-[2_/_span_5]'],
      '2/6': ['col-[2_/_span_6]'],
      '3/1': ['col-[3_/_span_1]'],
      '3/2': ['col-[3_/_span_2]'],
      '3/3': ['col-[3_/_span_3]'],
      '3/4': ['col-[3_/_span_4]'],
      '3/5': ['col-[3_/_span_5]'],
      '3/6': ['col-[3_/_span_6]'],
      '4/1': ['col-[4_/_span_1]'],
      '4/2': ['col-[4_/_span_2]'],
      '4/3': ['col-[4_/_span_3]'],
      '4/4': ['col-[4_/_span_4]'],
      '4/5': ['col-[4_/_span_5]'],
      '4/6': ['col-[4_/_span_6]'],
      '5/1': ['col-[5_/_span_1]'],
      '5/2': ['col-[5_/_span_2]'],
      '5/3': ['col-[5_/_span_3]'],
      '5/4': ['col-[5_/_span_4]'],
      '5/5': ['col-[5_/_span_5]'],
      '5/6': ['col-[5_/_span_6]'],
      '6/1': ['col-[6_/_span_1]'],
      '6/2': ['col-[6_/_span_2]'],
      '6/3': ['col-[6_/_span_3]'],
      '6/4': ['col-[6_/_span_4]'],
      '6/5': ['col-[6_/_span_5]'],
      '6/6': ['col-[6_/_span_6]'],
    },
    order: sharedOrderVariants,
  },
})

export { gridChildVariants }
