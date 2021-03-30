import React from 'react'
import { BoardPiece, PlayState, Rules } from '../../constants'
import { IBoardState } from '../../models/IBoardState'
import {
  AddPieceAtPosition,
  GetBoardPieceAtPosition,
  IsBoardFull,
  IsInBoardRange,
  IsWinner,
  ToggleBoardPiece,
} from '../../utils/boardState.utils'

export interface IGameState {
  pieceTurn: BoardPiece
  board: IBoardState
  playState: PlayState
}

interface IGameStateHandler {
  makeMove: (position: number) => BoardPiece
  setIsPlaying: (isPlaying: boolean) => void
  startNewGame: () => void
}

const defaultBoard: IBoardState = {
  boardState: [
    [BoardPiece.None, BoardPiece.None, BoardPiece.None],
    [BoardPiece.None, BoardPiece.None, BoardPiece.None],
    [BoardPiece.None, BoardPiece.None, BoardPiece.None],
  ],
}

const defaultGameState: IGameState = {
  pieceTurn: BoardPiece.None,
  board: defaultBoard,
  playState: PlayState.None,
}

const startGameState: IGameState = {
  pieceTurn: Rules.FIRST_PLAYER,
  board: defaultBoard,
  playState: PlayState.InGame,
}

const defaultGameHandlers: IGameStateHandler = {
  makeMove: () => BoardPiece.None,
  setIsPlaying: () => {},
  startNewGame: () => {},
}

const GameContext = React.createContext<[IGameState, IGameStateHandler]>([
  defaultGameState,
  defaultGameHandlers,
])

interface GameProps {
  children: React.ReactNode
}

const GameProvider = ({ children }: GameProps) => {
  const [gameState, setGameState] = React.useState(defaultGameState)

  const handlers: IGameStateHandler = React.useMemo(
    () => ({
      makeMove: (position) => {
        if (
          gameState.playState === PlayState.InGame &&
          GetBoardPieceAtPosition(gameState.board, position) ===
            BoardPiece.None &&
          IsInBoardRange(position)
        ) {
          const newState = AddPieceAtPosition(
            gameState.board,
            gameState.pieceTurn,
            position
          )
          const isBoardFull = IsBoardFull(gameState.board)
          const hasWon = IsWinner(gameState.board, position) !== BoardPiece.None

          let newPlayState = PlayState.InGame
          if (isBoardFull) newPlayState = PlayState.BoardFull
          if (hasWon) newPlayState = PlayState.PieceWon

          setGameState({
            board: newState,
            pieceTurn: ToggleBoardPiece(gameState.pieceTurn),
            playState: newPlayState,
          })
          return gameState.pieceTurn
        }

        return BoardPiece.None
      },
      setIsPlaying: (isPlaying) => {
        setGameState((prevState) => ({ ...prevState, ...{ isPlaying } }))
      },
      startNewGame: () => {
        setGameState(startGameState)
      },
    }),
    [gameState]
  )

  return (
    <GameContext.Provider value={[gameState, handlers]}>
      {children}
    </GameContext.Provider>
  )
}

const useGameContext = () => React.useContext(GameContext)

export { GameProvider, useGameContext }
