import { describe, it, expect, beforeEach } from 'vitest';
import { ScoreboardService } from './scoreboardService';
import { MatchModel } from '../models/scoreboard';

describe('ScoreboardService', () => {
  let scoreboardService: ScoreboardService;

  beforeEach(() => {
    scoreboardService = new ScoreboardService();
  });

  it('starts a new match', () => {
    const matches = scoreboardService.addMatch('Spain', 'Brazil');
    expect(matches[0].homeTeam).toBe('Spain');
    expect(matches[0].awayTeam).toBe('Brazil');
    expect(matches[0].status).toBe('live');
  });

  it('updates match score', () => {
    const matches = scoreboardService.addMatch('Spain', 'Brazil');
    const updatedMatches = scoreboardService.updateScore(matches[0].id, 2, 1);

    expect(updatedMatches[0].homeScore).toBe(2);
    expect(updatedMatches[0].awayScore).toBe(1);
  });

  it('changes match status to finished', () => {
    let matches: MatchModel[] = [];
    matches = scoreboardService.addMatch('Spain', 'Brazil');
    matches = scoreboardService.addMatch('Mexico', 'Canada');
    const updatedMatches = scoreboardService.finishMatch(matches[0].id);

    const finishedMatch = updatedMatches.find(m => m.id === matches[0].id);

    expect(finishedMatch?.status).toBe('finished');
  });
});
