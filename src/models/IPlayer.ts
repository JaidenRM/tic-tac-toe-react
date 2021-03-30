import { BoardPiece } from '../constants'

export interface IPlayer {
  name: string
  wins: number
  losses: number
  boardPiece: BoardPiece
  hasMove?: boolean
  isAi?: boolean
}
