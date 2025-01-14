import { describe, expect, it, vi } from "vitest";  
import { render, screen } from '@testing-library/react';
import Scoreboard from './Scoreboard';
import { MatchesContext } from '../../context/MatchesContext';
import { MatchModel } from "../../models/scoreboard";
import { initialMatches } from "../../utils/constants";

describe('Scoreboard', () => {
  const mockFinishedMatch: MatchModel = {
    id: '2',
    homeTeam: 'Germany',
    awayTeam: 'France',
    homeScore: 0,
    awayScore: 0,
    date: new Date(),
    status: 'finished'
  };

  const renderWithContext = (matches: MatchModel[] = initialMatches) => {
    return render(
      <MatchesContext.Provider 
        value={{ 
          matches: matches, 
          addMatch: vi.fn(), 
          updateScore: vi.fn(), 
          finishMatch: vi.fn() 
        }}
      >
        <Scoreboard />
      </MatchesContext.Provider>
    );
  };

  it('renders the Scoreboard with matches',  () => {
    renderWithContext();

    const matchRow = screen.getAllByTestId('match-row');
    expect(matchRow.length).toBe(5);
    expect(screen.getByText(/Mexico/)).toBeInTheDocument();
    expect(screen.getByText(/Canada/)).toBeInTheDocument();

    expect(screen.getByText(/Spain/)).toBeInTheDocument();
    expect(screen.getByText(/Brazil/)).toBeInTheDocument();
  });

  it('does not render finished matches', () => {
    renderWithContext([mockFinishedMatch]);

    expect(screen.queryByText(/Germany/)).not.toBeInTheDocument();
  });

  it('does not render anything when no matches exist', () => {
    renderWithContext([]);
    
    expect(screen.queryByText('Live Matches')).not.toBeInTheDocument();
  });
});