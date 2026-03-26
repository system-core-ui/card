# @thanh-libs/card

Themed **Card** components for React, built with Emotion. Includes `Card`, `CardHeader`, `CardContent`, `CardMedia`, and `CardActions` sub-components.

## Installation

```bash
npm install @thanh-libs/card
```

### Peer dependencies

```bash
npm install react react-dom @emotion/react @emotion/styled @thanh-libs/theme
```

## Components

### Card

Container component with variants and hover effect.

```tsx
import { Card, CardHeader, CardContent, CardActions } from '@thanh-libs/card';

<Card variant="elevated" hoverable>
  <CardHeader title="Card Title" subtitle="Subtitle" />
  <CardContent>Body content goes here.</CardContent>
  <CardActions>
    <button>Action</button>
  </CardActions>
</Card>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'outlined' \| 'elevated' \| 'filled'` | `'outlined'` | Visual style |
| `hoverable` | `boolean` | `false` | Lift effect on hover |

Also accepts all native `<div>` HTML attributes.

---

### CardHeader

Header area with title, subtitle, avatar, and action slots.

```tsx
<CardHeader
  title="Title"
  subtitle="Subtitle"
  avatar={<Avatar />}
  action={<IconButton>⋮</IconButton>}
/>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `ReactNode` | — | Main title |
| `subtitle` | `ReactNode` | — | Secondary text beneath the title |
| `avatar` | `ReactNode` | — | Slot for avatar or icon on the left side |
| `action` | `ReactNode` | — | Slot for an action element in the top-right corner |

---

### CardContent

Body area for text and other content.

```tsx
<CardContent>
  <p>Card body content.</p>
</CardContent>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Body content |

Also accepts all native `<div>` HTML attributes.

---

### CardMedia

Image or background media area.

```tsx
<CardMedia image="/photo.jpg" alt="Photo" height={200} />
<CardMedia image="/bg.jpg" component="div" height={140} />
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `image` | `string` | — | Image URL |
| `alt` | `string` | — | Alt text for the media |
| `height` | `number \| string` | — | Height of the media area |
| `component` | `'img' \| 'div'` | `'img'` | Render as `<img>` or background `<div>` |

Also accepts all native `<img>` HTML attributes.

---

### CardActions

Container for action buttons or links.

```tsx
<CardActions>
  <Button variant="text">Share</Button>
  <Button variant="text">Learn More</Button>
</CardActions>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Action buttons or links |

Also accepts all native `<div>` HTML attributes.

## Theming

Wrap your app with `ThemeProvider` from `@thanh-libs/theme`:

```tsx
import { ThemeProvider } from '@thanh-libs/theme';
import { Card, CardContent } from '@thanh-libs/card';

<ThemeProvider>
  <Card variant="elevated">
    <CardContent>Themed Card</CardContent>
  </Card>
</ThemeProvider>
```

## License

MIT
