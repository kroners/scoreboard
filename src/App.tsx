
import './App.css'

function App() {

  const matches = [
    {
      team1: 'Mexico',
      team2: 'Canada',
      score1: 0,
      score2: 5,
    },
    {
      team1: 'Spain',
      team2: 'Brazil',
      score1: 10,
      score2: 2,
    },
    {
      team1: 'Germany',
      team2: 'France',
      score1: 2,
      score2: 2,
    },
    {
      team1: 'Uruguay',
      team2: 'Italy',
      score1: 6,
      score2: 6,
    },
    {
      team1: 'Argentina',
      team2: 'Australia',
      score1: 3,
      score2: 1,
    },
  ]

  return (
    <>
      <h1>Football Live Scoreboard</h1>
      <div className='match-container'>
        <div className='match-row' data-testid='match-row'>
          <h2>Spain</h2>
          <h2>2</h2>
          <span>-</span>
          <h2>Brazil</h2>
          <h2>1</h2>
        </div>
      </div>
    </>
  )
}

export default App
