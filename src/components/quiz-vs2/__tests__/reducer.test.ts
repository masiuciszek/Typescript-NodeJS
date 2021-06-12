import { reducer } from "../reducer"

type Action =
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

describe("reducer", () => {
  const state = {
    currentQuestion: 0,
    score: 0,
    isGameDone: false,
    isModalOpen: false,
    answeredQuestions: [{ id: 0, prefix: "X" }],
    isMyStatsModalOpen: false,
  }

  test("when SET_CURRENT_QUESTION action is set, current question should be increment by one ", () => {
    const action: Action = { type: "SET_CURRENT_QUESTION" }
    const result = reducer(state, action)
    expect(result.currentQuestion).toBe(1)
  })

  test("when SELECT_OPTION action is set, current question should be increment by one ", () => {
    const payload = 100
    const action: Action = { type: "SELECT_OPTION", payload }
    const result = reducer(state, action)

    expect(result.currentQuestion).toBe(payload)
  })
})
