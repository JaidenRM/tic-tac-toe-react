import React from 'react'
import styled from 'styled-components'
import { BoardPiece } from '../constants'

interface IBoardSquare {
  boardPiece: BoardPiece
}

const StyledSquare = styled.div`
  border: 0.1rem solid black;
  font-weight: bold;
`

const BoardSquare = ({ boardPiece }: IBoardSquare) => (
  <StyledSquare>
    <p>{boardPiece.toString()}</p>
  </StyledSquare>
)

export default BoardSquare
