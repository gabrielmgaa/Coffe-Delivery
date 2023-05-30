import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react"

import * as C from "./styles"
import { useFormContext } from "react-hook-form"

export function Payment() {

  const { register } = useFormContext()

  return (
    <C.Payment>
      <C.PaymentInfo>
        <CurrencyDollar size={24} />
        <C.PaymentContent>
          <h3>Pagamento</h3>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </C.PaymentContent>
      </C.PaymentInfo>

      <C.MethodPaymentContainer>
        <C.MethodPayment>
          <input
            type="radio"
            id="credit"
            {...register("payment")}
            value="Crédito"
            required
          />
          <label htmlFor="credit">
            <C.ContentPayment>
              <CreditCard size={24} />
              <span>cartão de crédito</span>
            </C.ContentPayment>
          </label>
        </C.MethodPayment>
        <C.MethodPayment>
          <input
            type="radio"
            id="debit"
            value="Débito"
            {...register("payment")}
            required
          />
          <label htmlFor="debit">
            <C.ContentPayment>
              <Bank size={24} />
              <span>cartão de débito</span>
            </C.ContentPayment>
          </label>
        </C.MethodPayment>
        <C.MethodPayment>
          <input
            type="radio"
            id="money"
            value="Dinheiro"
            {...register("payment")}
            required
          />
          <label htmlFor="money">
            <C.ContentPayment>
              <Money size={24} />
              <span>dinheiro</span>
            </C.ContentPayment>
          </label>
        </C.MethodPayment>
      </C.MethodPaymentContainer>
    </C.Payment>
  )
}