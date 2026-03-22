import { CSSObject, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import type { ThemeSchema } from '@thanh-libs/theme';

import type { Responsive } from '../models';
import {
  mergeStyles,
  resolveResponsive,
  resolveSpacing,
} from '../helpers';

import type { StackDirection } from './models';

interface StackStyledProps {
  ownerDirection: Responsive<StackDirection>;
  ownerSpacing: Responsive<number | string>;
  ownerAlign?: Responsive<string>;
  ownerJustify?: Responsive<string>;
  ownerWrap?: Responsive<boolean>;
}

export const StackStyled = styled.div<StackStyledProps>(
  ({
    ownerDirection,
    ownerSpacing,
    ownerAlign,
    ownerJustify,
    ownerWrap,
  }): CSSObject => {
    const { spacing }: ThemeSchema = useTheme();

    return mergeStyles(
      { display: 'flex', flexDirection: 'column' },
      resolveResponsive(ownerDirection, (dir) => ({ flexDirection: dir })),
      resolveResponsive(ownerSpacing, (sp) => ({
        gap: resolveSpacing(sp, spacing),
      })),
      resolveResponsive(ownerAlign, (al) => ({ alignItems: al })),
      resolveResponsive(ownerJustify, (jt) => ({ justifyContent: jt })),
      resolveResponsive(ownerWrap, (w) => ({
        flexWrap: w ? 'wrap' : 'nowrap',
      })),
    );
  },
);
