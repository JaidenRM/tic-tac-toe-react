import React from 'react'
import styled from 'styled-components'
import { IPlayer } from '../../models/IPlayer'

const HudWrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;
`

const PlayerHud = ({
  name,
  boardPiece,
  wins,
  losses,
  hasMove,
  isAi,
}: IPlayer) => {
  const isTurn = hasMove ? <h1>YOUR TURN</h1> : <></>
  const winLoss = <h3>{`${wins}W-${losses}L`}</h3>

  return (
    <HudWrapper>
      {isTurn}
      <h2>{boardPiece.toString()}</h2>
      <span>{name}</span>
      {winLoss}
    </HudWrapper>
  )
}

export default PlayerHud
