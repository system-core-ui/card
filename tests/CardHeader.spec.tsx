import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { ThemeProvider } from '@thanh-libs/theme';
import { CardHeader } from '../src';

describe('CardHeader', () => {
  it('renders title correctly', () => {
    render(
      <ThemeProvider>
        <CardHeader title="Test Title" />
      </ThemeProvider>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders subtitle correctly', () => {
    render(
      <ThemeProvider>
        <CardHeader title="Title" subtitle="Test Subtitle" />
      </ThemeProvider>
    );
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('renders avatar and action slots', () => {
    render(
      <ThemeProvider>
        <CardHeader
          title="Title"
          avatar={<div data-testid="avatar">A</div>}
          action={<button data-testid="action">Btn</button>}
        />
      </ThemeProvider>
    );
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
    expect(screen.getByTestId('action')).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <ThemeProvider>
        <CardHeader title="Accessible Title" subtitle="Subtitle" />
      </ThemeProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
