import { CSSObject, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import type { ThemeSchema } from '@thanh-libs/theme';

import { CONTAINER_MAX_WIDTHS } from '../constants';
import type { Breakpoint } from '../models';

interface ContainerStyledProps {
  ownerSize: Breakpoint | false;
}

export const ContainerStyled = styled.div<ContainerStyledProps>(
  ({ ownerSize }): CSSObject => {
    const { spacing }: ThemeSchema = useTheme();

    // Use theme spacing for padding, fallback to 16px
    const padding =
      spacing?.medium ?? spacing?.large ?? '1rem';

    return {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: padding,
      paddingRight: padding,
      boxSizing: 'border-box',
      ...(ownerSize !== false && ownerSize in CONTAINER_MAX_WIDTHS
        ? { maxWidth: CONTAINER_MAX_WIDTHS[ownerSize] }
        : {}),
    };
  },
);
