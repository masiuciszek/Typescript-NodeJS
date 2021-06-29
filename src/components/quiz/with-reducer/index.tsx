import styled from "@emotion/styled"
import {useReducer} from "react"

const GameWrapper = styled.div``

interface State {
  score: number
  answeredData: Array<any>
  showScoreModal: boolean
  showStatsModal: boolean
  currentQuestion: number
}
const initialState: State = {
  score: 0,
  answeredData: [],
  showScoreModal: false,
  showStatsModal: false,
  currentQuestion: 0,
}

type Action = {type: "SET_ANSWER"; payload: any}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_ANSWER":
      return {...state}
    default:
      throw new Error(`Unable to pare ${action.type}}`)
  }
}

const QuizWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GameWrapper>
      <h1>QuizWithReducer</h1>
    </GameWrapper>
  )
}
export default QuizWithReducer
