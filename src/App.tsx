import React from 'react'
import Board from './components/board/Board'
import { GameProvider } from './contexts/game/gameContext'
import GameScreen from './screens/game/GameScreen'

function App() {
  return (
    <div className="App">
      <GameProvider>
        <GameScreen />
      </GameProvider>
    </div>
  )
}

export default App
