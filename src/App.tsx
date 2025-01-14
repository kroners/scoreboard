import { useState } from 'react';
import './App.css'
import AddMatch from './components/AddMatch/AddMatch'
import Scoreboard from './components/Scoreboard/Scoreboard'
import { MatchModel } from './models/scoreboard';
import { initialMatches } from './utils/constants';
import { MatchesContext } from './context/MatchesContext';
import { MatchControlPanel } from './components/MatchControlPanel/MatchControlPanel';
import { ScoreboardService } from './services/scoreboardService';

function App() {
  const [matches, setMatches] = useState<MatchModel[]>(initialMatches);
  const scoreboardService = new ScoreboardService();

  const addMatch = (homeTeam: string, awayTeam: string) => {
    setMatches(scoreboardService.addMatch(matches, homeTeam, awayTeam));
  };

  const updateScore = (matchId: string, homeScore: number, awayScore: number) => {
    setMatches(scoreboardService.updateScore(matches, matchId, homeScore, awayScore));
  };

  const finishMatch = (matchId: string) => {
    setMatches(scoreboardService.finishMatch(matches, matchId));
  };

  return (
    <MatchesContext.Provider value={{ matches, addMatch, updateScore, finishMatch }}>
      <h1>Football Live Scoreboard</h1>
      <AddMatch /> 
      <Scoreboard />
      <MatchControlPanel />
    </MatchesContext.Provider>
  )
}

export default App
