import React from 'react'
import { IPlayer } from '../../models/IPlayer'
import {
  HudWrapper,
  Container,
  ChildWrapper,
  StyledMinorHeader,
  StyledMajorHeader,
  StyledText,
} from './PlayerHud.styles'

const PlayerHud = ({
  name,
  boardPiece,
  wins,
  losses,
  hasMove,
  isAi,
}: IPlayer) => {
  const winLoss = `${wins}W-${losses}L`

  return (
    <HudWrapper>
      <StyledMajorHeader hasMove={!!hasMove}>YOUR TURN</StyledMajorHeader>
      <Container>
        <ChildWrapper>
          <StyledMinorHeader>[ {boardPiece.toString()} ]</StyledMinorHeader>
        </ChildWrapper>
        <ChildWrapper>
          <StyledText>{name}</StyledText>
        </ChildWrapper>
        <ChildWrapper>
          <StyledMinorHeader>{winLoss}</StyledMinorHeader>
        </ChildWrapper>
      </Container>
    </HudWrapper>
  )
}

export default PlayerHud
