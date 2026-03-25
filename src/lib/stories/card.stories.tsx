import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '../Card';
import { CardHeader } from '../Card/CardHeader';
import { CardContent } from '../Card/CardContent';
import { CardMedia } from '../Card/CardMedia';
import { CardActions } from '../Card/CardActions';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

// ─── Basic Variants ─────────────────────────────────────

export const Outlined: Story = {
  render: () => (
    <Card variant="outlined" style={{ width: 320 }}>
      <CardHeader title="Outlined Card" subtitle="Default variant" />
      <CardContent>
        <p style={{ margin: 0 }}>
          This is the default outlined card with a subtle border.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated" style={{ width: 320 }}>
      <CardHeader title="Elevated Card" subtitle="Shadow-based depth" />
      <CardContent>
        <p style={{ margin: 0 }}>
          This card uses a box-shadow to convey elevation.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Filled: Story = {
  render: () => (
    <Card variant="filled" style={{ width: 320 }}>
      <CardHeader title="Filled Card" subtitle="Secondary background" />
      <CardContent>
        <p style={{ margin: 0 }}>
          Filled cards use a secondary background color.
        </p>
      </CardContent>
    </Card>
  ),
};

// ─── Hoverable ──────────────────────────────────────────

export const Hoverable: Story = {
  render: () => (
    <Card variant="elevated" hoverable style={{ width: 320 }}>
      <CardHeader title="Hoverable Card" subtitle="Hover to lift" />
      <CardContent>
        <p style={{ margin: 0 }}>
          Hover over this card to see the lift effect.
        </p>
      </CardContent>
    </Card>
  ),
};

// ─── With Media ─────────────────────────────────────────

export const WithMedia: Story = {
  render: () => (
    <Card variant="outlined" style={{ width: 320 }}>
      <CardMedia
        image="https://picsum.photos/seed/card-demo/640/360"
        alt="Landscape"
        height={180}
      />
      <CardHeader title="Media Card" subtitle="With cover image" />
      <CardContent>
        <p style={{ margin: 0 }}>
          A card that displays an image at the top.
        </p>
      </CardContent>
    </Card>
  ),
};

// ─── With Actions ───────────────────────────────────────

export const WithActions: Story = {
  render: () => (
    <Card variant="outlined" style={{ width: 320 }}>
      <CardHeader title="Actions Card" subtitle="Has action buttons" />
      <CardContent>
        <p style={{ margin: 0 }}>
          Cards can include action buttons at the bottom.
        </p>
      </CardContent>
      <CardActions>
        <button style={{ cursor: 'pointer' }}>Share</button>
        <button style={{ cursor: 'pointer' }}>Learn More</button>
      </CardActions>
    </Card>
  ),
};

// ─── With Header Avatar & Action ────────────────────────

export const WithHeaderSlots: Story = {
  render: () => (
    <Card variant="outlined" style={{ width: 360 }}>
      <CardHeader
        avatar={
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: '#1976d2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 600,
            }}
          >
            T
          </div>
        }
        title="Thanh Dao"
        subtitle="March 25, 2026"
        action={<button style={{ cursor: 'pointer' }}>⋮</button>}
      />
      <CardMedia
        image="https://picsum.photos/seed/card-header/640/360"
        alt="Demo"
        height={200}
      />
      <CardContent>
        <p style={{ margin: 0 }}>
          Full composition: avatar, title, subtitle, action, media, content, and actions.
        </p>
      </CardContent>
      <CardActions>
        <button style={{ cursor: 'pointer' }}>❤️ Like</button>
        <button style={{ cursor: 'pointer' }}>💬 Comment</button>
        <button style={{ cursor: 'pointer' }}>↗ Share</button>
      </CardActions>
    </Card>
  ),
};

// ─── All Variants Side by Side ──────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      {(['outlined', 'elevated', 'filled'] as const).map((variant) => (
        <Card key={variant} variant={variant} style={{ width: 240 }}>
          <CardHeader title={variant} subtitle={`variant="${variant}"`} />
          <CardContent>
            <p style={{ margin: 0 }}>Sample content for {variant} card.</p>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
};
