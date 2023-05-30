import { styled } from "styled-components"


export const Payment = styled.div`
  padding: 4rem;
  border-radius: 6px;

  background-color: ${props => props.theme['base-card']};
`

export const PaymentContent = styled.div`
  h3{
    font-size: 1.6rem;
    font-weight: 400;
  }

  p{
    font-size: 1.4rem;
    color: ${props => props.theme['base-text']};
    margin-top: 0.2rem;
  }
`

export const PaymentInfo = styled.div`
  display: flex;
  gap: 0.8rem;
  
  svg{
    color: ${props => props.theme['purple']};
  }
`

export const MethodPaymentContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 3.2rem;
`

export const MethodPayment = styled.div`
  flex: 1;
  
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    background-color: ${props => props.theme['purple-light']};
    border: 1px solid ${props => props.theme['purple']};
  }
`
export const ContentPayment = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme['base-button']};
  cursor: pointer;
  flex: 1;
  align-items: center;
  padding: 1.6rem;
  gap: 1.2rem;
  
  text-transform: uppercase;
  background-color: ${props => props.theme['base-button']};
  border-radius: 4px;

  svg{
    color: ${props => props.theme['purple']};
  }
  
  span{
    font-size: 1.2rem;
    color: ${props => props.theme['base-text']};
    cursor: pointer;
  }

`