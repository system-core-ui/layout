import { forwardRef } from 'react';

import { GRID_COLUMNS } from '../constants';

import type { GridProps } from './models';

import { GridStyled } from './styled';

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      component,
      container,
      size,
      spacing,
      offset,
      columns = GRID_COLUMNS,
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <GridStyled
        as={component}
        ref={ref}
        ownerContainer={container}
        ownerSize={size}
        ownerSpacing={spacing}
        ownerOffset={offset}
        ownerColumns={columns}
        {...rest}
      >
        {children}
      </GridStyled>
    );
  },
);

Grid.displayName = 'Grid';
