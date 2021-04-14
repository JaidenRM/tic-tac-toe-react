import styled, { keyframes } from 'styled-components'

export const HudWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.common.black};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`

export const Container = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const ChildWrapper = styled.div`
  margin: 0.5rem 1rem;
`
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const StyledMajorHeader = styled.h1<{ hasMove: boolean }>`
  font-size: 3rem;
  font-weight: 800;
  margin: 1rem 0.5rem;
  visibility: ${({ hasMove }) => (hasMove ? 'visible' : 'hidden')};
  animation: ${({ hasMove }) => (hasMove ? fadeIn : fadeOut)} 1s linear;
`
export const StyledMinorHeader = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 0.5rem;
`
export const StyledText = styled.p`
  font-size: 1.5rem;
  font-style: italic;
`
