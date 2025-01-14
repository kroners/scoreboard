import { describe, expect, it } from "vitest";
import { act, fireEvent, render, screen } from '@testing-library/react';
import App from "./App";
import Scoreboard from "./components/Scoreboard/Scoreboard";

describe('useMatches', () => {
  it('throws an error when used outside of MatchesProvider', () => {
    expect(() => render(<Scoreboard />)).toThrow(
      'useMatches must be used within a MatchesProvider'
    );
  });
});

describe('App', () => {
  it('renders the App', () => {
    render(<App />);
  
    const title = document.querySelector('h1');

    expect(title).not.toBeNull();
    expect(title?.textContent).toBe('Live Football World Cup Scoreboard');
  });

  it('renders Add Match section only when no matches exist', () => {
    render(<App />);

    expect(screen.getByText('Add Match')).toBeInTheDocument();
    expect(screen.queryByText('Live Matches')).not.toBeInTheDocument();
    expect(screen.queryByText('Match Summary Manager')).not.toBeInTheDocument();
  });

  it('renders all sections when matches exist', () => {
    render(<App />);

    const homeTeam = 'Spain';
    const awayTeam = 'Brazil';

    act(() => {
      const addMatchButton = screen.getByText('Add Match');

      const homeTeamInput = screen.getByPlaceholderText('Home Team');
      const awayTeamInput = screen.getByPlaceholderText('Away Team');

      fireEvent.change(homeTeamInput, { target: { value: homeTeam } });
      fireEvent.change(awayTeamInput, { target: { value: awayTeam } });
      fireEvent.click(addMatchButton);
    });

    expect(screen.getByText('Live Football World Cup Scoreboard')).toBeInTheDocument();
    expect(screen.getByText('Live Matches')).toBeInTheDocument();
    expect(screen.getByText('Match Control Panel')).toBeInTheDocument();
    expect(screen.getByText(homeTeam)).toBeInTheDocument();
    expect(screen.getByText(awayTeam)).toBeInTheDocument();
  });

  it('renders app and adds a match to the list with 0-0 score when the form is submitted', () => {
    render(<App />);

    const homeTeam = 'Spain';
    const awayTeam = 'Brazil';

    act(() => {
      const addMatchButton = screen.getByText('Add Match');

      const homeTeamInput = screen.getByPlaceholderText('Home Team');
      const awayTeamInput = screen.getByPlaceholderText('Away Team');

      fireEvent.change(homeTeamInput, { target: { value: homeTeam } });
      fireEvent.change(awayTeamInput, { target: { value: awayTeam } });
      fireEvent.click(addMatchButton);
    });

    const matchRows = screen.getAllByTestId("match-row");
    expect(matchRows.length).toBe(1);

    const lastMatchRow = matchRows[0];
    expect(lastMatchRow).toHaveTextContent(homeTeam);
    expect(lastMatchRow).toHaveTextContent(awayTeam);

    const scores = lastMatchRow.querySelectorAll("span");
    expect(scores[1].textContent).toBe("0");
    expect(scores[3].textContent).toBe("0");
  });

      it('renders all sections and updates match score', () => {
    render(<App />);

    const homeTeam = 'Uruguay';
    const awayTeam = 'Italy';

    act(() => {
      const addMatchButton = screen.getByText('Add Match');

      const homeTeamInput = screen.getByPlaceholderText('Home Team');
      const awayTeamInput = screen.getByPlaceholderText('Away Team');

      fireEvent.change(homeTeamInput, { target: { value: homeTeam } });
      fireEvent.change(awayTeamInput, { target: { value: awayTeam } });
      fireEvent.click(addMatchButton);
    });

      act(() => {
      const homeScoreInput = screen.getByPlaceholderText('Home Score');
      const awayScoreInput = screen.getByPlaceholderText('Away Score');
      fireEvent.change(homeScoreInput, { target: { value: '6' } });
      fireEvent.change(awayScoreInput, { target: { value: '6' } });
    });

    expect(screen.getByText(homeTeam)).toBeInTheDocument();
    expect(screen.getByText(awayTeam)).toBeInTheDocument();
    expect(screen.getAllByText('6')).toHaveLength(2);
  });

    it('renders all sections and finishes match', () => {
    render(<App />);

    const homeTeam = 'Uruguay';
    const awayTeam = 'Italy';

    act(() => {
      const addMatchButton = screen.getByText('Add Match');
      const homeTeamInput = screen.getByPlaceholderText('Home Team');
      const awayTeamInput = screen.getByPlaceholderText('Away Team');
      fireEvent.change(homeTeamInput, { target: { value: homeTeam } });
      fireEvent.change(awayTeamInput, { target: { value: awayTeam } });
      fireEvent.click(addMatchButton);
    });

    act(() => {
      const finishButton = screen.getByText('Finish Match');
      fireEvent.click(finishButton);
    });

    expect(screen.getByText('finished')).toBeInTheDocument();
  });
})

