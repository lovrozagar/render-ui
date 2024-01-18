import { DynamicCols } from '@/packages/components/grid/types/dynamic-cols'
import { GridProps } from '@/packages/components/grid/types/grid'
import { getColClassName } from '@/packages/components/grid/utils/get-col-class-name'
import { getColCSSVariable } from '@/packages/components/grid/utils/get-col-css-variable'
import { getDynamicColCSSVariable } from '@/packages/components/grid/utils/get-dynamic-col-css-variable'
import { gridVariants } from '@/packages/components/grid/variants/grid-variants'
import { cn } from '@/packages/utils/cn'

const getGridProps = (props: GridProps) => {
  const {
    rows,
    cols,
    autoRows,
    autoCols,
    contentX,
    contentXY,
    inlineXY,
    contentY,
    inlineX,
    inlineY,
    gap,
    gapX,
    gapY,
    style,
    className,
    colsAutoFill,
    colsAutoFit,
    xsCols,
    xsColsAutoFit,
    xsColsAutoFill,
    smCols,
    smColsAutoFit,
    smColsAutoFill,
    mdCols,
    mdColsAutoFit,
    mdColsAutoFill,
    lgCols,
    lgColsAutoFit,
    lgColsAutoFill,
    xlCols,
    xlColsAutoFit,
    xlColsAutoFill,
    xxlCols,
    xxlColsAutoFit,
    xxlColsAutoFill,
    ...restProps
  } = props

  const dynamicCols = colsAutoFill || colsAutoFit
  const xsDynamicCols = xsColsAutoFill || xsColsAutoFit
  const smDynamicCols = smColsAutoFill || smColsAutoFit
  const mdDynamicCols = mdColsAutoFill || mdColsAutoFit
  const lgDynamicCols = lgColsAutoFill || lgColsAutoFit
  const xlDynamicCols = xlColsAutoFill || xlColsAutoFit
  const xxlDynamicCols = xxlColsAutoFill || xxlColsAutoFit

  const getDynamicColClassName = (
    dynamicColsValue: string | undefined,
    breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'initial',
  ) => {
    if (!dynamicColsValue) return undefined

    switch (breakpoint) {
      case 'xs': {
        return xsColsAutoFill ? 'xs:grid-cols-xs-auto-fill' : 'xs:grid-cols-xs-auto-fit'
      }
      case 'sm': {
        return smColsAutoFill ? 'sm:grid-cols-sm-auto-fill' : 'sm:grid-cols-sm-auto-fit'
      }
      case 'md': {
        return mdDynamicCols ? 'md:grid-cols-auto-fill' : 'md:grid-cols-auto-fit'
      }
      case 'lg': {
        return lgColsAutoFill ? 'lg:grid-cols-lg-auto-fill' : 'lg:grid-cols-lg-auto-fit'
      }
      case 'xl': {
        return xlColsAutoFill ? 'xl:grid-cols-xl-auto-fill' : 'xl:grid-cols-xl-auto-fit'
      }
      case 'xxl': {
        return xxlColsAutoFill ? 'xxl:grid-cols-xxl-auto-fill' : 'xxl:grid-cols-xxl-auto-fit'
      }

      default: {
        return colsAutoFill ? 'grid-cols-auto-fill' : 'grid-cols-auto-fit'
      }
    }
  }

  const mergedStyle = {
    ...style,
    '--cols-value-initial': getColCSSVariable(cols),
    '--cols-value-xs': getColCSSVariable(xsCols),
    '--cols-value-sm': getColCSSVariable(smCols),
    '--cols-value-md': getColCSSVariable(mdCols),
    '--cols-value-lg': getColCSSVariable(lgCols),
    '--cols-value-xl': getColCSSVariable(xlCols),
    '--cols-value-xxl': getColCSSVariable(xxlCols),
    '--dynamic-cols-value': getDynamicColCSSVariable(dynamicCols),
    '--dynamic-cols-value-xs': getDynamicColCSSVariable(xsDynamicCols),
    '--dynamic-cols-value-sm': getDynamicColCSSVariable(smDynamicCols),
    '--dynamic-cols-value-md': getDynamicColCSSVariable(mdDynamicCols),
    '--dynamic-cols-value-lg': getDynamicColCSSVariable(lgDynamicCols),
    '--dynamic-cols-value-xl': getDynamicColCSSVariable(xlDynamicCols),
    '--dynamic-cols-value-xxl': getDynamicColCSSVariable(xxlDynamicCols),
  } as DynamicCols

  const variantClassName = gridVariants({
    rows,
    autoRows,
    autoCols,
    contentXY,
    inlineXY,
    contentX,
    contentY,
    inlineX,
    inlineY,
    gap,
    gapX,
    gapY,
  })

  const mergedClassName = cn(
    variantClassName,
    className,
    getColClassName(cols, 'grid-cols-initial'),
    getColClassName(xsCols, 'xs:grid-cols-xs'),
    getColClassName(smCols, 'sm:grid-cols-sm'),
    getColClassName(mdCols, 'md:grid-cols-md'),
    getColClassName(lgCols, 'lg:grid-cols-lg'),
    getColClassName(xlCols, 'xl:grid-cols-xl'),
    getColClassName(xxlCols, 'xxl:grid-cols-xxl'),
    getDynamicColClassName(xsDynamicCols, 'xs'),
    getDynamicColClassName(smDynamicCols, 'sm'),
    getDynamicColClassName(mdDynamicCols, 'md'),
    getDynamicColClassName(lgDynamicCols, 'lg'),
    getDynamicColClassName(xlDynamicCols, 'xl'),
    getDynamicColClassName(xxlDynamicCols, 'xxl'),
    getDynamicColClassName(dynamicCols, 'initial'),
  )

  return {
    ...restProps,
    style: mergedStyle,
    className: mergedClassName,
  }
}

export { getGridProps }
