import styled from "@emotion/styled"
import { AnimatePresence, motion } from "framer-motion"
import { FC } from "react"
import { resetBtnStyles } from "../../styles/common"

interface Props {
  isOn: boolean
}

const GameMessageWrapper = styled(motion.div)`
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  margin-bottom: 3rem;
  position: absolute;
  top: -110%;
  left: 0%;
  padding: 1rem;
  width: 100%;
  button {
    ${resetBtnStyles};
    width: 8rem;
    height: 2rem;
  }
`

const variants = {
  start: { opacity: 0, x: -1000 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 1, x: 1000 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 20,
  },
}

export const GameMessage: FC<Props> = ({ isOn, children }) => {
  return (
    <AnimatePresence presenceAffectsLayout exitBeforeEnter>
      {isOn && (
        <GameMessageWrapper initial="start" animate="enter" exit="exit" variants={variants}>
          {children}
        </GameMessageWrapper>
      )}
    </AnimatePresence>
  )
}
