import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { ThemeProvider } from '@thanh-libs/theme';
import { Card } from '../src';

describe('Card', () => {
  it('renders correctly with children', () => {
    render(
      <ThemeProvider>
        <Card>Card Content</Card>
      </ThemeProvider>
    );
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('applies elevated variant when specified', () => {
    const { container } = render(
      <ThemeProvider>
        <Card variant="elevated">Content</Card>
      </ThemeProvider>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <ThemeProvider>
        <Card>Accessible Content</Card>
      </ThemeProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
