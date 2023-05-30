import { styled } from "styled-components";

export const CoffeItem = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme['base-button']};
  padding: 3rem 0;
  justify-content: space-between;
  
  img{
    width: 64px;
    height: 64px;
    object-fit: cover;
  }
`

export const CartProduct = styled.div`
  display: flex;
  flex-direction: column;
`

export const CartProductSpan = styled.span`
  margin-bottom: 0.8rem;
`

export const Amount = styled.div`
  display: flex;
  gap: 0.8rem;

  svg{
    color: ${props => props.theme['purple']};
  }
`

export const ButtonRemove = styled.button`
    display: flex;
    align-items: center;
    gap: 0.4rem;

    padding: 0.6rem;
    border: 0;
    border-radius: 6px;
    background-color: ${props => props.theme['base-button']};
    color: ${props => props.theme['base-text']};
    text-transform: uppercase;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover{
      background-color: ${props => props.theme['base-hover']};
    }
`

export const ButtonBuy = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.6rem 1.5rem;
  gap: 0.6rem;
  
  button{
    border: 0;
    background: 0;
    font-size: 2rem;
    color: ${props => props.theme['purple']};
    cursor: pointer;

    &:hover{
      color: ${props => props.theme['purple-dark']};
    }
  }
`

export const PriceSpan = styled.span`
  font-weight: bold;
  color: ${props => props.theme['base-text']};
`