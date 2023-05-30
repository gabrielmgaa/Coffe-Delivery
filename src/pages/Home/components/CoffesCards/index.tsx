import { useContext, useState } from 'react'

import {
  Card,
  CoffeDescription,
  CoffeType,
  Buy,
  Price,
  PriceBased,
  ButtonBuy,
  ButtonCart,
  CoffeTypeContainer
} from './styles'

import { ShoppingCartSimple } from '@phosphor-icons/react'
import { CartContext } from '../../../../contexts/CartContext'
import { formatToBRL } from '../../../../utils/fomartToBRL'

interface CoffesCard {
  id: number,
  img: string,
  type: string[],
  title: string,
  description: string,
  value: number
}

export function CoffesCard({ img, type, title, description, id, value}: CoffesCard) {
  const [itemsAmounts, setItemsAmounts] = useState(1)

  const { onAddProductCart } = useContext(CartContext)

  const valueToBRL = formatToBRL(value).slice(3)

  function handleAddProduct() {
    setItemsAmounts(prev => prev + 1)
  }

  function handleRemoveProduct() {
    setItemsAmounts(prev => {
      if (prev === 1) {
        return 1
      }

      return prev - 1
    })
  }

  function handleAddProductInCart(){
    onAddProductCart({
      id,
      img,
      title,
      value,
      amount: itemsAmounts
    })
    setItemsAmounts(1)
  }

  return (
    <Card>
      <img src={img} />
      <CoffeTypeContainer>
        {type.map(type => (
          <CoffeType key={type[0]}>
            <span>{type}</span>
          </CoffeType>
        ))}
      </CoffeTypeContainer>

      <CoffeDescription>
        <h3>{title}</h3>
        <p>{description}</p>
      </CoffeDescription>

      <Buy>
        <PriceBased>
          <span>R$</span>
          <Price>{valueToBRL}</Price>
        </PriceBased>

        <div>
          <ButtonBuy>
            <button onClick={() => handleRemoveProduct()}>-</button>
            <span>{itemsAmounts}</span>
            <button onClick={() => handleAddProduct()}>+</button>
          </ButtonBuy>

          <ButtonCart
            onClick={() => handleAddProductInCart()}
          >
            <ShoppingCartSimple
              id="expresso-tradicinal"
              size={24}
              weight="fill"
            />
          </ButtonCart>
        </div>
      </Buy>
    </Card>
  )
}