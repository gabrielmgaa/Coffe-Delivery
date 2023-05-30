import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 3.2rem 0;

  display: flex;
  justify-content: space-between;
`

export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 1.2rem;
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme['purple']};
  font-size: 1.4rem;
  gap: 0.4rem;

  background-color: ${props => props.theme['purple-light']};
  border-radius: 6px;
  padding: 0.8rem;

  flex: 1;

  p{
    color: ${props => props.theme['purple-dark']}
  }
`

export const LinkContainer = styled.div`
  position: relative;
  a{
    display: flex;
    padding: 0.8rem;
    background-color: ${props => props.theme['yellow-light']};
    border-radius: 6px;
    color: ${props => props.theme['yellow']};
  }
`

export const Ball = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  right: -8px;
  transform: translateY(-8px);

  background-color: ${props => props.theme['yellow-dark']};
  color: ${props => props.theme['white']};
  font-size: 1.2rem;
  font-weight: bold;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
`