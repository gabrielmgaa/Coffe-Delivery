import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react'

import { Coffes } from './components/Coffes'

import { Content, ContentContainer, GridItems, Item, SectionContainerHome } from './styles'

import coffe from '../../assets/coffes/coffe.png'

export function Home() {
  return (
    <main>
      <SectionContainerHome>
        <ContentContainer>
          <Content>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </Content>

          <GridItems>
            <Item variant="primary">
              <span>
                <ShoppingCart size={18} weight="fill" />
              </span>
              <p>Compra simples e segura</p>
            </Item>
            <Item variant="secodary">
              <span>
                <Package size={18} weight="fill" />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </Item>
            <Item variant="third">
              <span>
                <Timer size={18} weight="fill" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </Item>
            <Item variant="four">
              <span>
                <Coffee size={18} weight="fill" />
              </span>
              <p>O café chega fresquinho até você</p>
            </Item>
          </GridItems>
        </ContentContainer>

        <img src={coffe} alt="Uma embalagem de café" />
      </SectionContainerHome>

      <Coffes />
    </main>
  )
}