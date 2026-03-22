import type { Meta, StoryObj } from '@storybook/react-vite';

import { Stack, Grid, Container } from '../../index';
import {
  DemoNav,
  DemoSidebar,
  DemoContent,
  DemoFooter,
  DemoBox,
} from './styled';

// ─── Dashboard Layout ────────────────────────────────────

const DashboardLayoutStory = () => (
  <Container size="xl">
    <Stack spacing={2}>
      {/* Navbar */}
      <DemoNav>
        <span>🚀 My App</span>
        <Stack direction="row" spacing={2}>
          <span>Home</span>
          <span>Settings</span>
          <span>Profile</span>
        </Stack>
      </DemoNav>

      {/* Main content area */}
      <Grid container spacing={2}>
        {/* Sidebar */}
        <Grid size={{ xs: 12, md: 3 }}>
          <DemoSidebar>
            <Stack spacing={2}>
              <strong>Navigation</strong>
              <DemoBox>Dashboard</DemoBox>
              <DemoBox>Analytics</DemoBox>
              <DemoBox>Reports</DemoBox>
              <DemoBox>Settings</DemoBox>
            </Stack>
          </DemoSidebar>
        </Grid>

        {/* Main */}
        <Grid size={{ xs: 12, md: 9 }}>
          <DemoContent>
            <Stack spacing={3}>
              <h3 style={{ margin: 0 }}>Dashboard</h3>

              {/* Stats cards */}
              <Grid container spacing={2}>
                <Grid size={{ xs: 6, lg: 3 }}>
                  <DemoBox ownerColor="#e3f2fd">📊 Users: 1,234</DemoBox>
                </Grid>
                <Grid size={{ xs: 6, lg: 3 }}>
                  <DemoBox ownerColor="#e8f5e9">💰 Revenue: $12K</DemoBox>
                </Grid>
                <Grid size={{ xs: 6, lg: 3 }}>
                  <DemoBox ownerColor="#fff3e0">📈 Growth: +15%</DemoBox>
                </Grid>
                <Grid size={{ xs: 6, lg: 3 }}>
                  <DemoBox ownerColor="#fce4ec">🔔 Alerts: 3</DemoBox>
                </Grid>
              </Grid>

              {/* Content section */}
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, lg: 8 }}>
                  <DemoBox style={{ minHeight: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    📉 Chart Area
                  </DemoBox>
                </Grid>
                <Grid size={{ xs: 12, lg: 4 }}>
                  <Stack spacing={2}>
                    <DemoBox>Recent Activity 1</DemoBox>
                    <DemoBox>Recent Activity 2</DemoBox>
                    <DemoBox>Recent Activity 3</DemoBox>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </DemoContent>
        </Grid>
      </Grid>

      {/* Footer */}
      <DemoFooter>© 2024 My App — Built with @thanh-libs/layout</DemoFooter>
    </Stack>
  </Container>
);

// ─── Landing Page Layout ─────────────────────────────────

const LandingPageStory = () => (
  <Stack spacing={0}>
    {/* Hero */}
    <DemoNav style={{ borderRadius: 0 }}>
      <span>🎨 Brand</span>
      <Stack direction="row" spacing={3}>
        <span>Features</span>
        <span>Pricing</span>
        <span>Contact</span>
      </Stack>
    </DemoNav>

    {/* Hero Section */}
    <Container size="md">
      <Stack spacing={3} align="center" style={{ padding: '3rem 0', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '2rem' }}>Build Better Layouts</h1>
        <p style={{ margin: 0, opacity: 0.7, maxWidth: 500 }}>
          Stack, Grid, and Container — all you need for responsive layouts.
        </p>
        <Stack direction="row" spacing={2} justify="center">
          <DemoBox ownerColor="#e3f2fd" style={{ padding: '0.75rem 1.5rem', cursor: 'pointer' }}>
            Get Started
          </DemoBox>
          <DemoBox style={{ padding: '0.75rem 1.5rem', cursor: 'pointer' }}>
            Documentation
          </DemoBox>
        </Stack>
      </Stack>
    </Container>

    {/* Features */}
    <Container size="lg" style={{ padding: '2rem 1rem' }}>
      <Grid container spacing={3}>
        {['Stack', 'Grid', 'Container'].map((name) => (
          <Grid key={name} size={{ xs: 12, md: 4 }}>
            <DemoBox style={{ minHeight: 100, display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', justifyContent: 'center' }}>
              <strong>{name}</strong>
              <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                {name === 'Stack' && '1D flex layout with spacing'}
                {name === 'Grid' && '12-column responsive grid'}
                {name === 'Container' && 'Centered content wrapper'}
              </span>
            </DemoBox>
          </Grid>
        ))}
      </Grid>
    </Container>

    {/* Footer */}
    <DemoFooter style={{ borderRadius: 0 }}>
      © 2024 Brand — Built with @thanh-libs/layout
    </DemoFooter>
  </Stack>
);

// ─── Meta & Exports ──────────────────────────────────────

const meta: Meta = {
  title: 'Layout/Practical Demos',
};

export default meta;

export const DashboardLayout: StoryObj = {
  name: '🖥 Dashboard Layout',
  render: () => <DashboardLayoutStory />,
};

export const LandingPage: StoryObj = {
  name: '🌐 Landing Page',
  render: () => <LandingPageStory />,
};
