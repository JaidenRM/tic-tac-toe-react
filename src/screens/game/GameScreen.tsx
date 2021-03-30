import React, { useEffect } from 'react'
import styled from 'styled-components'
import Board from '../../components/board/Board'
import PlayerHud from '../../components/player-hud/PlayerHud'
import { BoardPiece } from '../../constants'
import {
  GameProvider,
  IGameState,
  useGameContext,
} from '../../contexts/game/gameContext'
import { IPlayer } from '../../models/IPlayer'

const GameWrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;
`

const GameScreen = () => {
  const [gameState, gameHandlers] = useGameContext()
  const p1Piece = BoardPiece.X
  const p2Piece = BoardPiece.O

  return (
    <GameWrapper>
      <PlayerHud
        name="Player 1"
        wins={0}
        losses={0}
        boardPiece={p1Piece}
        hasMove={p1Piece === gameState.pieceTurn}
      />
      <Board />
      <PlayerHud
        name="Player 2"
        wins={0}
        losses={0}
        boardPiece={p2Piece}
        hasMove={p2Piece === gameState.pieceTurn}
      />
    </GameWrapper>
  )
}

export default GameScreen
