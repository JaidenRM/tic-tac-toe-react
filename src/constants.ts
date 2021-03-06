// Use a single file as I don't expect this to be big
export enum BoardPiece {
  None = '',
  X = 'X',
  O = 'O',
}

export enum AppState {
  None,
  ConfigurePlayer,
  ConfigureAi,
  InGame,
}

export enum MoveDir {
  Horizontal = 1,
  RightDiagonal = 2,
  Vertical = 3,
  LeftDiagonal = 4,
}

export enum PlayState {
  None = 'None',
  InGame = 'InGame',
  PieceWon = 'PieceWon',
  BoardFull = 'BoardFull',
  GameError = 'GameError',
}

export class Rules {
  static WIN = 3

  static BOARD_LEN = 3

  static MAX_SQUARES = 9

  static PLAYERS = 2

  static FIRST_PLAYER = BoardPiece.X
}

// export default BoardPiece
