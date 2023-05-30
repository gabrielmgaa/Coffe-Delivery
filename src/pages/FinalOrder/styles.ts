import { styled } from "styled-components";

export const MainContainerFinalOrder = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-end;
  margin-top: 8rem;

  h1{
    font-size: 3.2rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${props => props.theme['yellow-dark']};
  }

  p{
    font-size: 2rem;
    color: ${props => props.theme['base-subtitle']};
  }

  @media (max-width: 1036px){
    grid-template-columns: 1fr;

    img{
      display: none;
    }
  }
`

export const Container = styled.div`
  @media (max-width: 1036px){
    margin: 0 auto 2rem;
  }
`

export const FinalOrder = styled.div`
  padding: 4rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  max-width: 52rem;
  background-color: ${props => props.theme['white']};
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  gap: 3.2rem;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

`

export const Infos = styled.div`
  p{
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    margin-left: 0.8rem;
  }
`

export const BoldText = styled.strong`
  margin: 0.5rem;
`