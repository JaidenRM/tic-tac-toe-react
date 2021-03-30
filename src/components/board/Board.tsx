import React, { useEffect } from 'react'
import { BoardPiece, Rules } from '../../constants'
import { useGameContext } from '../../contexts/game/gameContext'
import { BoardSquare, IBoardSquare } from '../board-square/BoardSquare'
import { createGroupedBoardSquares } from './Board.utils'

const BoardErrored = () => <h1>ERROR!</h1>

const Board = () => {
  const [game, handler] = useGameContext()

  useEffect(() => handler.startNewGame(), [])

  const groupedSquares = createGroupedBoardSquares(
    Rules.MAX_SQUARES,
    Rules.BOARD_LEN
  )

  return groupedSquares ? (
    <div>
      {groupedSquares.map((group) => (
        <div>{group}</div>
      ))}
    </div>
  ) : (
    <BoardErrored />
  )
}

export default Board
