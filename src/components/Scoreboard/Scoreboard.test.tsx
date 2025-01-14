import { describe, expect, it } from "vitest";  
import { render, screen } from '@testing-library/react';
import Scoreboard from './Scoreboard';
import { initialMatches } from "../../App";
import { MatchesContext } from '../../App';
describe('Scoreboard', () => {
  it('renders the app with matches',  () => {
    render(
      <MatchesContext.Provider value={{ matches: initialMatches, setMatches: () => {} }}>
        <Scoreboard />
      </MatchesContext.Provider>
    )

    const matchRow = screen.getAllByTestId('match-row');
    expect(matchRow.length).toBe(5);
    expect(screen.getByText(/Mexico/)).toBeInTheDocument();
    expect(screen.getByText(/Canada/)).toBeInTheDocument();

    expect(screen.getByText(/Spain/)).toBeInTheDocument();
    expect(screen.getByText(/Brazil/)).toBeInTheDocument();
  });
});