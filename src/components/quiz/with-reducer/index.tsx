import styled from "@emotion/styled"
import {useReducer} from "react"
import quizData from "../../../data/quiz-data.json"

interface AnswerData {
  isTrue: boolean
  text: string
  prefix: string
}

const SET_ANSWER = "SET_ANSWER"

const GameWrapper = styled.div``
const QuizBox = styled.div``

interface State {
  score: number
  answeredData: Array<AnswerData>
  showScoreModal: boolean
  showStatsModal: boolean
  currentQuestion: number
}
const initialState: State = {
  score: 0,
  currentQuestion: 0,
  answeredData: [],
  showScoreModal: false,
  showStatsModal: false,
}

type Action = {type: "SET_ANSWER"; payload: AnswerData}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case SET_ANSWER:
      return {
        ...state,
        answeredData: [...state.answeredData, action.payload],
        score: action.payload.isTrue ? state.score++ : state.score,
        currentQuestion: state.currentQuestion++,
      }
    default:
      throw new Error(`Unable to pare ${action.type}}`)
  }
}

const QuizWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GameWrapper>
      <h1>QuizWithReducer</h1>
      <QuizBox>
        <div className="question">
          <p>{quizData[state.currentQuestion].question}</p>
        </div>
        <ul>
          {quizData[state.currentQuestion].answers.map(({prefix, text, isTrue}) => (
            <li key={prefix}>
              <button type="button">{text}</button>
            </li>
          ))}
        </ul>
      </QuizBox>
    </GameWrapper>
  )
}
export default QuizWithReducer
