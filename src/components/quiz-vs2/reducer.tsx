import produce from "immer"
import { Action, State } from "./types"

export const reducer = (state: State, action: Action) => {
  return produce(state, draft => {
    switch (action.type) {
      case "SET_CURRENT_QUESTION":
        return {
          ...state,
          currentQuestion: state.currentQuestion + 1,
        }
      case "ADD_ANSWERED_DATA":
        return {
          ...state,
          answeredQuestions: [
            ...state.answeredQuestions,
            { id: action.payload.id, prefix: action.payload.prefix },
          ],
        }
      case "SELECT_OPTION":
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
          isMyStatsModalOpen: false,
          answeredQuestions: [],
        }
      case "SHOW_MY_STATS":
        return { ...state, isMyStatsModalOpen: true }
      case "CLOSE_MODAL":
        return { ...state, hasClosedModal: true, isGameDone: false }
      case "CLOSE_MY_STATS_MODAL":
        return { ...state, isMyStatsModalOpen: false }
      case "END_GAME":
        return { ...state, isGameDone: true }
      default:
        throw new Error(`unable to read action`)
    }
  })
}
