import React, { useState } from 'react'
import styled from 'styled-components'
import { BoardPiece } from '../../constants'
import { useGameContext } from '../../contexts/game/gameContext'

export interface IBoardSquare {
  boardPiece: BoardPiece
  position: number
  height: string
  width: string
}

const StyledSquare = styled.div<{ height: string; width: string }>`
  border: 0.1rem solid black;
  font-weight: bold;
  font-size: 5rem;
  text-align: center;
  display: inline-block;
  height: ${(props) => (props.height && props.width ? props.height : '10rem')};
  width: ${(props) => (props.height && props.width ? props.width : '10rem')};
`

const StyledPiece = styled.p`
  float: left;
  margin-left: 2rem;
`

export const BoardSquare = ({
  boardPiece,
  position,
  height,
  width,
}: IBoardSquare) => {
  const [piece, setPiece] = useState(boardPiece)
  const [gameState, handlers] = useGameContext()

  const clickHandler = () => {
    if (piece === BoardPiece.None) {
      setPiece(handlers.makeMove(position))
    }
  }

  return (
    <StyledSquare height={height} width={width} onClick={clickHandler}>
      <StyledPiece>{piece.toString()}</StyledPiece>
    </StyledSquare>
  )
}
