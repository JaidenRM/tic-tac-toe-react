import React from 'react'
import { ThemeProvider } from 'styled-components'
import Board from './components/board/Board'
import { GameProvider } from './contexts/game/gameContext'
import GameScreen from './screens/game/GameScreen'
import { defaultTheme } from './themes'
import GlobalStyle from './themes/globalStyles'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div className="App">
        <GameProvider>
          <GameScreen />
        </GameProvider>
      </div>
    </ThemeProvider>
  )
}

export default App
