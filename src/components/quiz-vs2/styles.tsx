import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { colors, elevations, resetBtnStyles } from "../../styles/common"

export const GameWrapper = styled.section`
  position: relative;
`

export const GameBody = styled.div`
  box-shadow: ${elevations.shadowM};
`

export const Header = styled.div`
  box-shadow: ${elevations.shadowM};
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  border-radius: 4px;
`
export const Col = styled.div`
  box-shadow: ${elevations.shadowM};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3em;
  border-radius: 4px;
`

export const List = styled.ul`
  padding: 0;
  li {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
  }
`

export const Cell = styled.div`
  &:nth-of-type(1) {
    padding-left: 1rem;
  }
  &:nth-of-type(2n) {
    display: flex;
    justify-content: space-evenly;
  }
`

export const Button = styled.button`
  ${resetBtnStyles};
  background-color: ${colors.accent};
  color: ${colors.bg};
  height: 2.5rem;
`

export const AnswerButton = styled(Button)`
  flex: 1;
  height: 100%;
  &:disabled {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: ${colors.primary};
      width: 100%;
      height: 2px;
      transform: rotate(3deg);
    }
  }
`

export const BtnPrimary = styled(Button)`
  background-color: ${colors.warning};
`

export const ButtonWrapper = styled(motion.div)`
  max-width: 30rem;
  display: flex;
  justify-content: space-between;
`
