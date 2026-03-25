import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '../Card';
import { CardHeader } from '../Card/CardHeader';
import { CardContent } from '../Card/CardContent';
import { CardMedia } from '../Card/CardMedia';
import { CardActions } from '../Card/CardActions';

// ─── Basic Variants ─────────────────────────────────────

const OutlinedStory = () => (
  <Card variant="outlined" style={{ width: 320 }}>
    <CardHeader title="Outlined Card" subtitle="Default variant" />
    <CardContent>
      <p style={{ margin: 0 }}>
        This is the default outlined card with a subtle border.
      </p>
    </CardContent>
  </Card>
);

const ElevatedStory = () => (
  <Card variant="elevated" style={{ width: 320 }}>
    <CardHeader title="Elevated Card" subtitle="Shadow-based depth" />
    <CardContent>
      <p style={{ margin: 0 }}>
        This card uses a box-shadow to convey elevation.
      </p>
    </CardContent>
  </Card>
);

const FilledStory = () => (
  <Card variant="filled" style={{ width: 320 }}>
    <CardHeader title="Filled Card" subtitle="Secondary background" />
    <CardContent>
      <p style={{ margin: 0 }}>
        Filled cards use a secondary background color.
      </p>
    </CardContent>
  </Card>
);

// ─── Hoverable ──────────────────────────────────────────

const HoverableStory = () => (
  <Card variant="elevated" hoverable style={{ width: 320 }}>
    <CardHeader title="Hoverable Card" subtitle="Hover to lift" />
    <CardContent>
      <p style={{ margin: 0 }}>
        Hover over this card to see the lift effect.
      </p>
    </CardContent>
  </Card>
);

// ─── With Media ─────────────────────────────────────────

const WithMediaStory = () => (
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
);

// ─── With Actions ───────────────────────────────────────

const WithActionsStory = () => (
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
);

// ─── With Header Slot & Action ──────────────────────────

const WithHeaderSlotsStory = () => (
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
);

// ─── All Variants Side by Side ──────────────────────────

const AllVariantsStory = () => (
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
);

// ─── Playground ──────────────────────────────────────────

const PlaygroundStory = (args: {
  variant: 'outlined' | 'elevated' | 'filled';
  hoverable: boolean;
  showMedia: boolean;
  showAvatar: boolean;
  showActions: boolean;
}) => (
  <Card variant={args.variant} hoverable={args.hoverable} style={{ width: 320 }}>
    {args.showMedia && (
      <CardMedia
        image="https://picsum.photos/seed/card-demo/640/360"
        alt="Landscape"
        height={180}
      />
    )}
    <CardHeader
      avatar={
        args.showAvatar ? (
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
        ) : undefined
      }
      title="Playground Card"
      subtitle="Toggle props to see changes"
    />
    <CardContent>
      <p style={{ margin: 0 }}>
        Use the controls below to toggle the media, avatar, and actions.
      </p>
    </CardContent>
    {args.showActions && (
      <CardActions>
        <button style={{ cursor: 'pointer' }}>Share</button>
        <button style={{ cursor: 'pointer' }}>Learn More</button>
      </CardActions>
    )}
  </Card>
);

// ─── Meta & Exports ──────────────────────────────────────

const meta: Meta = {
  title: 'Card/Card',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Outlined: StoryObj = { name: 'Outlined', render: () => <OutlinedStory /> };
export const Elevated: StoryObj = { name: 'Elevated', render: () => <ElevatedStory /> };
export const Filled: StoryObj = { name: 'Filled', render: () => <FilledStory /> };
export const Hoverable: StoryObj = { name: 'Hoverable', render: () => <HoverableStory /> };
export const WithMedia: StoryObj = { name: 'With Media', render: () => <WithMediaStory /> };
export const WithActions: StoryObj = { name: 'With Actions', render: () => <WithActionsStory /> };
export const WithHeaderSlots: StoryObj = { name: 'With Header Slots', render: () => <WithHeaderSlotsStory /> };
export const AllVariants: StoryObj = { name: 'All Variants', render: () => <AllVariantsStory /> };

export const Playground: StoryObj<typeof PlaygroundStory> = {
  name: 'Playground',
  argTypes: {
    variant: { control: { type: 'select' }, options: ['outlined', 'elevated', 'filled'] },
    hoverable: { control: 'boolean' },
    showMedia: { control: 'boolean' },
    showAvatar: { control: 'boolean' },
    showActions: { control: 'boolean' },
  },
  args: {
    variant: 'outlined',
    hoverable: false,
    showMedia: false,
    showAvatar: false,
    showActions: false,
  },
  render: (args) => <PlaygroundStory {...args} />,
};
