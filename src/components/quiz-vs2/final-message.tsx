import { css } from "@emotion/css"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { colors, resetBtnStyles } from "../../styles/common"
import { Fade } from "../common/fade"

interface Props {
  isGameDone: boolean
  score: number
  questionsLength: number
  newGame: () => void
  closeModal: () => void
}

const fadeOptions = {
  initial: { y: -1000 },
  animate: { y: 0 },
  exit: { y: 1000 },
}

const messageStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${colors.dangerShadow};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  z-index: 3;
  .wrapper {
    position: relative;
    border-radius: 4px;
    background-color: ${colors.text};
    border: 2px solid ${colors.bg};
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    color: ${colors.bg};
    p {
      font-size: 2rem;
    }
    .exit-btn {
      ${resetBtnStyles};
      background-color: ${colors.accent};
      color: ${colors.bg};
      position: absolute;
      top: -1rem;
      right: -0.5rem;
      height: 2.5rem;
      width: 2.5rem;
      border: none;
      border-radius: 50%;
      font-size: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .btn-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      padding: 0.5em;
    }
  }
`

const Button = styled.button`
  ${resetBtnStyles};
  background-color: ${colors.accent};
  color: ${colors.bg};
  height: 2.5rem;
`

const StyledLink = styled(Link)`
  ${resetBtnStyles};
  background-color: ${colors.accent};
  color: ${colors.bg};
  height: 2.5rem;
  display: flex;
  align-items: center;
`

export const FinalMessage = ({
  isGameDone,
  score,
  questionsLength,
  newGame,
  closeModal,
}: Props) => {
  return (
    <Fade isAnimated={isGameDone} options={fadeOptions} className={messageStyles}>
      <div className="wrapper">
        <p>
          you scored {score}/{questionsLength} of questions
        </p>
        <div className="btn-wrapper">
          <Button type="button" onClick={newGame}>
            new game
          </Button>
          <StyledLink to="/">back home</StyledLink>
        </div>
        <button className="exit-btn" type="button" onClick={closeModal}>
          &#xd7;
        </button>
      </div>
    </Fade>
  )
}