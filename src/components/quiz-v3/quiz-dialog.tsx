import { css } from "@emotion/css"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { FC } from "react"
import { Link } from "react-router-dom"
import { Interpreter, StateValue } from "xstate"
import { colors, elevations, resetBtnStyles } from "../../styles/common"
import { Fade } from "../common/fade"
import { DialogType, pluralize, QuizGameContext, QuizMachineEvent } from "./utils"

interface Props {
  isQuizDone: boolean
  dialogType: DialogType
  meta: Record<string, string>
  currentState: StateValue
  send: Interpreter<QuizGameContext, any, QuizMachineEvent>["send"]
  resultData: {
    score: number
    ofPossibleQuestions: number
  }
}

const styles = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.darkestShadow};
  display: flex;
  justify-content: center;
  align-items: center;
`

const DialogWrapper = styled(motion.div)`
  padding: 1rem;
  background-color: ${colors.text};
  color: ${colors.primary};
  min-height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  position: relative;
`

const Body = styled.div`
  .highlight {
    display: inline-block;
    position: relative;
    text-shadow: 1px 1px 2px ${colors.primary};
    &:after {
      content: "";
      position: absolute;
      bottom: 6px;
      left: 0;
      background-color: ${colors.dangerShadow};
      width: 100%;
      height: 0.2rem;
      transform: rotate(-1deg);
    }
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0.5rem;
  button {
    ${resetBtnStyles};
    color: ${colors.primary};
    border: 2px solid ${colors.primary};
    font-size: 0.8rem;
    transition: 200ms ease-in-out background-color;
    box-shadow: ${elevations.shadowM};
  }

  button:hover,
  a:hover {
    background-color: ${colors.primary};
    color: ${colors.text};
  }
`

const StyledLink = styled(Link)`
  ${resetBtnStyles};
  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  font-size: 0.8rem;
  box-shadow: ${elevations.shadowM};
  transition: 200ms ease-in-out background-color;
`

const CloseBtn = styled.button`
  ${resetBtnStyles};
  padding: 0;
  position: absolute;
  top: -1rem;
  right: -1rem;
  font-size: 2rem;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  border: 1px solid ${colors.darkestShadow};
  background-color: ${colors.danger};
  color: ${colors.text};
  box-shadow: ${elevations.shadowM};
`

const QuizDialog: FC<Props> = ({
  isQuizDone,
  dialogType,
  resultData,
  meta,
  currentState,
  send,
}) => {
  return (
    <Fade isAnimated={isQuizDone} className={styles}>
      <DialogWrapper>
        {dialogType === "END_GAME_MESSAGE" && (
          <Body>
            <h3>{meta[`quiz.${currentState}`]}</h3>
            <p>
              You answered{" "}
              <span className="highlight">
                {resultData.score} {pluralize(resultData.score, "question")} correct
              </span>{" "}
              out of {resultData.ofPossibleQuestions} possible questions
            </p>
            <ButtonWrapper>
              <button type="button" onClick={() => send("TOGGLE")}>
                New Game?
              </button>
              <StyledLink to="/">Back home</StyledLink>
            </ButtonWrapper>
          </Body>
        )}

        {dialogType === "SHOW_STATS" && (
          <Body>
            <h3>{meta[`quiz.${currentState}`]}</h3>
            <h1>Your stats</h1>
          </Body>
        )}

        <CloseBtn type="button" onClick={() => send("CLICK")}>
          Ⅹ
        </CloseBtn>
      </DialogWrapper>
    </Fade>
  )
}

export default QuizDialog
