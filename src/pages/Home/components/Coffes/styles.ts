import { styled } from "styled-components";

export const SectionContainerProducts = styled.section`
  margin: 8rem 0 0;

  h1{
    font-size: 3.2rem;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
  }
`

export const BoxGridCard = styled.div`
  margin: 5.4rem auto 9rem;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(25rem,1fr));
  gap: 3.2rem;

`

