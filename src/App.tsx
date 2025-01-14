import { useState } from 'react';
import './App.css'
import AddMatch from './components/AddMatch/AddMatch'
import Scoreboard from './components/Scoreboard/Scoreboard'
import { MatchModel } from './models/scoreboard';
import { initialMatches } from './utils/constants';
import { MatchesContext } from './context/MatchesContext';
import { MatchControlPanel } from './components/MatchControlPanel/MatchControlPanel';

function App() {
  const [matches, setMatches] = useState<MatchModel[]>(initialMatches);
  return (
    <MatchesContext.Provider value={{ matches, setMatches }}>
      <h1>Football Live Scoreboard</h1>
      <AddMatch /> 
      <Scoreboard />
      <MatchControlPanel />
    </MatchesContext.Provider>
  )
}

export default App
