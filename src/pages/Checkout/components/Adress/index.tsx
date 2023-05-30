import { FocusEvent } from "react"

import { useForm, useFormContext } from "react-hook-form"

import {
  MapPinLine,
} from "@phosphor-icons/react"

import * as C from "./styles"

export function Adress() {

  const { register, setValue, setFocus } = useFormContext()

  function checkCEP(e: FocusEvent<HTMLInputElement>) {
    const cep = e.target.value.replace(/\D/g, '')

    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then(res => res.json())
      .then(data => {
        setValue("city", data.localidade)
        setValue("uf", data.uf)
        setValue("neighbourhood", data.bairro)
        setValue("adress", data.logradouro)
        setFocus("adressNumber")
      })
  }

  return (
    <C.Adress>
      <C.AdressInfo>
        <MapPinLine size={24} />
        <C.AdressContent>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </C.AdressContent>
      </C.AdressInfo>

      <C.Form>
        <input
          type="text"
          placeholder="CEP"
          {...register("cep")}
          onBlur={checkCEP}
          required
        />

        <C.InputForm>
          <input
            type="text"
            placeholder="Rua"
            {...register("adress")}
            required
          />
        </C.InputForm>

        <C.InputForm>
          <input
            type="number"
            min={1}
            placeholder="Número"
            style={{ flex: 1 }}
            {...register("adressNumber", { valueAsNumber: true })}
            required
          />
          <C.InputOpcional>
            <input
              type="text"
              id="complemento"
              placeholder="Complemento"
              style={{ flex: 1 }}
              {...register("aditional")}
            />
            <label htmlFor="complemento">opcional</label>
          </C.InputOpcional>
        </C.InputForm>

        <C.InputForm>
          <input
            type="text"
            placeholder="Bairro"
            {...register("neighbourhood")}
            required
          />
          <input
            type="text"
            placeholder="Cidade"
            style={{ flex: 3 }}
            {...register("city")}
            required
          />
          <input
            type="text"
            placeholder="UF"
            {...register("uf")}
            style={{ width: "100%" }}
            required
          />
        </C.InputForm>
      </C.Form>
    </C.Adress>
  )
}