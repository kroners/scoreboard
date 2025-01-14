import styled from 'styled-components';
import './App.css'
import { useState } from 'react';

const MatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MatchRow = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
`;

const TeamName = styled.span`
  flex: 1;
  font-weight: 500;
`;

const Score = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  margin: 0 15px;
`;

  const oldMatches = [
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

function App() {
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [matches, setMatches] = useState(oldMatches);

  const handleAddMatch = () => {
    setMatches([...matches, { homeTeam, awayTeam, homeScore: 0, awayScore: 0 }]);
    setHomeTeam('');
    setAwayTeam('');
  }

  return (
    <>
      <h1>Football Live Scoreboard</h1>
      <div>
        <input type="text" placeholder='Home Team' value={homeTeam} onChange={(e) => setHomeTeam(e.target.value)} />
        <input type="text" placeholder='Away Team' value={awayTeam} onChange={(e) => setAwayTeam(e.target.value)} />
        <button onClick={handleAddMatch}>Start Match</button>
      </div>
      <MatchContainer>
        {matches.map((match, index) => (
          <MatchRow key={index} data-testid='match-row'>
            <TeamName>{match.homeTeam}</TeamName>
            <Score>{match.homeScore}</Score>
            <span>-</span>
            <Score>{match.awayScore}</Score>
            <TeamName>{match.awayTeam}</TeamName>
          </MatchRow>
        ))}
      </MatchContainer>
    </>
  )
}

export default App
