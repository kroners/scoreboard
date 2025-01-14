import { fireEvent, render, screen } from "@testing-library/react";
import { MatchesContext } from "../../context/MatchesContext";
import { expect, vi, describe, it } from "vitest";
import { MatchModel } from "../../models/scoreboard";
import { MatchControlPanel } from "./MatchControlPanel";

describe('MatchControlPanel', () => {
  const mockUpdateScore = vi.fn();
  const mockFinishMatch = vi.fn();

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

  it('updates score when input changes', () => {
    renderWithContext([mockMatch]);
    
    const homeScoreInput = screen.getAllByRole('spinbutton')[0];
    fireEvent.change(homeScoreInput, { target: { value: '2' } });
    expect(mockUpdateScore).toHaveBeenCalledWith(mockMatch.id, 2, mockMatch.homeScore);
    
    const awayScoreInput = screen.getAllByRole('spinbutton')[1];
    fireEvent.change(awayScoreInput, { target: { value: '2' } });
    expect(mockUpdateScore).toHaveBeenCalledWith(mockMatch.id, 2, mockMatch.awayScore);
  });

  it('finishes match when finish button is clicked', () => {
    renderWithContext([mockMatch]);
    
    const finishButton = screen.getByText('Finish Match');
    fireEvent.click(finishButton);
    expect(mockFinishMatch).toHaveBeenCalledWith(mockMatch.id);
  });
});
