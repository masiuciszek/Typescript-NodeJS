import { useReducer } from "react"
import produce from "immer"
import { FinalMessage } from "./final-message"
import { Col, GameBody, GameWrapper, Header, List } from "./styles"
import { QuestionItem } from "./question-item"
import { Action, State } from "./types"

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
      { text: "James Gosling", prefix: "x", isCorrect: false },
      { text: "Graydon Hoare", prefix: "2", isCorrect: true },
    ],
  },
]

const reducer = (state: State, action: Action) => {
  return produce(state, draft => {
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
          answeredQuestions: [
            ...state.answeredQuestions,
            { id: action.payload.id, prefix: action.payload.prefix },
          ],
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
          answeredQuestions: [],
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

const QuizV2 = () => {
  const [{ currentQuestion, score, isGameDone, hasClosedModal, answeredQuestions }, dispatch] =
    useReducer(reducer, {
      currentQuestion: 0,
      score: 0,
      isGameDone: false,
      hasClosedModal: false,
      answeredQuestions: [],
    })

  console.log({ answeredQuestions })
  return (
    <GameWrapper>
      <FinalMessage
        isGameDone={isGameDone}
        questionsLength={questions.length}
        newGame={() => dispatch({ type: "NEW_GAME" })}
        closeModal={() => dispatch({ type: "CLOSE_MODAL" })}
        score={score}
      />

      <GameBody>
        <Header>
          <Col>Questions</Col>
          <Col>1</Col>
          <Col>X</Col>
          <Col>2</Col>
        </Header>
        <List>
          <QuestionItem
            questions={questions}
            hasClosedModal={hasClosedModal}
            currentQuestion={currentQuestion}
            dispatch={dispatch}
          />
        </List>
      </GameBody>
    </GameWrapper>
  )
}

export default QuizV2
