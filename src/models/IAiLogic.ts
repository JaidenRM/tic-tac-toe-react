import { BoardPiece } from '../constants'
import { IBoardState } from './IBoardState'

export interface IAiLogic {
  calculateNextMove: (state: IBoardState, self: BoardPiece) => IBoardState
}
