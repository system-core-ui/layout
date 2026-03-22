import { CSSObject, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import type { ThemeSchema } from '@thanh-libs/theme';

import type { Responsive } from '../models';
import {
  mergeStyles,
  resolveResponsive,
  resolveSpacing,
} from '../helpers';

interface GridStyledProps {
  ownerContainer?: boolean;
  ownerSize?: Responsive<number | 'auto'>;
  ownerSpacing?: Responsive<number | string>;
  ownerOffset?: Responsive<number>;
  ownerColumns: number;
}

export const GridStyled = styled.div<GridStyledProps>(
  ({
    ownerContainer,
    ownerSize,
    ownerSpacing,
    ownerOffset,
    ownerColumns,
  }): CSSObject => {
    const { spacing }: ThemeSchema = useTheme();

    const base: CSSObject = {};

    if (ownerContainer) {
      base.display = 'grid';
      base.gridTemplateColumns = `repeat(${ownerColumns}, 1fr)`;
    }

    return mergeStyles(
      base,
      // Container: gap
      ownerContainer
        ? resolveResponsive(ownerSpacing, (sp) => ({
            gap: resolveSpacing(sp, spacing),
          }))
        : {},
      // Item: column span
      resolveResponsive(ownerSize, (s) => ({
        gridColumn: s === 'auto' ? 'auto' : `span ${s}`,
      })),
      // Item: column offset
      resolveResponsive(ownerOffset, (o) => ({
        gridColumnStart: o + 1,
      })),
    );
  },
);
