import { useState } from 'react';
import './App.css'
import AddMatch from './components/AddMatch/AddMatch'
import Scoreboard from './components/Scoreboard/Scoreboard'
import { MatchModel } from './models/scoreboard';
import { initialMatches } from './utils/constants';
import { MatchesContext } from './context/MatchesContext';

function App() {
  const [matches, setMatches] = useState<MatchModel[]>(initialMatches);
  return (
    <MatchesContext.Provider value={{ matches, setMatches }}>
      <h1>Football Live Scoreboard</h1>
      <AddMatch /> 
      <Scoreboard />
    </MatchesContext.Provider>
  )
}

export default App
