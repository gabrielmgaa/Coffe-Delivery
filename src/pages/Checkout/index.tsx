import { useContext } from "react"

import { BuyMenu } from "./components/BuyMenu"
import { Payment } from "./components/Payment"
import { Adress } from "./components/Adress"

import { CartContext } from "../../contexts/CartContext"

import { useForm, FormProvider } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import * as C from "./styles"

const formValidationSchema = zod.object({
  city: zod.string(),
  adress: zod.string(),
  neighbourhood: zod.string(),
  uf: zod.string(),
  adressNumber: zod.number(),
  payment: zod.string(),
})

export type formType = zod.infer<typeof formValidationSchema>

export function Checkout() {

  const { clearCart } = useContext(CartContext)

  const navigate = useNavigate()
  const formData = useForm<formType>({
    resolver: zodResolver(formValidationSchema),
  })

  const { handleSubmit } = formData

  function handleFinalOrder(data: formType) {
    navigate("/finalorder", {
      state: data
    })
    clearCart()
  }

  return (
    <C.MainContainerCheckout>
      <FormProvider {...formData}>
        <form onSubmit={handleSubmit(handleFinalOrder)}>

          <C.Order>
            <h2>Complete seu pedido</h2>
            <Adress />
            <Payment />
          </C.Order>

          <C.BuyMenuContainer>
            <h2>Cafés Selecionados</h2>

            <BuyMenu />

          </C.BuyMenuContainer>
        </form>
      </FormProvider>
    </C.MainContainerCheckout >
  )
}