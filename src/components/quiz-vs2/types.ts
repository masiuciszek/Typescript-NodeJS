export interface State {
  currentQuestion: number
  score: number
  isGameDone: boolean
  isModalOpen: boolean
  answeredQuestions: { id: number; prefix: string }[]
  isMyStatsModalOpen: boolean
}

export type Action =
  | { type: "SET_CURRENT_QUESTION" }
  | { type: "SELECT_OPTION"; payload: number }
  | { type: "END_GAME" }
  | { type: "INCREMENT_SCORE" }
  | { type: "NEW_GAME" }
  | { type: "ADD_ANSWERED_DATA"; payload: { id: number; prefix: string } }
  | { type: "CLOSE_MODAL" }
  | { type: "SHOW_MY_STATS" }
  | { type: "OPEN_MODAL" }
  | { type: "CLOSE_MY_STATS_MODAL" }

export type Dispatch = (action: Action) => void
