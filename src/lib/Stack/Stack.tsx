import { forwardRef } from 'react';

import type { StackProps } from './models';

import { StackStyled } from './styled';

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      component,
      direction = 'column',
      spacing = 0,
      align,
      justify,
      wrap,
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <StackStyled
        as={component}
        ref={ref}
        ownerDirection={direction}
        ownerSpacing={spacing}
        ownerAlign={align}
        ownerJustify={justify}
        ownerWrap={wrap}
        {...rest}
      >
        {children}
      </StackStyled>
    );
  },
);

Stack.displayName = 'Stack';
