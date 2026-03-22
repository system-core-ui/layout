import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Stack, Grid, Container, BREAKPOINTS, GRID_COLUMNS } from '../src/index';

// ─── E2E-style: Responsive Behavior Tests ────────────────
// These test the generated CSS/styles rather than DOM events.
// True viewport-resize e2e tests would use Playwright/Cypress.

describe('Stack — responsive styles', () => {
  it('applies default flex-direction column', () => {
    const { container } = render(
      <Stack>
        <div>A</div>
        <div>B</div>
      </Stack>,
    );
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveStyle({ flexDirection: 'column' });
  });

  it('applies row direction when specified', () => {
    const { container } = render(
      <Stack direction="row">
        <div>A</div>
        <div>B</div>
      </Stack>,
    );
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveStyle({ flexDirection: 'row' });
  });

  it('applies flex-wrap when wrap is true', () => {
    const { container } = render(
      <Stack wrap>
        <div>A</div>
      </Stack>,
    );
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveStyle({ flexWrap: 'wrap' });
  });
});

describe('Grid — responsive styles', () => {
  it('applies grid-template-columns on container', () => {
    const { container } = render(
      <Grid container>
        <div>child</div>
      </Grid>,
    );
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveStyle({
      gridTemplateColumns: `repeat(${GRID_COLUMNS}, 1fr)`,
    });
  });

  it('applies custom columns count', () => {
    const { container } = render(
      <Grid container columns={6}>
        <div>child</div>
      </Grid>,
    );
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveStyle({
      gridTemplateColumns: 'repeat(6, 1fr)',
    });
  });

  it('applies grid-column span for size', () => {
    const { container } = render(
      <Grid size={6}>
        <div>child</div>
      </Grid>,
    );
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveStyle({ gridColumn: 'span 6' });
  });

  it('can be both container and item', () => {
    const { container } = render(
      <Grid container size={6}>
        <div>nested container</div>
      </Grid>,
    );
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveStyle({ display: 'grid' });
    expect(el).toHaveStyle({ gridColumn: 'span 6' });
  });
});

describe('Container — responsive styles', () => {
  it('applies box-sizing border-box', () => {
    const { container } = render(
      <Container>content</Container>,
    );
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveStyle({ boxSizing: 'border-box' });
  });

  it('has padding on both sides', () => {
    const { container } = render(
      <Container>content</Container>,
    );
    const el = container.firstChild as HTMLElement;
    const styles = window.getComputedStyle(el);
    // Padding should exist (exact value depends on theme)
    expect(styles.paddingLeft).toBeTruthy();
    expect(styles.paddingRight).toBeTruthy();
  });
});

describe('Constants', () => {
  it('has 6 breakpoints', () => {
    expect(Object.keys(BREAKPOINTS)).toHaveLength(6);
  });

  it('breakpoints are in ascending order', () => {
    const values = Object.values(BREAKPOINTS);
    for (let i = 1; i < values.length; i++) {
      expect(values[i]).toBeGreaterThan(values[i - 1]);
    }
  });

  it('GRID_COLUMNS is 12', () => {
    expect(GRID_COLUMNS).toBe(12);
  });
});
