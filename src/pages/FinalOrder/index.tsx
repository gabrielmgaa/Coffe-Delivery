import { useLocation } from "react-router-dom"

import { formType } from "../Checkout"

import { MapPin } from "@phosphor-icons/react"

import * as C from "./styles"

import { Item } from "../Home/styles"

import finalOrder from "../../assets/finalorder.png"

interface LocationType {
  state: formType
}

export function FinalOrder() {

  const { state } = useLocation() as unknown as LocationType

  return (
    <C.MainContainerFinalOrder>
      <C.Container>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <C.FinalOrder>
          <Item variant="four">
            <span>
              <MapPin size={18} weight="fill" />
            </span>
            <C.Infos>
              <p>Entrega em 
                <C.BoldText> {state.adress + ', ' + state.adressNumber}</C.BoldText>
              </p>
              <p>{state.city}, {state.uf}</p>
            </C.Infos>
          </Item>
          <Item variant="third">
            <span>
              <MapPin size={18} weight="fill" />
            </span>
            <C.Infos>
              <p>Previsão de entrega</p>
              <p><strong>20 min - 30 min</strong></p>
            </C.Infos>
          </Item>
          <Item variant="primary">
            <span>
              <MapPin size={18} weight="fill" />
            </span>
            <C.Infos>
              <p>Pagamento na entrega</p>
              <strong>
                <p>{state.payment}</p>
              </strong>
            </C.Infos>
          </Item>
        </C.FinalOrder>
      </C.Container>

      <img src={finalOrder} alt="" />
    </C.MainContainerFinalOrder>
  )
}