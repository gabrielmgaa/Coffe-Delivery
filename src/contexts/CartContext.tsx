import { ReactNode, createContext, useState } from "react"

interface CartContextProviderProps {
  children: ReactNode
}

interface Cart {
  id: number
  value: number
  amount: number
  title: string
  img: string
}

interface CartContext {
  cart: Cart[]
  onAddProductCart: (data: Cart) => void
  onHandleRemoveProduct: (id: number) => void
  onChangeAmount: (amount: number, id: number) => void

  clearCart: () => void
}

export const CartContext = createContext({} as CartContext)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Cart[]>([])

  function onAddProductCart(data: Cart) {
    const existingProduct = cart.find(item => {
      if (item.id === data.id) {
        return {
          ...item,
          amount: data.amount + item.amount
        }
      }
    })

    if (existingProduct) {
      setCart(prev => prev.map(item => {
        if (item.id === data.id) {
          return {
            ...item,
            amount: data.amount + item.amount,
          }
        }

        return item
      }))
    } else {
      setCart(prev => [...prev, {
        id: data.id,
        title: data.title,
        img: data.img,
        value: data.value,
        amount: data.amount,
      }])
    }
  }

  function onHandleRemoveProduct(id: number) {
    const NewArrayWithoutProduct = cart.filter(item => item.id !== id)

    setCart(NewArrayWithoutProduct)
  }

  function onChangeAmount(amount: number, id: number) {
    const item = cart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          amount: amount,
        }
      }
      return item
    })

    setCart(item)
  }

  function clearCart(){
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      onAddProductCart,
      onChangeAmount,
      onHandleRemoveProduct,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}