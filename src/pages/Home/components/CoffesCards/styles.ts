import { styled } from "styled-components"


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background-color: ${props => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 1.2rem;

  img{
    margin-top: -3.5rem;
  }
`

export const CoffeTypeContainer = styled.div`
  display: flex;
  margin: 1.5rem 0;
  gap: 0.4rem;
`

export const CoffeType = styled.span`
    text-transform: uppercase;
    padding: 0.4rem 0.6rem;
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.theme['yellow-dark']};
    background-color: ${props => props.theme['yellow-light']};
    border-radius: 100px;
`

export const CoffeDescription = styled.div`

  h3{
    margin: 0 0 0.8rem;
    font-family: 'Baloo 2';
    font-weight: bold;
    font-size: 2rem;
  }

  p{
    color: ${props => props.theme['base-label']};
    font-size: 1.4rem;
    width: 90%;
    margin: auto;
  }
`

export const Buy = styled.div`
  margin-top: 2.8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.3rem;

  div{
    display: flex;
    align-items: center;
    gap: 0.8rem;

  }
  
`

export const PriceBased = styled.span`
  color: ${props => props.theme['base-text']};
  font-size: 1.4rem;
`

export const Price = styled(PriceBased)`
  font-weight: 800;
  font-size: 2.4rem;
  font-family: 'Baloo 2';
`

export const ButtonBuy = styled.div`
  display: flex;
  flex-direction: row;
  background: ${props => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.6rem 1.5rem;
  
  button{
    border: 0;
    background: 0;
    font-size: 2.4rem;
    color: ${props => props.theme['purple']};
    cursor: pointer;

    &:hover{
      color: ${props => props.theme['purple-dark']};
    }
  }
`

export const ButtonCart = styled.button`
  display: flex;
  padding: 0.8rem;
  background-color: ${props => props.theme['purple-dark']};
  border-radius: 6px;
  border: 0;
  color: ${props => props.theme['white']};
  cursor: pointer;
  transition: background-color 0.3s ease-out;

  &:hover{
    background-color: ${props => props.theme['purple']};
  }
`