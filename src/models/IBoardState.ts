import { BoardPiece } from '../constants'

type Row = [BoardPiece, BoardPiece, BoardPiece]
type Board = [Row, Row, Row]

export interface IBoardState {
  boardState: Board
}
