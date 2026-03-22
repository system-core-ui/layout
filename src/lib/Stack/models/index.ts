import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

import type { PolymorphicProps, Responsive } from '../../models';

export type StackDirection =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse';

export interface StackProps extends HTMLAttributes<HTMLDivElement>, PolymorphicProps {
  /** Flex direction */
  direction?: Responsive<StackDirection>;
  /** Gap between children (number = value × 8px, string = as-is) */
  spacing?: Responsive<number | string>;
  /** Align items on the cross axis */
  align?: Responsive<CSSProperties['alignItems']>;
  /** Justify content on the main axis */
  justify?: Responsive<CSSProperties['justifyContent']>;
  /** Allow children to wrap to next line */
  wrap?: Responsive<boolean>;
  /** Content */
  children?: ReactNode;
}
