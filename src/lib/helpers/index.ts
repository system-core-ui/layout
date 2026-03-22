import type { CSSObject } from '@emotion/react';

import { BREAKPOINTS } from '../constants';
import type { Breakpoint, Responsive } from '../models';

const BREAKPOINT_KEYS: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

/**
 * Convert spacing value to CSS string.
 * - number: look up theme spacing by index (0=0, 1=tiny, 2=small, 3=medium, 4=large, 5=extraLarge),
 *   fallback to value × 8px if no theme
 * - string: used as-is (e.g. '1rem', 'tiny', 'large')
 */
export const resolveSpacing = (
  value: number | string,
  themeSpacing?: Record<string, number | string>,
): string => {
  if (typeof value === 'string') {
    // Check if it's a theme spacing key (e.g. 'small', 'large')
    if (themeSpacing && value in themeSpacing) {
      const resolved = themeSpacing[value];
      return typeof resolved === 'number' ? `${resolved}px` : resolved;
    }
    return value;
  }

  // Number — use theme spacing scale or fallback to ×8
  if (value === 0) return '0px';

  const SCALE_KEYS = ['tiny', 'small', 'medium', 'large', 'extraLarge'];
  if (themeSpacing && value >= 1 && value <= SCALE_KEYS.length) {
    const key = SCALE_KEYS[value - 1];
    const resolved = themeSpacing[key];
    if (resolved !== undefined) {
      return typeof resolved === 'number' ? `${resolved}px` : resolved;
    }
  }

  // Fallback: value × 8px
  return `${value * 8}px`;
};

/** Generate @media queries from a Responsive<T> value */
export const resolveResponsive = <T,>(
  value: Responsive<T> | undefined,
  callback: (val: T) => CSSObject,
): CSSObject => {
  if (value === undefined) return {};

  // Primitive — no breakpoints
  if (typeof value !== 'object' || value === null) {
    return callback(value as T);
  }

  // Per-breakpoint object
  const bpObj = value as Partial<Record<Breakpoint, T>>;
  const result: CSSObject = {};

  for (const bp of BREAKPOINT_KEYS) {
    const bpValue = bpObj[bp];
    if (bpValue === undefined) continue;

    if (bp === 'xs') {
      // xs is the base — no media query needed
      Object.assign(result, callback(bpValue));
    } else {
      result[`@media (min-width: ${BREAKPOINTS[bp]}px)`] = callback(bpValue);
    }
  }

  return result;
};

/** Deep merge CSSObjects — properly merges @media query blocks */
export const mergeStyles = (...styles: CSSObject[]): CSSObject => {
  const result: CSSObject = {};

  for (const style of styles) {
    for (const [key, value] of Object.entries(style)) {
      if (
        key.startsWith('@media') &&
        typeof value === 'object' &&
        value !== null &&
        typeof result[key] === 'object' &&
        result[key] !== null
      ) {
        (result as Record<string, unknown>)[key] = {
          ...(result[key] as CSSObject),
          ...(value as CSSObject),
        };
      } else {
        (result as Record<string, unknown>)[key] = value;
      }
    }
  }

  return result;
};
