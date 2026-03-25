import { HTMLAttributes, ImgHTMLAttributes, ReactNode } from 'react';

// ─── Variants ───────────────────────────────────────────

/** Visual style of the Card */
export type CardVariant = 'outlined' | 'elevated' | 'filled';

// ─── Card ───────────────────────────────────────────────

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual style of the card. */
  variant?: CardVariant;
  /** Lift effect on hover. */
  hoverable?: boolean;
}

// ─── CardHeader ─────────────────────────────────────────

export interface CardHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Main title. */
  title?: ReactNode;
  /** Secondary text beneath the title. */
  subtitle?: ReactNode;
  /** Slot for avatar or icon on the left side. */
  avatar?: ReactNode;
  /** Slot for an action element in the top-right corner. */
  action?: ReactNode;
}

// ─── CardContent ────────────────────────────────────────

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  /** Body content. */
  children?: ReactNode;
}

// ─── CardMedia ──────────────────────────────────────────

export interface CardMediaProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'height'> {
  /** Image URL. */
  image?: string;
  /** Alt text for the media. */
  alt?: string;
  /** Height of the media area. */
  height?: number | string;
  /** Render as `<img>` (default) or background `<div>`. */
  component?: 'img' | 'div';
}

// ─── CardActions ────────────────────────────────────────

export interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
  /** Action buttons or links. */
  children?: ReactNode;
}
