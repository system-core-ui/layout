import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Stack, Grid, Container } from '../src/index';

// ─── Stack ───────────────────────────────────────────────

describe('Stack', () => {
  it('renders children', () => {
    render(
      <Stack>
        <div>Child 1</div>
        <div>Child 2</div>
      </Stack>,
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('renders as a div by default', () => {
    const { container } = render(<Stack>content</Stack>);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('applies display flex', () => {
    const { container } = render(<Stack>content</Stack>);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveStyle({ display: 'flex' });
  });

  it('forwards ref', () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<Stack ref={ref}>content</Stack>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('spreads HTML attributes', () => {
    render(<Stack data-testid="stack" className="custom">content</Stack>);
    const el = screen.getByTestId('stack');
    expect(el).toHaveClass('custom');
  });
});

// ─── Grid ────────────────────────────────────────────────

describe('Grid', () => {
  it('renders children', () => {
    render(
      <Grid container>
        <Grid size={6}><span>Left</span></Grid>
        <Grid size={6}><span>Right</span></Grid>
      </Grid>,
    );
    expect(screen.getByText('Left')).toBeInTheDocument();
    expect(screen.getByText('Right')).toBeInTheDocument();
  });

  it('applies display grid when container is true', () => {
    const { container } = render(
      <Grid container data-testid="grid-container">
        <div>child</div>
      </Grid>,
    );
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveStyle({ display: 'grid' });
  });

  it('does not apply display grid when container is false', () => {
    const { container } = render(
      <Grid size={6}>
        <div>child</div>
      </Grid>,
    );
    const el = container.firstChild as HTMLElement;
    expect(el).not.toHaveStyle({ display: 'grid' });
  });

  it('forwards ref', () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<Grid ref={ref}>content</Grid>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('renders nested grids', () => {
    render(
      <Grid container>
        <Grid size={6}>
          <Grid container>
            <Grid size={6}><span>Nested</span></Grid>
          </Grid>
        </Grid>
      </Grid>,
    );
    expect(screen.getByText('Nested')).toBeInTheDocument();
  });
});

// ─── Container ───────────────────────────────────────────

describe('Container', () => {
  it('renders children', () => {
    render(<Container>Hello</Container>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('renders as a div', () => {
    const { container } = render(<Container>content</Container>);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('applies width 100%', () => {
    const { container } = render(<Container>content</Container>);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveStyle({ width: '100%' });
  });

  it('applies auto margins for centering', () => {
    const { container } = render(<Container>content</Container>);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveStyle({ marginLeft: 'auto', marginRight: 'auto' });
  });

  it('forwards ref', () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<Container ref={ref}>content</Container>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('spreads HTML attributes', () => {
    render(<Container data-testid="container" className="custom">content</Container>);
    const el = screen.getByTestId('container');
    expect(el).toHaveClass('custom');
  });
});

// ─── Polymorphic `component` prop ────────────────────────

describe('Polymorphic component prop', () => {
  it('Stack renders as section', () => {
    const { container } = render(<Stack component="section">content</Stack>);
    expect(container.firstChild?.nodeName).toBe('SECTION');
  });

  it('Grid renders as main', () => {
    const { container } = render(
      <Grid container component="main">
        <div>child</div>
      </Grid>,
    );
    expect(container.firstChild?.nodeName).toBe('MAIN');
  });

  it('Container renders as article', () => {
    const { container } = render(
      <Container component="article">content</Container>,
    );
    expect(container.firstChild?.nodeName).toBe('ARTICLE');
  });

  it('defaults to div when component is not specified', () => {
    const { container } = render(<Stack>content</Stack>);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });
});
