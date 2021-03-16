import React from 'react'
import styled from 'styled-components'
import { BoardPiece } from '../../constants'

export interface IBoardSquare {
  boardPiece: BoardPiece
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

export const BoardSquare = ({ boardPiece, height, width }: IBoardSquare) => (
  <StyledSquare height={height} width={width}>
    <p>{boardPiece.toString()}</p>
  </StyledSquare>
)
