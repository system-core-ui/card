import { forwardRef } from 'react';

import type { CardMediaProps } from '../models';

import { CardMediaImgStyled, CardMediaDivStyled } from './styled';

/**
 * CardMedia — cover image or media area of a Card.
 *
 * Renders as `<img>` by default, or a background `<div>` when `component="div"`.
 *
 * @example
 * ```tsx
 * <CardMedia image="/photo.jpg" alt="Photo" height={200} />
 * <CardMedia image="/bg.jpg" component="div" height={300} />
 * ```
 */
export const CardMedia = forwardRef<HTMLImageElement | HTMLDivElement, CardMediaProps>(
  (
    {
      image,
      alt = '',
      height = 140,
      component = 'img',
      src,
      ...rest
    },
    ref,
  ) => {
    if (component === 'div') {
      return (
        <CardMediaDivStyled
          ref={ref as React.Ref<HTMLDivElement>}
          role="img"
          aria-label={alt}
          ownerHeight={height}
          ownerImage={image ?? src}
          {...(rest as React.HTMLAttributes<HTMLDivElement>)}
        />
      );
    }

    return (
      <CardMediaImgStyled
        ref={ref as React.Ref<HTMLImageElement>}
        src={image ?? src}
        alt={alt}
        ownerHeight={height}
        {...rest}
      />
    );
  },
);

CardMedia.displayName = 'CardMedia';
