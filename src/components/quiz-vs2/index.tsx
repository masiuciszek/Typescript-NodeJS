import styled from "@emotion/styled"
import { useReducer } from "react"
import { Fade } from "../common/fade"
import produce from "immer"
import { Link } from "react-router-dom"
import { css } from "@emotion/css"
import { colors, resetBtnStyles } from "../../styles/common"

const questions = [
  {
    id: 0,
    question: "Capital of Mynmar?",
    answers: [
      { text: "Paris", prefix: "1", isCorrect: false },
      { text: "London", prefix: "x", isCorrect: false },
      { text: "Naypyitaw", prefix: "2", isCorrect: true },
    ],
  },
  {
    id: 1,
    question: "What tech is created by Facebook?",
    answers: [
      { text: "Gradle", prefix: "1", isCorrect: false },
      { text: "React", prefix: "x", isCorrect: true },
      { text: "Webpack", prefix: "2", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "typeof null === ?",
    answers: [
      { text: "undefined", prefix: "1", isCorrect: false },
      { text: "object", prefix: "x", isCorrect: true },
      { text: "undefined", prefix: "2", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "Who created Java?",
    answers: [
      { text: "Dennis Ritchie", prefix: "1", isCorrect: false },
      { text: "Graydon Hoare", prefix: "x", isCorrect: true },
      { text: "James Gosling", prefix: "2", isCorrect: false },
    ],
  },
]

interface State {
  currentQuestion: number
  score: number
  isGameDone: boolean
  hasClosedModal: boolean
}

type Action =
  | { type: "SET_CURRENT_QUESTION" }
  | { type: "SELECT_OPTION"; payload: number }
  | { type: "END_GAME" }
  | { type: "INCREMENT_SCORE" }
  | { type: "NEW_GAME" }
  | { type: "CLOSE_MODAL" }

const reducer = (state: State, action: Action) => {
  return produce(state, draft => {
    switch (action.type) {
      case "SET_CURRENT_QUESTION":
        return {
          ...state,
          currentQuestion: state.currentQuestion + 1,
        }
      case "SELECT_OPTION":
        console.log({ a: action.payload })
        return {
          ...state,
          currentQuestion: action.payload,
        }
      case "INCREMENT_SCORE":
        return { ...state, score: state.score + 1 }
      case "NEW_GAME":
        return {
          ...state,
          score: 0,
          currentQuestion: 0,
          isGameDone: false,
          hasClosedModal: false,
        }
      case "CLOSE_MODAL":
        return { ...state, hasClosedModal: true, isGameDone: false }
      case "END_GAME":
        return { ...state, isGameDone: true }
      default:
        throw new Error(`unable to read action`)
    }
  })
}

const GameWrapper = styled.section`
  position: relative;
`

const GameBody = styled.div`
  border: 1px solid white;
`

const Header = styled.div`
  border: 1px solid white;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
`
const Col = styled.div`
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3em;
`

const List = styled.ul`
  padding: 0;
  li {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
  }
`

const Cell = styled.div`
  &:nth-of-type(1) {
    padding-left: 1rem;
  }
  &:nth-of-type(2n) {
    display: flex;
    justify-content: space-evenly;
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
    background-color: #fff;
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

const AnswerButton = styled(Button)`
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

const fadeOptions = {
  initial: { y: -1000 },
  animate: { y: 0 },
  exit: { y: 1000 },
}

const QuizV2 = () => {
  const [{ currentQuestion, score, isGameDone, hasClosedModal }, dispatch] = useReducer(reducer, {
    currentQuestion: 0,
    score: 0,
    isGameDone: false,
    hasClosedModal: false,
  })

  return (
    <GameWrapper>
      <Fade isAnimated={isGameDone} options={fadeOptions} className={messageStyles}>
        <div className="wrapper">
          <p>
            you scored {score}/{questions.length} of questions
          </p>
          <div className="btn-wrapper">
            <Button type="button" onClick={() => dispatch({ type: "NEW_GAME" })}>
              new game
            </Button>
            <StyledLink to="/">back home</StyledLink>
          </div>
          <button
            className="exit-btn"
            type="button"
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
          >
            &#xd7;
          </button>
        </div>
      </Fade>

      <GameBody>
        <Header>
          <Col>Questions</Col>
          <Col>1</Col>
          <Col>X</Col>
          <Col>2</Col>
        </Header>
        <List>
          {questions.map(({ question, id, answers }) => (
            <li key={id}>
              <Cell>
                <p>{question}</p>
              </Cell>
              <Cell>
                {answers.map(({ text, prefix, isCorrect }) => (
                  <AnswerButton
                    disabled={hasClosedModal || id !== currentQuestion}
                    key={prefix}
                    onClick={() => {
                      if (isCorrect) {
                        dispatch({ type: "INCREMENT_SCORE" })
                      }
                      const nextQuestion = currentQuestion + 1
                      if (nextQuestion < questions.length) {
                        dispatch({ type: "SELECT_OPTION", payload: nextQuestion })
                      } else {
                        dispatch({ type: "END_GAME" })
                      }
                    }}
                  >
                    <span>{prefix}</span> {text}
                  </AnswerButton>
                ))}
              </Cell>
            </li>
          ))}
        </List>
      </GameBody>
    </GameWrapper>
  )
}

export default QuizV2
