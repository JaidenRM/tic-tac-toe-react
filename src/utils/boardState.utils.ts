import { BoardPiece, MoveDir, Rules } from '../constants'
import { IBoardState } from '../models/IBoardState'

const IsInBoardRange = (position: number) =>
  position >= 0 && position < Rules.MAX_SQUARES

const GetBoardPieceAtPosition = (state: IBoardState, position: number) => {
  const row = Math.floor(position / Rules.BOARD_LEN)
  const col = position % Rules.BOARD_LEN
  const isInRange = IsInBoardRange(position)

  if (row >= Rules.BOARD_LEN || col >= Rules.BOARD_LEN || !isInRange)
    return BoardPiece.None

  return state.boardState[row][col]
}

const IsValidMoveDir = (position: number, dir: MoveDir, isForward: boolean) => {
  if (!IsInBoardRange(position)) return false

  let row = Math.floor(position / Rules.BOARD_LEN)
  let col = position % Rules.BOARD_LEN
  const negationFactor = isForward ? 1 : -1

  switch (dir) {
    case MoveDir.Horizontal:
      col += negationFactor * 1
      break
    case MoveDir.LeftDiagonal:
      col += negationFactor * 1
      row += negationFactor * 1
      break
    case MoveDir.RightDiagonal:
      col += negationFactor * -1
      row += negationFactor * 1
      break
    case MoveDir.Vertical:
      row += negationFactor * 1
      break
    default:
      return false
  }

  return col >= 0 && col < Rules.BOARD_LEN && row >= 0 && row < Rules.BOARD_LEN
}

const AddPieceAtPosition = (
  state: IBoardState,
  piece: BoardPiece,
  position: number
) => {
  const row = Math.floor(position / Rules.BOARD_LEN)
  const col = position % Rules.BOARD_LEN
  const newState = { ...state }

  if (IsInBoardRange(position)) {
    newState.boardState[row][col] = piece
  }

  return newState
}
const IsBoardFull = (state: IBoardState) =>
  state.boardState.every((row) =>
    row.every((piece) => piece !== BoardPiece.None)
  )

const IsWinner = (state: IBoardState, position: number) => {
  let winner = BoardPiece.None

  Object.keys(MoveDir).forEach((movementDir) => {
    if (!Number.isNaN(Number(movementDir))) {
      const move = Number(movementDir)
      let posValid = true
      let negValid = true

      const piece = GetBoardPieceAtPosition(state, position)
      if (piece === BoardPiece.None) return

      let consecutivePieces = 1
      let negPosition = position
      let posPosition = position

      while (posValid || negValid) {
        posValid =
          IsValidMoveDir(position, move, true) &&
          GetBoardPieceAtPosition(state, posPosition + move) === piece
        negValid =
          IsValidMoveDir(position, move, false) &&
          GetBoardPieceAtPosition(state, negPosition - move) === piece

        posPosition += move
        negPosition -= move

        if (posValid) consecutivePieces += 1
        if (negValid) consecutivePieces += 1
      }

      if (consecutivePieces === Rules.WIN) winner = piece
    }
  })

  return winner
}

const ToggleBoardPiece = (piece: BoardPiece) => {
  if (piece === BoardPiece.None) return piece

  return piece === BoardPiece.O ? BoardPiece.X : BoardPiece.O
}

export {
  GetBoardPieceAtPosition,
  IsInBoardRange,
  AddPieceAtPosition,
  IsBoardFull,
  IsWinner,
  ToggleBoardPiece,
}
