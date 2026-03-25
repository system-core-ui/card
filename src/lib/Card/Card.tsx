import { forwardRef } from 'react';

import type { CardProps } from '../models';

import { CardStyled } from './styled';

/**
 * Card — theme-aware container for grouping related content.
 *
 * Supports 3 variants: outlined, elevated, filled.
 * Compose with CardHeader, CardContent, CardMedia, CardActions.
 *
 * @example
 * ```tsx
 * <Card variant="elevated" hoverable>
 *   <CardHeader title="Title" subtitle="Subtitle" />
 *   <CardMedia image="/photo.jpg" alt="Photo" />
 *   <CardContent>Body text</CardContent>
 *   <CardActions><Button>Action</Button></CardActions>
 * </Card>
 * ```
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'outlined', hoverable = false, children, ...rest }, ref) => {
    return (
      <CardStyled
        ref={ref}
        ownerVariant={variant}
        ownerHoverable={hoverable}
        {...rest}
      >
        {children}
      </CardStyled>
    );
  },
);

Card.displayName = 'Card';
