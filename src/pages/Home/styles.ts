import { styled } from "styled-components";

export const SectionContainerHome = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 5.6rem;

  margin-top: 9rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    

    img{
      margin: auto;
    }
  }

  @media (max-width: 540px) {
    img{
      display: none;
    }
  }
`

export const ContentContainer = styled.div`
  width: 85%;

  @media (max-width: 768px) {
    margin: auto;
  }
  
`

export const Content = styled.div`

  h1{
    font-family: 'Baloo 2';
    font-size: 4.8rem;
    line-height: 1.3;
    font-weight: 800;
  }

  p{
    font-size: 2rem;
    line-height: 1.3;
    color: ${props => props.theme['base-subtitle']};
    margin-top: 1.6rem;
  }
`

export const GridItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 6.6rem;
  grid-gap: 2rem;
  /* width: 90%; */
`

type CircleVariant = 'primary' | 'secodary' | 'third' | 'four'

interface ItemProps{
  variant: CircleVariant;
}

const variants = {
  primary: 'yellow-dark',
  secodary: 'base-text',
  third: 'yellow',
  four: 'purple'
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;

  gap: 0.8rem;

  span{
    height: 3.4rem;
    padding: 0.8rem;
    border-radius: 999px;
    background-color: ${props => props.theme[`${variants[props.variant]}`]};
    color: ${props => props.theme.background};
    align-self: flex-end;
  }
`