import { BoardSquare, IBoardSquare } from '../board-square/BoardSquare'

export const createBoardSquares = (
  props: IBoardSquare,
  iterations: number = 1
) => {
  const squares: JSX.Element[] = []

  for (let i = 0; i < iterations; i += 1) {
    squares.push(BoardSquare({ ...props }))
  }

  return squares
}

export const createGroupedBoardSquares = (
  props: IBoardSquare,
  iterations: number,
  groupSize: number
) => {
  const groupedSquares: JSX.Element[][] = []
  let counter = iterations

  while (counter > 0) {
    if (counter > groupSize)
      groupedSquares.push(createBoardSquares(props, groupSize))
    else if (counter > 0)
      groupedSquares.push(createBoardSquares(props, counter))

    counter -= groupSize
  }

  return groupedSquares
}
