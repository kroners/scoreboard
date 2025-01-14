import { describe, expect, it } from "vitest";
import { render } from '@testing-library/react';
import App from "./App";

describe('App', () => {
  it('renders the App', () => {
    render(<App />);
  
    const title = document.querySelector('h1');

    expect(title).not.toBeNull();
    expect(title?.textContent).toBe('Football Live Scoreboard');
  })
})