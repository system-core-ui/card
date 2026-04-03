import { CSSObject, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeSchema } from '@thanh-libs/theme';
import { pxToRem } from '@thanh-libs/utils';

import type { CardVariant } from '../models';

const TRANSITION_DURATION = 200;

// ─── Card Root ──────────────────────────────────────────

export interface CardStyledProps {
  ownerVariant: CardVariant;
  ownerHoverable?: boolean;
}

export const CardStyled = styled.div<CardStyledProps>(
  ({ ownerVariant, ownerHoverable }): CSSObject => {
    const { palette, shape, shadows }: ThemeSchema = useTheme();

    const base: CSSObject = {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      boxSizing: 'border-box',
      borderRadius: shape?.borderRadiusMedium ?? '0.5rem',
      overflow: 'hidden',
      transition: `box-shadow ${TRANSITION_DURATION}ms ease, transform ${TRANSITION_DURATION}ms ease`,
    };

    const variants: Record<CardVariant, CSSObject> = {
      outlined: {
        backgroundColor: palette?.background?.default ?? '#fff',
        border: `${pxToRem(1)} solid ${palette?.divider ?? '#e0e0e0'}`,
      },
      elevated: {
        backgroundColor: palette?.background?.default ?? '#fff',
        border: 'none',
        boxShadow: shadows?.[1] ?? '0 1px 3px rgba(0,0,0,0.12)',
      },
      filled: {
        backgroundColor: palette?.background?.secondary ?? '#f5f5f5',
        border: 'none',
      },
    };

    const hoverStyles: CSSObject = ownerHoverable
      ? {
          cursor: 'pointer',
          '&:hover': {
            boxShadow: shadows?.[5] ?? '0 4px 20px rgba(0,0,0,0.12)',
            transform: 'translateY(-2px)',
          },
        }
      : {};

    return {
      ...base,
      ...variants[ownerVariant],
      ...hoverStyles,
    };
  },
);

// ─── CardHeader ─────────────────────────────────────────

export const CardHeaderStyled = styled.div((): CSSObject => {
  const { spacing }: ThemeSchema = useTheme();

  return {
    display: 'flex',
    alignItems: 'center',
    gap: spacing?.medium ?? '0.75rem',
    padding: spacing?.large ?? '1rem',
  };
});

export const CardHeaderAvatarStyled = styled.div((): CSSObject => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}));

export const CardHeaderContentStyled = styled.div((): CSSObject => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minWidth: 0,
}));

export const CardHeaderTitleStyled = styled.div((): CSSObject => {
  const { palette }: ThemeSchema = useTheme();

  return {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.4,
    color: palette?.common?.black ?? '#212121',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };
});

export const CardHeaderSubtitleStyled = styled.div((): CSSObject => {
  const { palette }: ThemeSchema = useTheme();

  return {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.4,
    color: palette?.disabled?.main ?? '#9e9e9e',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };
});

export const CardHeaderActionStyled = styled.div((): CSSObject => ({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  marginLeft: 'auto',
}));

// ─── CardContent ────────────────────────────────────────

export const CardContentStyled = styled.div((): CSSObject => {
  const { spacing }: ThemeSchema = useTheme();

  return {
    padding: `0 ${spacing?.large ?? '1rem'} ${spacing?.large ?? '1rem'}`,
    flex: 1,
    '&:first-of-type': {
      paddingTop: spacing?.large ?? '1rem',
    },
  };
});

// ─── CardMedia ──────────────────────────────────────────

export interface CardMediaStyledProps {
  ownerHeight?: number | string;
}

export const CardMediaImgStyled = styled.img<CardMediaStyledProps>(
  ({ ownerHeight }): CSSObject => ({
    display: 'block',
    width: '100%',
    height: ownerHeight ?? 140,
    objectFit: 'cover',
  }),
);

export const CardMediaDivStyled = styled.div<
  CardMediaStyledProps & { ownerImage?: string }
>(
  ({ ownerHeight, ownerImage }): CSSObject => ({
    display: 'block',
    width: '100%',
    height: ownerHeight ?? 140,
    backgroundImage: ownerImage ? `url(${ownerImage})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }),
);

// ─── CardActions ────────────────────────────────────────

export const CardActionsStyled = styled.div((): CSSObject => {
  const { spacing }: ThemeSchema = useTheme();

  return {
    display: 'flex',
    alignItems: 'center',
    gap: spacing?.small ?? '0.5rem',
    padding: `${spacing?.small ?? '0.5rem'} ${spacing?.large ?? '1rem'}`,
  };
});
