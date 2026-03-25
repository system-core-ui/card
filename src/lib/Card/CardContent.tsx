import { forwardRef } from 'react';

import type { CardContentProps } from '../models';

import { CardContentStyled } from './styled';

/**
 * CardContent — the main body area of a Card.
 *
 * @example
 * ```tsx
 * <CardContent>
 *   <p>Card body text goes here.</p>
 * </CardContent>
 * ```
 */
export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, ...rest }, ref) => {
    return (
      <CardContentStyled ref={ref} {...rest}>
        {children}
      </CardContentStyled>
    );
  },
);

CardContent.displayName = 'CardContent';
