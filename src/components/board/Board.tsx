import React from 'react'
import { BoardPiece, Rules } from '../../constants'
import { BoardSquare, IBoardSquare } from '../board-square/BoardSquare'
import { createGroupedBoardSquares } from './Board.utils'

const Board = () => {
  const squareProps: IBoardSquare = {
    boardPiece: BoardPiece.None,
    height: '10rem',
    width: '10rem',
  }
  const groupedSquares = createGroupedBoardSquares(
    squareProps,
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
    <></>
  )
}

export default Board
