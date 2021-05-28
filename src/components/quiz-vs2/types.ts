export interface State {
  currentQuestion: number
  score: number
  isGameDone: boolean
  hasClosedModal: boolean
  answeredQuestions: any[]
}

export type Action =
  | { type: "SET_CURRENT_QUESTION" }
  | { type: "SELECT_OPTION"; payload: { prefix: string; nextQuestion: number; id: number } }
  | { type: "END_GAME" }
  | { type: "INCREMENT_SCORE" }
  | { type: "NEW_GAME" }
  | { type: "CLOSE_MODAL" }

export type Dispatch = (action: Action) => void
