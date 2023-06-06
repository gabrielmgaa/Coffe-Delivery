import styled from 'styled-components'

export const MainContainerCheckout = styled.main`
  form{
    display: grid;
    grid-template-columns: 1fr 450px;
    grid-gap: 3.2rem;


    align-items: flex-start;

    @media (max-width: 1140px) {
      grid-template-columns: 1fr;
    }
  }
`

// Order

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2{
    font-size: 1.8rem;
    font-weight: bold;
    font-family: 'Baloo 2', sans-serif;
  }
`


//  ConfirmOrder

export const BuyMenuContainer = styled.div`
  h2{
    font-size: 1.8rem;
    font-weight: bold;
    font-family: 'Baloo 2', sans-serif;
  }

  @media (max-width: 1140px) {
      width: 90%;
  }
`



