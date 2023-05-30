import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import { Ball, Container, HeaderContainer, LinkContainer, LocationContainer } from "./styles";

import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import logoCoffe from '../../assets/logo-coffe.svg'
import { Link } from "react-router-dom";

export function Header() {

  const { cart } = useContext(CartContext)

  const cartLenght = cart.reduce((acc,cur) => (acc + cur.amount), 0)  

  return (
    <HeaderContainer>
      <img src={logoCoffe} alt="" />

      <Container>
        <LocationContainer>
          <MapPin size={24} weight="fill" />
          <p>Fortaleza, CE</p>
        </LocationContainer>
        <nav>
          <LinkContainer >
            <Link to="/checkout">
              <ShoppingCart size={24} weight="fill" />
            </Link>
            {(!!cartLenght &&
              <Ball>
                {cartLenght}
              </Ball>
            )}
          </LinkContainer>
        </nav>
      </Container>
    </HeaderContainer>
  )
}