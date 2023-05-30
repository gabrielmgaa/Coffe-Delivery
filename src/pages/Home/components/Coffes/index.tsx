import { useState } from "react"

import {
  BoxGridCard,
  SectionContainerProducts,
} from "./styles"

import {
  americano,
  arabe,
  cafeLeite,
  capuccino,
  cremoso,
  cubano,
  gelado,
  havaiano,
  irlandes,
  latte,
  mocaccino,
  quente,
  tradicional,
  macchiato
} from "../../../../assets/index"

import { CoffesCard } from "../CoffesCards"

interface CoffesItems {
  id: number,
  value: number
  img: string,
  type: string[],
  title: string,
  description: string
}

export function Coffes() {

  const coffesItems: CoffesItems[] = [
    {
      id: 1,
      img: tradicional,
      type: ["tradicional"],
      title: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      value: 9.90
    },
    {
      id: 2,
      img: americano,
      type: ["tradicional"],
      title: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      value: 9.95

    },
    {
      id: 3,
      img: cremoso,
      type: ["tradicional"],
      title: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      value: 9.95
    },
    {
      id: 4,
      img: gelado,
      type: ["tradicional", "gelado"],
      title: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      value: 9.95
    },
    {
      id: 5,
      img: cafeLeite,
      type: ["tradicional", "com leite"],
      title: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      value: 12.95
    },
    {
      id: 6,
      img: latte,
      type: ["tradicional", "com leite"],
      title: "Latte",
      description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      value: 12.95
    },
    {
      id: 7,
      img: capuccino,
      type: ["tradicional", "com leite"],
      title: "Capuccino",
      description: "Bebida com canela feita de doses iguais de café, leite e espuma",
      value: 15.95
    },
    {
      id: 8,
      img: macchiato,
      type: ["tradicional", "com leite"],
      title: "Macchiato",
      description: "Café expresso misturado com um pouco de leite quente e espuma",
      value: 15.95
    },
    {
      id: 9,
      img: mocaccino,
      type: ["tradicional", "com leite"],
      title: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      value: 15.95
    },
    {
      id: 10,
      img: quente,
      type: ["especial", "com leite"],
      title: "Chocolate Quente",
      description: "Bebida feita com chocolate dissolvido no leite quente e café",
      value: 20.15
    },
    {
      id: 11,
      img: cubano,
      type: ["especial", "alcoólico", "gelado"],
      title: "Cubano",
      description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
      value: 20.15
    },
    {
      id: 12,
      img: havaiano,
      type: ["especial"],
      title: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      value: 9.90
    },
    {
      id: 13,
      img: arabe,
      type: ["especial"],
      title: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      value: 9.90
    },
    {
      id: 14,
      img: irlandes,
      type: ["especial", "alcoólico"],
      title: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      value: 9.90
    },

  ]

  return (
    <SectionContainerProducts>
      <h1>Nossos Cafés</h1>

      <BoxGridCard>

        {coffesItems.map(coffe => (
          <CoffesCard
            key={coffe.id}
            {...coffe}
          />
        ))}

      </BoxGridCard>
    </SectionContainerProducts>
  )
}