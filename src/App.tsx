import { useState } from 'react';
import styled from 'styled-components';
import './App.css'
import AddMatch from './components/AddMatch/AddMatch'
import Scoreboard from './components/Scoreboard/Scoreboard'
import MatchControlPanel from './components/MatchControlPanel/MatchControlPanel';
import { MatchModel } from './models/scoreboard';
// import { initialMatches } from './utils/constants';
import { MatchesContext } from './context/MatchesContext';
import { ScoreboardService } from './services/scoreboardService';

const Title = styled.h1`
  text-align: center;
  color: #343a40;
  margin-bottom: 30px;
`;

function App() {
  const [matches, setMatches] = useState<MatchModel[]>([]);
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
      <Title>Live Football World Cup Scoreboard</Title>
      <AddMatch /> 
      <Scoreboard />
      <MatchControlPanel />
    </MatchesContext.Provider>
  )
}

export default App
