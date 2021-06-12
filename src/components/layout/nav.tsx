import styled from "@emotion/styled"
import { AnimatePresence } from "framer-motion"
import { useToggle } from "../../hooks/toggle"
import { resetBtnStyles } from "../../styles/common"
import NavList from "./nav-list"

const NavStyles = styled.nav`
  padding: 1rem 0.5rem;
  min-height: 7rem;
  position: relative;
`

const NavButton = styled.button`
  ${resetBtnStyles};
  padding: 0.5rem;
  z-index: 5;
  position: fixed;
  top: 1rem;
  right: 2rem;
  width: 5rem;
  border: none;
`

export const Nav = () => {
  const { state: on, toggle } = useToggle()

  return (
    <NavStyles>
      <NavButton type="button" onClick={toggle}>
        {on ? "⚛️" : "🍔"}
      </NavButton>
      <AnimatePresence>{on && <NavList />}</AnimatePresence>
    </NavStyles>
  )
}
