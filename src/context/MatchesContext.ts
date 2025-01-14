import { createContext, useContext } from 'react';
import { MatchModel } from '../models/scoreboard';

export type MatchesContextType = {
  matches: MatchModel[];
  setMatches: (matches: MatchModel[]) => void;
};

export const MatchesContext = createContext<MatchesContextType | undefined>(undefined);

export const useMatches = () => {
  const context = useContext(MatchesContext);
  if (!context) {
    throw new Error('useMatches must be used within a MatchesProvider');
  }
  return context;
};