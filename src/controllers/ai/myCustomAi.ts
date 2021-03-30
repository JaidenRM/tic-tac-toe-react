import { Rules, BoardPiece, MoveDir } from '../../constants'
import { IAiLogic } from '../../models/IAiLogic'
import { IBoardState } from '../../models/IBoardState'

function isPositionValid(position: number) {
  return position >= 0 && position <= 8
}

function getPieceAt(state: IBoardState, position: number) {
  return state.boardState[Math.floor(position / 3)][position % 3]
}

function scoreMove(
  self: number,
  opp: number,
  none: number,
  position: number
): number {
  if (self === Rules.WIN) return 420
  if (opp === Rules.WIN - 1) return 69
  if (self === Rules.WIN - 1 && opp === 0) return 5

  if (position === 5) return 3
  if (position in [0, 3, 7, 9]) return 2

  return 0
}

function rateMove(state: IBoardState, self: BoardPiece, position: number) {
  let rating = 0

  Object.keys(MoveDir).forEach((movementDir) => {
    if (!Number.isNaN(Number(movementDir))) {
      const move = Number(movementDir)
      let posValid = true
      let negValid = true
      const movePath = {
        [BoardPiece.None]: 0,
        [BoardPiece.X]: 0,
        [BoardPiece.O]: 0,
      }

      movePath[self] += 1

      while (posValid && negValid) {
        posValid = isPositionValid(move + position)
        negValid = isPositionValid(move - position)

        if (posValid) movePath[getPieceAt(state, position)] += 1
        if (negValid) movePath[getPieceAt(state, position)] += 1
      }

      const opp = BoardPiece.O === self ? BoardPiece.O : BoardPiece.X
      rating += scoreMove(
        movePath[self],
        movePath[opp],
        movePath[BoardPiece.None],
        position
      )
    }
  })

  return rating
}

function rateAllMoves(state: IBoardState, self: BoardPiece) {
  const ratedMoves: { [key: number]: number } = {}

  state.boardState.forEach((row, rowInd) => {
    row.forEach((pos, posIndex) => {
      if (pos === BoardPiece.None) {
        const positon = rowInd * row.length + posIndex
        ratedMoves[positon] = rateMove(state, self, positon)
      }
    })
  })

  return ratedMoves
}

class MyCustomAi implements IAiLogic {
  calculateNextMove = (boardState: IBoardState, self: BoardPiece) => {
    const state = { ...boardState }
    const moves = rateAllMoves(state, self)
    const bestMove = Object.keys(moves)
      .map(Number)
      .reduce((prev, curr) => (moves[prev] > moves[curr] ? prev : curr))

    state.boardState[Math.floor(bestMove / Rules.BOARD_LEN)][
      bestMove % Rules.BOARD_LEN
    ] = self

    return state
  }
}

export default MyCustomAi
