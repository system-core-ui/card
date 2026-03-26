import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { ThemeProvider } from '@thanh-libs/theme';
import { CardMedia } from '../src';

describe('CardMedia', () => {
  it('renders as img element by default', () => {
    const { container } = render(
      <ThemeProvider>
        <CardMedia image="/test.jpg" alt="test image" height={200} />
      </ThemeProvider>
    );
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test.jpg');
    expect(img).toHaveAttribute('alt', 'test image');
  });

  it('renders as div when component="div"', () => {
    const { container } = render(
      <ThemeProvider>
        <CardMedia component="div" image="/test-bg.jpg" height={300} alt="background media" />
      </ThemeProvider>
    );
    const div = container.querySelector('div[role="img"]');
    expect(div).toBeInTheDocument();
    expect(div).toHaveAttribute('aria-label', 'background media');
  });

  it('has no accessibility violations for img', async () => {
    const { container } = render(
      <ThemeProvider>
        <CardMedia image="/test.jpg" alt="accessible test image" />
      </ThemeProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  
  it('has no accessibility violations for div', async () => {
    const { container } = render(
      <ThemeProvider>
        <CardMedia component="div" image="/test-bg.jpg" alt="accessible background" />
      </ThemeProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
