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

  z-index: 5;
  position: fixed;
  top: 1rem;
  right: 2rem;
`

export const Nav = () => {
  const { state: on, toggle } = useToggle()
  return (
    <NavStyles>
      <NavButton type="button" onClick={toggle}>
        {on ? "hide" : "menu"}
      </NavButton>
      <AnimatePresence>{on && <NavList />}</AnimatePresence>
    </NavStyles>
  )
}
