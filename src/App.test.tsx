import React from 'react';
import { describe, expect, it } from "vitest";
import { render, screen } from '@testing-library/react';
import App from "./App";

describe('App', () => {
  it('renders the App', () => {
    render(<App />);
  
    const title = document.querySelector('h1');

    expect(title).not.toBeNull();
    expect(title?.textContent).toBe('Football Live Scoreboard');
  });

  it('renders the app with single match',  () => {
    render(<App />)
    expect(screen.getByText(/Spain/)).toBeInTheDocument();
    expect(screen.getByText(/Brazil/)).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('renders the app with multiple matches', () => {
    render(<App />)

    const matchRow = screen.getAllByTestId('match-row');
    expect(matchRow.length).toBe(5);
    expect(screen.getByText(/Mexico/)).toBeInTheDocument();
    expect(screen.getByText(/Canada/)).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });
})
