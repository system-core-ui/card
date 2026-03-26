import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { ThemeProvider } from '@thanh-libs/theme';
import { CardContent } from '../src';

describe('CardContent', () => {
  it('renders children correctly', () => {
    render(
      <ThemeProvider>
        <CardContent>Test Content Block</CardContent>
      </ThemeProvider>
    );
    expect(screen.getByText('Test Content Block')).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <ThemeProvider>
        <CardContent>Accessible Content</CardContent>
      </ThemeProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
