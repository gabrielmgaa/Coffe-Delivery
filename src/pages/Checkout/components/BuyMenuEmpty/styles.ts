import { styled } from "styled-components";

export const BuyMenuEmpty = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  svg{
    color: ${props => props.theme['base-text']};
    margin-bottom: 1.2rem;
  }
`