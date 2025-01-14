
import './App.css'

function App() {

  const matches = [
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

  return (
    <>
      <h1>Football Live Scoreboard</h1>
      <div className='match-container'>
        {matches.map((match, index) => (
          <div className='match-row' data-testid='match-row' key={index}>
            <h2>{match.homeTeam}</h2>
            <h2>{match.homeScore}</h2>
            <span>-</span>
            <h2>{match.awayTeam}</h2>
            <h2>{match.awayScore}</h2>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
