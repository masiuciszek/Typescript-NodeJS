import styled from "@emotion/styled"
import { useReducer } from "react"
import { Fade } from "../common/fade"

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
]

interface State {
  currentQuestion: number
  score: number
  isGameDone: boolean
}

interface SelectOptionPayload {
  isCorrect: boolean
  nextQuestion: number
}

type Action =
  | { type: "SET_CURRENT_QUESTION" }
  | { type: "SELECT_OPTION"; payload: SelectOptionPayload }
  | { type: "END_GAME" }
// type Dispatch = (action: Action) => void

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_CURRENT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      }
    case "SELECT_OPTION":
      return {
        ...state,
        currentQuestion: action.payload.nextQuestion,
        score: action.payload.isCorrect ? state.score + 1 : state.score,
      }
    case "END_GAME":
      return { ...state, isGameDone: true }
    default:
      throw new Error(`unable to read action`)
  }
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
  border: 1px solid white;
  display: grid;
  grid-template-columns: 1fr 1.7fr;
  li {
    border: 1px solid white;
    &:nth-of-type(2n) {
      background-color: red;
      display: flex;
      justify-content: space-between;
    }
    button {
      border: 1px solid white;
      flex: 1;
    }
  }
`

const fadeOptions = {
  initial: { y: -1000 },
  animate: { y: 0 },
  exit: { y: 1000 },
}

const QuizV2 = () => {
  const [{ currentQuestion, score, isGameDone }, dispatch] = useReducer(reducer, {
    currentQuestion: 0,
    score: 0,
    isGameDone: false,
  })
  return (
    <GameWrapper>
      <Fade isAnimated={isGameDone} options={fadeOptions}>
        <p>you scored {score}/questions.length of questions</p>
      </Fade>

      <GameBody>
        <Header>
          <Col>Values</Col>
          <Col>1</Col>
          <Col>X</Col>
          <Col>2</Col>
        </Header>
        <List>
          <li> {questions[currentQuestion].question} </li>
          <li>
            {questions[currentQuestion].answers.map(({ text, prefix, isCorrect }) => (
              <button
                key={prefix}
                onClick={() => {
                  const nextQuestion = currentQuestion + 1
                  if (nextQuestion < questions.length) {
                    dispatch({ type: "SELECT_OPTION", payload: { isCorrect, nextQuestion } })
                  } else {
                    dispatch({ type: "END_GAME" })
                  }
                }}
              >
                {prefix} {text}
              </button>
            ))}
          </li>
        </List>
      </GameBody>
    </GameWrapper>
  )
}

export default QuizV2
