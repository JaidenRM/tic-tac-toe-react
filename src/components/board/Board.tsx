import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Rules } from '../../constants'
import { useGameContext } from '../../contexts/game/gameContext'
import { createGroupedBoardSquares } from './Board.utils'

const BoardWrapper = styled.div`
  margin: 2rem auto;
`
const RowWrapper = styled.div`
  line-height: 0;
`

const BoardErrored = () => <h1>ERROR!</h1>

const Board = () => {
  const [game, handler] = useGameContext()

  useEffect(() => handler.startNewGame(), [])

  const groupedSquares = createGroupedBoardSquares(
    Rules.MAX_SQUARES,
    Rules.BOARD_LEN
  )

  return groupedSquares ? (
    <BoardWrapper>
      {groupedSquares.map((group, index) => (
        <RowWrapper key={index.toString()}>{group}</RowWrapper>
      ))}
    </BoardWrapper>
  ) : (
    <BoardErrored />
  )
}

export default Board
