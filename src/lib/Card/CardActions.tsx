import { forwardRef } from 'react';

import type { CardActionsProps } from '../models';

import { CardActionsStyled } from './styled';

/**
 * CardActions — action buttons area at the bottom of a Card.
 *
 * @example
 * ```tsx
 * <CardActions>
 *   <Button variant="text">Learn More</Button>
 *   <Button variant="text">Share</Button>
 * </CardActions>
 * ```
 */
export const CardActions = forwardRef<HTMLDivElement, CardActionsProps>(
  ({ children, ...rest }, ref) => {
    return (
      <CardActionsStyled ref={ref} {...rest}>
        {children}
      </CardActionsStyled>
    );
  },
);

CardActions.displayName = 'CardActions';
