import { styled } from "styled-components"

export const Adress = styled.div`
  padding: 4rem;
  border-radius: 6px;

  background-color: ${props => props.theme['base-card']};
`

export const AdressInfo = styled.div`
  display: flex;

  gap: 0.8rem;

  svg{
    color: ${props => props.theme['yellow-dark']};
  }
`

export const AdressContent = styled.div`
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

export const Form = styled.div`
  margin-top: 3.2rem;

  input{
    flex: 1;
    border-radius: 4px;
    padding: 1.2rem;
    border: 1px solid ${props => props.theme['base-button']};
    background-color: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-text']};
    outline: none;
  }

  input::placeholder{
    font-size: 1.4rem;
    color: ${props => props.theme['base-label']};
  }
`

export const InputForm = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  margin-top: 1.6rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const InputOpcional = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  input{
    border-right-width: 0;
    border-radius: 4px 0px 0px 4px;
  }

  label{
    font-size: 1.4rem;
    color: ${props => props.theme['base-label']};
    background-color: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-button']};
    padding: 1.3rem;
    border-radius: 0px 4px 4px 0px;
    border-left-width: 0;
    font-style: italic;
    
  }

  @media (max-width: 360px){
      input{
        width: 70%;
      }
    }
`

// Payment