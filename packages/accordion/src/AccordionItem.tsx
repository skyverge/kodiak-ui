import * as React from 'react'
import {
  _variant,
  VariantProps,
  sx,
  Theme,
  css,
  styled,
  SxStyleProp,
  CSSObject,
} from 'kodiak-ui'

export type AccordionItemProps = {
  children: React.ReactNode
  sx?: SxStyleProp
} & VariantProps

export function base({ theme }: { theme: Theme }): CSSObject {
  return css({})(theme)
}

export const AccordionItem = styled('div')<AccordionItemProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({
    variant: variantProp = 'accordionItem',
    variantKey = 'accordions',
    theme,
  }) => _variant({ variant: variantProp, theme, variantKey }),
  sx,
)
