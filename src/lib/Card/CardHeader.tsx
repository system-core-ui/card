import { forwardRef } from 'react';

import type { CardHeaderProps } from '../models';

import {
  CardHeaderStyled,
  CardHeaderAvatarStyled,
  CardHeaderContentStyled,
  CardHeaderTitleStyled,
  CardHeaderSubtitleStyled,
  CardHeaderActionStyled,
} from './styled';

/**
 * CardHeader — displays title, subtitle, avatar, and action slot.
 *
 * @example
 * ```tsx
 * <CardHeader
 *   avatar={<Avatar>U</Avatar>}
 *   title="Card Title"
 *   subtitle="Secondary text"
 *   action={<IconButton><MoreIcon /></IconButton>}
 * />
 * ```
 */
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ title, subtitle, avatar, action, children, ...rest }, ref) => {
    return (
      <CardHeaderStyled ref={ref} {...rest}>
        {avatar && (
          <CardHeaderAvatarStyled>{avatar}</CardHeaderAvatarStyled>
        )}
        <CardHeaderContentStyled>
          {title && <CardHeaderTitleStyled>{title}</CardHeaderTitleStyled>}
          {subtitle && (
            <CardHeaderSubtitleStyled>{subtitle}</CardHeaderSubtitleStyled>
          )}
        </CardHeaderContentStyled>
        {action && (
          <CardHeaderActionStyled>{action}</CardHeaderActionStyled>
        )}
        {children}
      </CardHeaderStyled>
    );
  },
);

CardHeader.displayName = 'CardHeader';
