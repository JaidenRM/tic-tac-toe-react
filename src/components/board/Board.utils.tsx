import React from 'react'
import { BoardPiece, Rules } from '../../constants'
import { BoardSquare, IBoardSquare } from '../board-square/BoardSquare'

export const createBoardSquares = (row: number, iterations: number = 1) => {
  const squares: JSX.Element[] = []

  for (let i = 0; i < iterations; i += 1) {
    squares.push(
      <BoardSquare
        boardPiece={BoardPiece.None}
        height="7.5rem"
        width="7.5rem"
        position={row * Rules.BOARD_LEN + i}
        key={i}
      />
    )
  }

  return squares
}

export const createGroupedBoardSquares = (
  iterations: number,
  groupSize: number
) => {
  const groupedSquares: JSX.Element[][] = []
  let counter = iterations
  let numOfLoops = 0

  while (counter > 0) {
    if (counter > groupSize)
      groupedSquares.push(createBoardSquares(numOfLoops, groupSize))
    else if (counter > 0)
      groupedSquares.push(createBoardSquares(numOfLoops, counter))

    counter -= groupSize
    numOfLoops += 1
  }

  return groupedSquares
}
