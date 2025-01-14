import { MatchModel } from "../models/scoreboard";

export const initialMatches: MatchModel[] = [
  {
    id: '1',
    homeTeam: 'Mexico',
    awayTeam: 'Canada',
    homeScore: 0,
    awayScore: 5,
    date: new Date(),
    status: 'live'
  },
  {
    id: '2',
    homeTeam: 'Spain',
    awayTeam: 'Brazil',
    homeScore: 10,
    awayScore: 2,
    date: new Date(),
    status: 'live'
  },
  {
    id: '3',
    homeTeam: 'Germany',
    awayTeam: 'France',
    homeScore: 2,
    awayScore: 2,
    date: new Date(),
    status: 'live'
  },
  {
    id: '4',
    homeTeam: 'Uruguay',
    awayTeam: 'Italy',
    homeScore: 6,
    awayScore: 6,
    date: new Date(),
    status: 'live'
  },
  {
    id: '5',
    homeTeam: 'Argentina',
    awayTeam: 'Australia',
    homeScore: 3,
    awayScore: 1,
    date: new Date(),
    status: 'live'
  },
]