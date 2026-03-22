import type { Meta, StoryObj } from '@storybook/react-vite';

import { Grid } from '../../index';
import { StoryContainer, StorySectionTitle, DemoBox } from './styled';

// ─── Basic Grid ──────────────────────────────────────────

const BasicGridStory = () => (
  <StoryContainer>
    <StorySectionTitle>Basic Grid (12 columns)</StorySectionTitle>

    <Grid container spacing={2}>
      <Grid size={12}><DemoBox>size=12 (full)</DemoBox></Grid>
      <Grid size={6}><DemoBox>size=6</DemoBox></Grid>
      <Grid size={6}><DemoBox>size=6</DemoBox></Grid>
      <Grid size={4}><DemoBox>size=4</DemoBox></Grid>
      <Grid size={4}><DemoBox>size=4</DemoBox></Grid>
      <Grid size={4}><DemoBox>size=4</DemoBox></Grid>
      <Grid size={3}><DemoBox>size=3</DemoBox></Grid>
      <Grid size={3}><DemoBox>size=3</DemoBox></Grid>
      <Grid size={3}><DemoBox>size=3</DemoBox></Grid>
      <Grid size={3}><DemoBox>size=3</DemoBox></Grid>
    </Grid>
  </StoryContainer>
);

// ─── Responsive Grid ─────────────────────────────────────

const ResponsiveGridStory = () => (
  <StoryContainer>
    <StorySectionTitle>Responsive Grid</StorySectionTitle>

    <p style={{ fontSize: '0.8rem', opacity: 0.7, margin: 0 }}>
      Resize the window to see columns change at breakpoints
    </p>

    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 8 }}>
        <DemoBox>xs=12 md=8</DemoBox>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <DemoBox>xs=12 md=4</DemoBox>
      </Grid>
      <Grid size={{ xs: 6, sm: 4, md: 3 }}>
        <DemoBox>xs=6 sm=4 md=3</DemoBox>
      </Grid>
      <Grid size={{ xs: 6, sm: 4, md: 3 }}>
        <DemoBox>xs=6 sm=4 md=3</DemoBox>
      </Grid>
      <Grid size={{ xs: 6, sm: 4, md: 3 }}>
        <DemoBox>xs=6 sm=4 md=3</DemoBox>
      </Grid>
      <Grid size={{ xs: 6, sm: 4, md: 3 }}>
        <DemoBox>xs=6 sm=4 md=3</DemoBox>
      </Grid>
    </Grid>
  </StoryContainer>
);

// ─── Offset ──────────────────────────────────────────────

const OffsetStory = () => (
  <StoryContainer>
    <StorySectionTitle>Grid Offset</StorySectionTitle>

    <Grid container spacing={2}>
      <Grid size={4}><DemoBox>size=4</DemoBox></Grid>
      <Grid size={4} offset={4}><DemoBox>size=4 offset=4</DemoBox></Grid>
      <Grid size={3} offset={3}><DemoBox>size=3 offset=3</DemoBox></Grid>
      <Grid size={3} offset={3}><DemoBox>size=3 offset=3</DemoBox></Grid>
      <Grid size={6} offset={3}><DemoBox>size=6 offset=3 (centered)</DemoBox></Grid>
    </Grid>
  </StoryContainer>
);

// ─── Meta & Exports ──────────────────────────────────────

const meta: Meta = {
  title: 'Layout/Grid',
};

export default meta;

export const BasicGrid: StoryObj = {
  name: 'Basic Grid',
  render: () => <BasicGridStory />,
};

export const ResponsiveGrid: StoryObj = {
  name: 'Responsive Grid',
  render: () => <ResponsiveGridStory />,
};

export const Offset: StoryObj = {
  name: 'Offset',
  render: () => <OffsetStory />,
};
