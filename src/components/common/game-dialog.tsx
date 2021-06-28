import ReactDOM from "react-dom"
import {elements, elevations} from "@/styles/styled-record"
import Button from "@/components/styled/button"
import {css} from "@emotion/react"
import styled from "@emotion/styled"

interface GameDialogProps {
  score: number
  possibleScore: number
  close: () => void
  newGame: () => void
}

const MessageWrapper = styled.div`
  background-color: ${elements.background};
  border-radius: 4px;
  padding: 1rem;
  position: relative;
  min-width: 24rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  .btn-group {
    padding: 1rem;
    display: flex;
    justify-content: center;
  }
  span {
    position: relative;
    display: inline-block;
    &:after {
      content: "";
      bottom: 2px;
      left: 0;
      background-color: ${elements.lightBlueShadow};
      width: 100%;
      height: 6px;
      position: absolute;
      transform: rotate(-3deg);
      box-shadow: ${elevations.shadowLg};
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

const GameDialog = ({score, possibleScore, close, newGame}: GameDialogProps) =>
  ReactDOM.createPortal(
    <MessageWrapper>
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
    </MessageWrapper>,
    document.body,
  )

export default GameDialog
