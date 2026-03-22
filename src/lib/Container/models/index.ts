import type { HTMLAttributes, ReactNode } from 'react';

import type { Breakpoint, PolymorphicProps } from '../../models';

export type ContainerSize = Breakpoint | false;

export interface ContainerProps extends HTMLAttributes<HTMLDivElement>, PolymorphicProps {
  /** Container size — snaps max-width to breakpoint value, or `false` for fluid (100%) */
  size?: ContainerSize;
  /** Shorthand for size={false} — container stretches to 100% */
  fluid?: boolean;
  /** Content */
  children?: ReactNode;
}
