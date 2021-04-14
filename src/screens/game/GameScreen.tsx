import React from 'react'
import styled from 'styled-components'
import Board from '../../components/board/Board'
import PlayerHud from '../../components/player-hud/PlayerHud'
import { BoardPiece } from '../../constants'
import { useGameContext } from '../../contexts/game/gameContext'

const GameWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.common.black};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  width: 800px;
  margin: 2rem auto;
  text-align: center;
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
