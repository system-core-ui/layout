import type { Meta, StoryObj } from '@storybook/react-vite';

import { Container, type Breakpoint } from '../../index';
import { StoryContainer, StorySectionTitle, DemoBox } from './styled';

// ─── Size Variants ───────────────────────────────────────

const SIZES: (Breakpoint | false)[] = ['sm', 'md', 'lg', 'xl', false];

const SizeVariantsStory = () => (
  <StoryContainer>
    <StorySectionTitle>Container Size Variants</StorySectionTitle>

    {SIZES.map((size) => (
      <div key={String(size)} style={{ marginBottom: 16 }}>
        <strong style={{ fontSize: '0.75rem', display: 'block', marginBottom: 4 }}>
          {size === false ? 'fluid (size={false})' : `size="${size}"`}
        </strong>
        <Container size={size} style={{ border: '2px dashed #90caf9', background: '#e3f2fd22' }}>
          <DemoBox>max-width: {size === false ? '100%' : size}</DemoBox>
        </Container>
      </div>
    ))}
  </StoryContainer>
);

// ─── Fluid ───────────────────────────────────────────────

const FluidStory = () => (
  <StoryContainer>
    <StorySectionTitle>Fluid Container</StorySectionTitle>

    <Container fluid style={{ border: '2px dashed #66bb6a', background: '#e8f5e922' }}>
      <DemoBox ownerColor="#c8e6c9">
        fluid — always 100% width with padding
      </DemoBox>
    </Container>
  </StoryContainer>
);

// ─── Meta & Exports ──────────────────────────────────────

const meta: Meta = {
  title: 'Layout/Container',
};

export default meta;

export const SizeVariants: StoryObj = {
  name: 'Size Variants',
  render: () => <SizeVariantsStory />,
};

export const Fluid: StoryObj = {
  name: 'Fluid',
  render: () => <FluidStory />,
};
