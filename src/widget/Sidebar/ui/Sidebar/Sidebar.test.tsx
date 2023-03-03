import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widget/Sidebar/ui/';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';

describe('Sidebar', () => {
  test('with only first param', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByRole('button', { name: /toggle/i });
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
