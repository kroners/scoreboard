import { describe, expect, it } from "vitest";
import { render } from '@testing-library/react';
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
})

