import { describe, expect, it, vi } from "vitest";  
import { render, screen, fireEvent } from '@testing-library/react';
import AddMatch from './AddMatch';
import { MatchesContext } from "../../context/MatchesContext";
import { MatchModel } from "../../models/scoreboard";

describe('AddMatch', () => {
  const setMatches = vi.fn();
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <MatchesContext.Provider value={{ matches: [] as MatchModel[], setMatches }}>
      {children}
    </MatchesContext.Provider>
  );

  it('renders form inputs and button to add a match', () => {
    render(<AddMatch />, { wrapper });
    expect(screen.getByPlaceholderText('Home Team')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Away Team')).toBeInTheDocument();
    expect(screen.getByText('Start Match')).toBeInTheDocument();
  });

  it('submits form with team names', () => {
    render(<AddMatch />, { wrapper });
    
    const homeInput = screen.getByPlaceholderText('Home Team');
    const awayInput = screen.getByPlaceholderText('Away Team');
    const submitButton = screen.getByText('Start Match');

    fireEvent.change(homeInput, { target: { value: 'Spain' } });
    fireEvent.change(awayInput, { target: { value: 'Brazil' } });
    fireEvent.click(submitButton);

    expect(setMatches).toHaveBeenCalledWith([{ id: expect.any(String), homeTeam: 'Spain', awayTeam: 'Brazil', homeScore: 0, awayScore: 0, date: expect.any(Date), status: 'live' }]);
  });
});
