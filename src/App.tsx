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

const FormContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Form = styled.form`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Title = styled.h2`
  color: #343a40;
  margin-bottom: 20px;
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

  const handleAddMatch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMatches([...matches, { homeTeam, awayTeam, homeScore: 0, awayScore: 0 }]);
    setHomeTeam('');
    setAwayTeam('');
  }

  return (
    <>
      <h1>Football Live Scoreboard</h1>
      <FormContainer>
        <Form onSubmit={handleAddMatch}>
          <Title>Add Match</Title>
          <Input type="text" placeholder='Home Team' value={homeTeam} onChange={(e) => setHomeTeam(e.target.value)} />
          <Input type="text" placeholder='Away Team' value={awayTeam} onChange={(e) => setAwayTeam(e.target.value)} />
          <Button type="submit">Start Match</Button>
        </Form>
      </FormContainer>
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
