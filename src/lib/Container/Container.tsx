import { forwardRef } from 'react';

import type { ContainerProps } from './models';

import { ContainerStyled } from './styled';

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ component, size = 'lg', fluid = false, children, ...rest }, ref) => {
    return (
      <ContainerStyled
        as={component}
        ref={ref}
        ownerSize={fluid ? false : size}
        {...rest}
      >
        {children}
      </ContainerStyled>
    );
  },
);

Container.displayName = 'Container';
