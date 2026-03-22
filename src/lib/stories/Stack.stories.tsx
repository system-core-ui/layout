import type { Meta, StoryObj } from '@storybook/react-vite';

import { Stack } from '../../index';
import { StoryContainer, StorySectionTitle, DemoBox } from './styled';

// ─── Direction ────────────────────────────────────────────

const DirectionStory = () => (
  <StoryContainer>
    <StorySectionTitle>Direction</StorySectionTitle>

    <div>
      <strong style={{ fontSize: '0.8rem', marginBottom: 4, display: 'block' }}>
        direction=&quot;column&quot; (default)
      </strong>
      <Stack spacing={2}>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
      </Stack>
    </div>

    <div>
      <strong style={{ fontSize: '0.8rem', marginBottom: 4, display: 'block' }}>
        direction=&quot;row&quot;
      </strong>
      <Stack direction="row" spacing={2}>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
      </Stack>
    </div>

    <div>
      <strong style={{ fontSize: '0.8rem', marginBottom: 4, display: 'block' }}>
        direction={'{{ xs: "column", md: "row" }}'}
      </strong>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
        <DemoBox>Responsive 1</DemoBox>
        <DemoBox>Responsive 2</DemoBox>
        <DemoBox>Responsive 3</DemoBox>
      </Stack>
    </div>
  </StoryContainer>
);

// ─── Spacing ──────────────────────────────────────────────

const SpacingStory = () => (
  <StoryContainer>
    <StorySectionTitle>Spacing (theme scale)</StorySectionTitle>

    {[0, 1, 2, 3, 4, 5].map((sp) => (
      <div key={sp}>
        <strong style={{ fontSize: '0.75rem', marginBottom: 4, display: 'block' }}>
          spacing={`{${sp}}`} {sp > 0 && `(${['', 'tiny', 'small', 'medium', 'large', 'extraLarge'][sp]})`}
        </strong>
        <Stack direction="row" spacing={sp}>
          <DemoBox>A</DemoBox>
          <DemoBox>B</DemoBox>
          <DemoBox>C</DemoBox>
        </Stack>
      </div>
    ))}
  </StoryContainer>
);

// ─── Align & Justify ─────────────────────────────────────

const AlignJustifyStory = () => (
  <StoryContainer>
    <StorySectionTitle>Align & Justify</StorySectionTitle>

    <div>
      <strong style={{ fontSize: '0.8rem', marginBottom: 4, display: 'block' }}>
        direction=&quot;row&quot; justify=&quot;space-between&quot; align=&quot;center&quot;
      </strong>
      <Stack direction="row" justify="space-between" align="center" style={{ border: '1px dashed #ccc', padding: 8 }}>
        <DemoBox>Left</DemoBox>
        <DemoBox style={{ padding: '1.5rem 0.75rem' }}>Center (taller)</DemoBox>
        <DemoBox>Right</DemoBox>
      </Stack>
    </div>

    <div>
      <strong style={{ fontSize: '0.8rem', marginBottom: 4, display: 'block' }}>
        direction=&quot;row&quot; justify=&quot;center&quot; wrap={'{true}'}
      </strong>
      <Stack direction="row" justify="center" spacing={2} wrap>
        {Array.from({ length: 8 }, (_, i) => (
          <DemoBox key={i} style={{ minWidth: 100 }}>Item {i + 1}</DemoBox>
        ))}
      </Stack>
    </div>
  </StoryContainer>
);

// ─── Meta & Exports ──────────────────────────────────────

const meta: Meta = {
  title: 'Layout/Stack',
};

export default meta;

export const Direction: StoryObj = {
  name: 'Direction',
  render: () => <DirectionStory />,
};

export const Spacing: StoryObj = {
  name: 'Spacing',
  render: () => <SpacingStory />,
};

export const AlignAndJustify: StoryObj = {
  name: 'Align & Justify',
  render: () => <AlignJustifyStory />,
};
