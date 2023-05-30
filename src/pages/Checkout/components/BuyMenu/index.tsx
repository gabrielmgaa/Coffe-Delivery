import { useContext } from "react"

import { CartContext } from "../../../../contexts/CartContext"

import { BuyMenuEmpty } from "../BuyMenuEmpty"
import { CoffeItem } from "../CoffeItem"

import { formatToBRL } from "../../../../utils/fomartToBRL"

import * as C from "./styles"

export function BuyMenu() {

  const { cart } = useContext(CartContext)

  const value = cart.reduce((acc, cur) => acc + (cur.value * cur.amount), 0)
  const delivery = 3
  const cartValue = formatToBRL(value)
  const sum = value + delivery

  const total = formatToBRL(sum)

  if (cart.length === 0) {
    return (
      <C.BuyMenu>
        <C.BuyMenuEmpty>
          <BuyMenuEmpty />
        </C.BuyMenuEmpty>
      </C.BuyMenu>
    )
  }

  return (
    <C.BuyMenu>
      <C.CoffeItemContainer>
        {cart.map(item => (
          <CoffeItem
            key={item.id}
            {...item}
          />
        ))}
      </C.CoffeItemContainer>

      <C.TotalContainer>
        <C.TotalItems>
          <p>Total de itens</p>
          <span>{cartValue}</span>
        </C.TotalItems>
        <C.TotalItems>
          <p>Entrega</p>
          <span>R$ {delivery}</span>
        </C.TotalItems>
        <C.TotalProducts>
          <p>Total</p>
          <span>{total}</span>
        </C.TotalProducts>
        <button type="submit">confimar pedido</button>
      </C.TotalContainer>
    </C.BuyMenu>
  )
}