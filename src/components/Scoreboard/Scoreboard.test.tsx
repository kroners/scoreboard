import { describe, expect, it } from "vitest";  
import { render, screen } from '@testing-library/react';
import Scoreboard from './Scoreboard';
import { initialMatches } from "../../App";
import { MatchesContext } from '../../App';

describe('Scoreboard', () => {
  const mockFinishedMatch = {
    id: '2',
    homeTeam: 'Germany',
    awayTeam: 'France',
    homeScore: 0,
    awayScore: 0,
    date: new Date(),
    status: 'finished'
  };

  const wrapper = ({ children, matches }: { children: React.ReactNode, matches: any[] }) => (
    <MatchesContext.Provider value={{ matches, setMatches: () => {} }}>
      {children}
    </MatchesContext.Provider>
  );

  it('renders the Scoreboard with matches',  () => {
    render(<Scoreboard />, { wrapper, matches: [...initialMatches] });

    const matchRow = screen.getAllByTestId('match-row');
    expect(matchRow.length).toBe(5);
    expect(screen.getByText(/Mexico/)).toBeInTheDocument();
    expect(screen.getByText(/Canada/)).toBeInTheDocument();

    expect(screen.getByText(/Spain/)).toBeInTheDocument();
    expect(screen.getByText(/Brazil/)).toBeInTheDocument();
  });

  it('does not render finished matches', () => {
    render(<Scoreboard />, { wrapper, matches: [mockFinishedMatch] });
    expect(screen.queryByText(/Germany/)).not.toBeInTheDocument();
  });

  it('does not render anything when no matches exist', () => {
    render(<Scoreboard />, { wrapper, matches: [] });
    expect(screen.queryByText('Live Matches')).not.toBeInTheDocument();
  });
});