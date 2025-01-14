import { createContext, useContext } from 'react';
import { MatchModel } from '../models/scoreboard';

export type MatchesContextType = {
  matches: MatchModel[];
  addMatch: (homeTeam: string, awayTeam: string) => void;
  updateScore: (matchId: string, homeScore: number, awayScore: number) => void;
  finishMatch: (matchId: string) => void;
};

export const MatchesContext = createContext<MatchesContextType | undefined>(undefined);

export const useMatches = () => {
  const context = useContext(MatchesContext);
  if (!context) {
    throw new Error('useMatches must be used within a MatchesProvider');
  }
  return context;
};