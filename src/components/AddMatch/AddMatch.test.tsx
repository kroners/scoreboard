import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import AddMatch from './AddMatch';

describe('AddMatch', () => {
  it('renders form inputs and button to add a match', () => {
    render(<AddMatch />);
    expect(screen.getByPlaceholderText('Home Team')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Away Team')).toBeInTheDocument();
    expect(screen.getByText('Start Match')).toBeInTheDocument();
  });

  it('renders app and adds a match to the list with 0-0 score when the form is submitted', () => {
    render(<AddMatch />);
    const homeTeamInput = screen.getByPlaceholderText('Home Team');
    const awayTeamInput = screen.getByPlaceholderText('Away Team');
    const startMatchButton = screen.getByText('Start Match');

    fireEvent.change(homeTeamInput, { target: { value: 'Peru' } });
    fireEvent.change(awayTeamInput, { target: { value: 'Netherlands' } });
    fireEvent.click(startMatchButton);

    const matchRows = screen.getAllByTestId("match-row");
    expect(matchRows.length).toBe(6);

    const lastMatchRow = matchRows[5];
    expect(lastMatchRow).toHaveTextContent("Peru");
    expect(lastMatchRow).toHaveTextContent("Netherlands");

    const scores = lastMatchRow.querySelectorAll("span");
    expect(scores[1].textContent).toBe("0");
    expect(scores[3].textContent).toBe("0");
  });
});