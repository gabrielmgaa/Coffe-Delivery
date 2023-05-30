import { Clipboard } from '@phosphor-icons/react'

import * as C from "./styles"

export function BuyMenuEmpty(){
  return (
    <C.BuyMenuEmpty>
      <Clipboard size={64} />
      <p>Escolha alguns itens!</p>
    </C.BuyMenuEmpty>
  )
}