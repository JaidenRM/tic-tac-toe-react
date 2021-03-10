import { BoardPiece } from '../constants'

type Row = [BoardPiece, BoardPiece, BoardPiece]

export interface IBoardState {
  boardState: [Row, Row, Row]
}
