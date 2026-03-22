import type { HTMLAttributes, ReactNode } from 'react';

import type { PolymorphicProps, Responsive } from '../../models';

export interface GridProps extends HTMLAttributes<HTMLDivElement>, PolymorphicProps {
  /** Render as grid container */
  container?: boolean;
  /** Column span (1–12) or 'auto' for content-based width */
  size?: Responsive<number | 'auto'>;
  /** Gap between grid items (number = value × 8px, string = as-is). Container only. */
  spacing?: Responsive<number | string>;
  /** Column offset (0–11). Item only. */
  offset?: Responsive<number>;
  /** Total number of columns. Container only. */
  columns?: number;
  /** Content */
  children?: ReactNode;
}
