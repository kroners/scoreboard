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

function App() {
  return (
    <>
      <h1>Football Live Scoreboard</h1>
      <AddMatch />
      <Scoreboard matches={initialMatches} />
    </>
  )
}

export default App
