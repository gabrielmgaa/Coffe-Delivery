import { styled } from "styled-components"

export const BuyMenu = styled.div`
  min-height: 40rem;
  /* max-height: 50rem; */
  margin-top: 1.5rem;
  border-radius: 6px 44px;
  padding: 4rem;
  background-color: ${props => props.theme['base-card']};


`

export const CoffeItemContainer = styled.div`
  overflow-y: auto;
  min-height: 20rem;
  max-height: 25rem;

  /* border-bottom: 1px solid ${props => props.theme['base-button']}; */

  &::-webkit-scrollbar{
    background: ${props => props.theme['base-button']};
    border-radius: 4px;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb{
    background: ${props => props.theme['base-hover']};
    border-radius: 4px;
  }
`

export const TotalContainer = styled.div`
  margin-top: 2.4rem;

  button{
    width: 100%;
    padding: 1.2rem 0.8rem;
    background-color: ${props => props.theme['yellow']};
    color: ${props => props.theme['white']};
    border-radius: 6px;
    border: 0;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: bold;

    margin-top: 2.4rem;
    cursor: pointer;
    transition: background-color 0.3s ease-out;

    &:hover{
      background-color: ${props => props.theme['yellow-dark']};
    }
  }
`

export const TotalItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.2rem;

  color: ${props => props.theme['base-text']};

  p{
    font-size: 1.4rem;
  }
`

export const TotalProducts = styled(TotalItems)`

  p,span{
    font-size: 2rem;
    color: ${props => props.theme['base-title']};
    font-weight: bold;
  }
`

export const BuyMenuEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`