import { createContext, useContext, useState } from 'react';
import './App.css'
import AddMatch from './components/AddMatch/AddMatch'
import Scoreboard from './components/Scoreboard/Scoreboard'

export const initialMatches = [
  {
    homeTeam: 'Mexico',
    awayTeam: 'Canada',
    homeScore: 0,
    awayScore: 5,
  },
  {
    homeTeam: 'Spain',
    awayTeam: 'Brazil',
    homeScore: 10,
    awayScore: 2,
  },
  {
    homeTeam: 'Germany',
    awayTeam: 'France',
    homeScore: 2,
    awayScore: 2,
  },
  {
    homeTeam: 'Uruguay',
    awayTeam: 'Italy',
    homeScore: 6,
    awayScore: 6,
  },
  {
    homeTeam: 'Argentina',
    awayTeam: 'Australia',
    homeScore: 3,
    awayScore: 1,
  },
]

export type MatchesContextType = {
  matches: typeof initialMatches;
  setMatches: (matches: typeof initialMatches) => void;
};

export const MatchesContext = createContext<MatchesContextType | undefined>(undefined);

export const useMatches = () => {
  const context = useContext(MatchesContext);
  if (!context) {
    throw new Error('useMatches must be used within a MatchesProvider');
  }
  return context;
};

function App() {
  const [matches, setMatches] = useState(initialMatches);
  return (
    <MatchesContext.Provider value={{ matches, setMatches }}>
      <h1>Football Live Scoreboard</h1>
      <AddMatch />
      <Scoreboard />
    </MatchesContext.Provider>
  )
}

export default App
