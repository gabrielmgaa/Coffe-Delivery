
export function formatToBRL(value: number){
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const moneyBRL = formatter.format(value)

  return moneyBRL
}