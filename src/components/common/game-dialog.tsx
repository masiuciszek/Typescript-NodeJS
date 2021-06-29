import ReactDOM from "react-dom"
import {elements} from "@/styles/styled-record"
import Button from "@/components/styled/button"
import {css} from "@emotion/react"
import styled from "@emotion/styled"
import {motion} from "framer-motion"
import useClickOutSide from "@/hooks/click-outside"
import {RefObject, useRef} from "react"

interface GameDialogProps {
  score: number
  possibleScore: number
  close: () => void
  newGame: () => void
}

const MessageWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${elements.blueishShadow};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Body = styled.div`
  background-color: ${elements.background};
  width: 35rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  p {
    font-size: 1.3rem;
    span {
      color: ${elements.danger};
    }
  }
`

const buttonStyles = css`
  position: absolute;
  top: -1rem;
  right: -1rem;
  border-radius: 50%;
  min-width: 0;
  height: 3rem;
  width: 3rem;
  padding: 0;
  background-color: ${elements.danger};
`
const newGameStyles = css`
  height: 3rem;
  width: 8rem;
`

const GameDialog = ({score, possibleScore, close, newGame}: GameDialogProps) => {
  const ref: RefObject<HTMLDivElement> = useRef(null)
  useClickOutSide(ref, close)
  return ReactDOM.createPortal(
    <MessageWrapper
      initial={{opacity: 0, x: -1000}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: -1000}}
      layout
    >
      <Body ref={ref}>
        <p>
          you scored{" "}
          <span>
            {score}/{possibleScore}
          </span>{" "}
          possible questions{" "}
        </p>
        <p>Great job!</p>
        <div>
          <Button
            onClick={newGame}
            incomingStyles={newGameStyles}
            config={{
              whileHover: {
                width: "7.5rem",
                backgroundColor: elements.background,
                color: elements.paragraph,
              },
            }}
          >
            new game
          </Button>
        </div>
        <Button
          incomingStyles={buttonStyles}
          onClick={close}
          config={{whileHover: {width: "2.9rem", height: "2.9rem"}}}
        >
          ╳
        </Button>
      </Body>
    </MessageWrapper>,
    document.body,
  )
}

export default GameDialog
