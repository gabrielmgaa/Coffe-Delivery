import { useState, useContext } from "react"

import { CartContext } from "../../../../contexts/CartContext"

import { formatToBRL } from "../../../../utils/fomartToBRL"

import { Trash } from "@phosphor-icons/react"

import * as C from "./styles"

interface CoffeItem {
  img: string
  title: string
  amount: number
  value: number
  id: number
}

export function CoffeItem({ img, title, amount, value, id }: CoffeItem) {
  const [many, setMany] = useState(amount)

  const { onChangeAmount, onHandleRemoveProduct } = useContext(CartContext)

  const valueToBRL = formatToBRL(value)

  function handleAddItem(value: number) {
    setMany(prev => prev + 1)

    onChangeAmount(value, id)
  }

  function handleRemoveItem(value: number) {
  
    if(value === 0){
      onHandleRemoveProduct(id)
      return 
    }

    setMany(prev => prev - 1)
    onChangeAmount(value, id)
  }

  function handleRemoveProduct() {
    onHandleRemoveProduct(id)
  }

  return (
    <C.CoffeItem key={id}>
      <img src={img} />

      <C.CartProduct>
        <C.CartProductSpan>{title}</C.CartProductSpan>
        <C.Amount>
          <C.ButtonBuy>
            <button type="button" onClick={() => handleRemoveItem(many - 1)}>-</button>
            <span>{many}</span>
            <button type="button" onClick={() => handleAddItem(many + 1)}>+</button>
          </C.ButtonBuy>
          <C.ButtonRemove onClick={() => handleRemoveProduct()}>
            <Trash size={24} />
            remover
          </C.ButtonRemove>
        </C.Amount>
      </C.CartProduct>
      <C.PriceSpan>{valueToBRL}</C.PriceSpan>
    </C.CoffeItem>

  )
}