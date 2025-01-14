import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from '@testing-library/react';
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
    expect(title?.textContent).toBe('Football Live Scoreboard');
  });

  it('renders the AddMatch component', () => {
    render(<App />);
    const addMatch = screen.getByText('Add Match');
    expect(addMatch).toBeInTheDocument();
  });

  it('renders the Scoreboard component', () => {
    render(<App />);
    const scoreboard = screen.getByText('Scoreboard');
    expect(scoreboard).toBeInTheDocument();
  });

  it('renders app and adds a match to the list with 0-0 score when the form is submitted', () => {
    render(<App />);
    const homeTeamInput = screen.getByPlaceholderText('Home Team');
    const awayTeamInput = screen.getByPlaceholderText('Away Team');
    const addMatchButton = screen.getByText('Add Match');

    fireEvent.change(homeTeamInput, { target: { value: 'Peru' } });
    fireEvent.change(awayTeamInput, { target: { value: 'Netherlands' } });
    fireEvent.click(addMatchButton);

    const matchRows = screen.getAllByTestId("match-row");
    expect(matchRows.length).toBe(6);

    const lastMatchRow = matchRows[5];
    expect(lastMatchRow).toHaveTextContent("Peru");
    expect(lastMatchRow).toHaveTextContent("Netherlands");

    const scores = lastMatchRow.querySelectorAll("span");
    expect(scores[1].textContent).toBe("0");
    expect(scores[3].textContent).toBe("0");
  });
})

