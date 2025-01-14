# Live Football World Cup Scoreboard with React

A simple React application that simulates a Football World Cup Score Board, allowing you to track live football matches and their scores.

## 🚀 Features

- Display live football matches
- Show match scores in real-time
- Filter out finished matches
- Unit testing with Vitest

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## 🛠 Installation

1. Clone the repository

```bash
git clone [repository-url]
```

2. Navigate to the project directory

```bash
cd scoreboard
```

3. Install dependencies using npm or yarn

```bash
npm install
or
yarn install
```

## 💻 Available Scripts

In the project directory, you can run:

### Development

```bash
npm run dev
or
yarn dev
```

Runs the app in development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build

```bash
npm run build
or
yarn build
```

Builds the app for production to the `dist` folder.

### Testing
```bash
npm run test
or
yarn test
```

Run tests with coverage
```bash
npm run coverage
or
yarn coverage
```

### Linting
```bash
npm run lint
or
yarn lint
```

## 🏗 Project Structure

```bash
src/
├── components/
│ └── Scoreboard/
│ ├── Scoreboard.tsx
│ └── Scoreboard.test.tsx
│ └── AddMatch/
│ ├── AddMatch.tsx
│ └── AddMatch.test.tsx
│ └── MatchControlPanel/
│ ├── MatchControlPanel.tsx
│ └── MatchControlPanel.test.tsx
├── context/
│ └── MatchesContext.tsx
├── models/
│ └── scoreboard.ts
├── utils/
│ └── constants.ts
├── App.tsx
└── main.tsx
```

### Key Components

#### Scoreboard
The main component that displays the live matches. It:
- Shows live matches and their scores
- Filters out finished matches
- Uses context for state management

#### AddMatch
A component that allows users to add a new match to the scoreboard.
- Adds a new match to the scoreboard
- Uses context to add a new match

#### MatchControlPanel
A component that allows users to update the score of a match. It includes a button to finish a match.
- Updates the match score
- Finishes a match

#### MatchesContext
A React context that:
- Manages the global state for matches
- Provides methods to update match data
- Ensures consistent data across components

## 🔧 Technical Details

### Technologies Used
- React 18
- TypeScript
- Vite
- Vitest for testing
- React Testing Library
- ESLint for code quality
- Styled Components for styling
### Type Definitions
The application uses TypeScript interfaces to ensure type safety:

```typescript
interface MatchModel {
id: string;
homeTeam: string;
awayTeam: string;
homeScore: number;
awayScore: number;
date: Date;
status: 'live' | 'finished';
}
```

### Testing
- Unit tests for components using Vitest and React Testing Library
- Coverage reports exclude configuration files and type definitions
- Test files are co-located with their components

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Code Style

This project uses ESLint for code quality. The configuration extends:
- eslint:recommended
- plugin:@typescript-eslint/recommended
- plugin:react-hooks/recommended

To maintain code quality:
1. Run linting before commits
2. Ensure all tests pass
3. Follow the existing code style

## 🔍 Testing Strategy

The project follows these testing principles:
- Components are tested for rendering and functionality
- Context providers are tested for state management
- Type definitions files are excluded from coverage
- Configuration files are excluded from coverage

## 📦 Dependencies

### Main Dependencies
- react
- react-dom
- typescript

### Development Dependencies
- @vitejs/plugin-react
- @testing-library/react
- vitest
- eslint
- typescript

## 🌟 Future Improvements

- Add real-time updates
- Implement match creation/deletion
- Add match details view
- Implement sorting functionality
- Add persistence layer

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
