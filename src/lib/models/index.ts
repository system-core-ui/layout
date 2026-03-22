import type { ElementType } from 'react';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

/** Responsive value — either a single value or per-breakpoint */
export type Responsive<T> = T | Partial<Record<Breakpoint, T>>;

export interface PolymorphicProps {
  /** HTML element or React component to render as (default: `'div'`) */
  component?: ElementType;
}
