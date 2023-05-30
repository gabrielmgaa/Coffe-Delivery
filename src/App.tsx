import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { Routers } from './Route'
import { defaultTheme } from './styles/theme/defaultTheme'
import { GlobalStyle } from './styles/global'
import { CartContextProvider } from './contexts/CartContext'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <CartContextProvider>
          <Routers />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
