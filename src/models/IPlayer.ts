import BoardPiece from '../constants'

export interface IPlayer {
  name: string
  wins: number
  losses: number
  hasMove: boolean
  boardPiece: BoardPiece
}
