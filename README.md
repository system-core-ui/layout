# @thanh-libs/layout

Layout primitives for building page structures with consistent spacing, alignment, and responsive behaviour.

## Installation

```bash
npm install @thanh-libs/layout
```

### Peer dependencies

| Package | Version |
|---------|---------|
| `react` | ≥ 18 |
| `react-dom` | ≥ 18 |
| `@emotion/react` | ≥ 11 |
| `@emotion/styled` | ≥ 11 |
| `@thanh-libs/theme` | ≥ 0.0.3 |

## Components

### Stack

Flexbox container for stacking children vertically or horizontally.

```tsx
import { Stack } from '@thanh-libs/layout';

<Stack direction="row" spacing={2} align="center">
  <div>A</div>
  <div>B</div>
</Stack>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `Responsive<'row' \| 'column' \| 'row-reverse' \| 'column-reverse'>` | `'column'` | Flex direction |
| `spacing` | `Responsive<number \| string>` | `0` | Gap (number = × 8 px, string = as-is) |
| `align` | `Responsive<CSSProperties['alignItems']>` | — | Cross-axis alignment |
| `justify` | `Responsive<CSSProperties['justifyContent']>` | — | Main-axis alignment |
| `wrap` | `Responsive<boolean>` | — | Enable flex wrap |
| `component` | `ElementType` | `'div'` | HTML tag to render as |

---

### Grid

CSS Grid container and item system (12-column default).

```tsx
import { Grid } from '@thanh-libs/layout';

<Grid container spacing={2}>
  <Grid size={8}>Main</Grid>
  <Grid size={4}>Sidebar</Grid>
</Grid>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `container` | `boolean` | — | Render as grid container |
| `size` | `Responsive<number \| 'auto'>` | — | Column span (1–12) |
| `spacing` | `Responsive<number \| string>` | — | Gap (container only) |
| `offset` | `Responsive<number>` | — | Column offset (item only) |
| `columns` | `number` | `12` | Total columns (container only) |
| `component` | `ElementType` | `'div'` | HTML tag to render as |

---

### Container

Centred, max-width wrapper with responsive padding.

```tsx
import { Container } from '@thanh-libs/layout';

<Container size="lg">
  Page content
</Container>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `Breakpoint \| false` | `'lg'` | Max-width breakpoint |
| `fluid` | `boolean` | `false` | Stretch to 100% width |
| `component` | `ElementType` | `'div'` | HTML tag to render as |

## Polymorphic rendering

All components accept a `component` prop to change the rendered HTML element:

```tsx
<Stack component="section">...</Stack>
<Grid container component="main">...</Grid>
<Container component="article">...</Container>
```

## Constants & types

```tsx
import { BREAKPOINTS, GRID_COLUMNS } from '@thanh-libs/layout';
import type { Breakpoint, Responsive, PolymorphicProps } from '@thanh-libs/layout';
```

| Export | Value |
|--------|-------|
| `BREAKPOINTS` | `{ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 }` |
| `GRID_COLUMNS` | `12` |

## License

MIT
