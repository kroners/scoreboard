import styled from 'styled-components';
import { useMatches } from '../../context/MatchesContext';
import { MatchModel } from '../../models/scoreboard';

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

const Scoreboard = () => {
  const { matches } = useMatches();
  const liveMatches = matches.filter((match: MatchModel) => match.status === 'live');
  return (
      <MatchContainer>
        <h1>Scoreboard</h1>
        {liveMatches.map((match: MatchModel, index: number) => (
          <MatchRow key={index} data-testid='match-row'>
            <TeamName>{match.homeTeam}</TeamName>
            <Score>{match.homeScore}</Score>
            <span>-</span>
            <Score>{match.awayScore}</Score>
            <TeamName>{match.awayTeam}</TeamName>
          </MatchRow>
        ))}
      </MatchContainer>
  )
}

export default Scoreboard;