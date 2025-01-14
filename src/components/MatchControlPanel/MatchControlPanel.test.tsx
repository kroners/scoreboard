import { render, screen } from "@testing-library/react";
import { MatchesContext } from "../../context/MatchesContext";
import { expect, vi, describe, it } from "vitest";
import { MatchModel } from "../../models/scoreboard";
import { MatchControlPanel } from "./MatchControlPanel";

describe('MatchControlPanel', () => {
  const mockMatch: MatchModel = {
    id: '1',
    homeTeam: 'Spain',
    awayTeam: 'Brazil',
    homeScore: 0,
    awayScore: 0,
    date: new Date(),
    status: 'live',
  };
  
  const renderWithContext = (matches: MatchModel[]) => {
    return render(
      <MatchesContext.Provider
        value={{
          matches,
          setMatches: vi.fn(),
        }}
      >
        <MatchControlPanel />
      </MatchesContext.Provider>
    );
  };

  it('renders match summary table when matches exist', () => {
    renderWithContext([mockMatch]);
    expect(screen.getByText('Match Summary Manager')).toBeInTheDocument();
    expect(screen.getByText('Spain - Brazil')).toBeInTheDocument();
  });

    it('does not render anything when no matches exist', () => {
    renderWithContext([]);
    expect(screen.queryByText('Match Summary Manager')).not.toBeInTheDocument();
  });
});
