import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { ThemeProvider } from '@thanh-libs/theme';
import { CardActions } from '../src';

describe('CardActions', () => {
  it('renders children correctly', () => {
    render(
      <ThemeProvider>
        <CardActions>
          <button>Action 1</button>
          <button>Action 2</button>
        </CardActions>
      </ThemeProvider>
    );
    expect(screen.getByRole('button', { name: 'Action 1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Action 2' })).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <ThemeProvider>
        <CardActions>
          <button>Safe Action</button>
        </CardActions>
      </ThemeProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
